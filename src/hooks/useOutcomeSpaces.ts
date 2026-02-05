import { useQuery } from '@tanstack/react-query'
import { graphqlRequest } from '../services/graphql/client'
import {
    createProductsWithOutcomeSpaceQuery,
    type ProductsWithOutcomeSpaceResponse,
    type ProductWithOutcomeSpace,
    type OutcomeSpace,
} from '../services/graphql/queries'

async function fetchProductsWithOutcomeSpaces(): Promise<ProductWithOutcomeSpace[]> {
    const query = createProductsWithOutcomeSpaceQuery()
    const response = await graphqlRequest<ProductsWithOutcomeSpaceResponse>(query)
    return response.products.nodes
}

export const useProductsWithOutcomeSpacesQuery = (enabled = true) =>
    useQuery<ProductWithOutcomeSpace[]>({
        queryKey: ['productsWithOutcomeSpaces'],
        queryFn: fetchProductsWithOutcomeSpaces,
        enabled,
        staleTime: 240_000,
    })

// Helper type for grouped products
export interface OutcomeSpaceGroup {
    outcomeSpace: OutcomeSpace
    products: ProductWithOutcomeSpace[]
}

export interface GroupedByFspType {
    fspType: string
    outcomeSpaceGroups: OutcomeSpaceGroup[]
}

// Helper function to group products by fspType and then by outcomeSpace
export function groupProductsByOutcomeSpace(products: ProductWithOutcomeSpace[]): GroupedByFspType[] {
    // First, group by outcomeSpace ID
    const outcomeSpaceMap = new Map<string, OutcomeSpaceGroup>()

    for (const product of products) {
        const outcomeSpace = product.extendedMetadata?.outcomeSpace
        if (!outcomeSpace) continue

        const existing = outcomeSpaceMap.get(outcomeSpace.id)
        if (existing) {
            existing.products.push(product)
        } else {
            outcomeSpaceMap.set(outcomeSpace.id, {
                outcomeSpace,
                products: [product],
            })
        }
    }

    // Then, group by fspType
    const fspTypeMap = new Map<string, OutcomeSpaceGroup[]>()

    for (const group of outcomeSpaceMap.values()) {
        const fspType = group.outcomeSpace.fspType || 'other'
        const existing = fspTypeMap.get(fspType)
        if (existing) {
            existing.push(group)
        } else {
            fspTypeMap.set(fspType, [group])
        }
    }

    // Convert to array and sort
    const result: GroupedByFspType[] = []
    const typeOrder = ['scalar', 'binary', 'ternary', 'other']

    for (const fspType of typeOrder) {
        const groups = fspTypeMap.get(fspType)
        if (groups && groups.length > 0) {
            result.push({
                fspType,
                outcomeSpaceGroups: groups,
            })
        }
    }

    // Add any remaining types not in typeOrder
    for (const [fspType, groups] of fspTypeMap) {
        if (!typeOrder.includes(fspType)) {
            result.push({
                fspType,
                outcomeSpaceGroups: groups,
            })
        }
    }

    return result
}
