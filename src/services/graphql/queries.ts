export interface BaseCase {
  id: string
  condition: string
  fspResolution: string
}

export interface EdgeCaseNode {
  id: string
  condition: string
  fspResolution: string
}

export interface EdgeCaseEdge {
  node: EdgeCaseNode
}

export interface EdgeCases {
  edges: EdgeCaseEdge[]
}

export interface OutcomePoint {
  id: string
  fspType: string
  outcome?: string | null
  releaseDate?: string | null
  referenceDate?: string | null
}

export interface OutcomeSpace {
  id: string
  fspType: string
  description: string
  units?: string | null
  frequency?: string | null
  sourceName?: string | null
  sourceUri?: string | null
  baseCase: BaseCase
  edgeCases: EdgeCases
}

export interface ProductWithOutcomeSpace {
  id: string
  symbol: string
  description: string
  minPrice: string
  maxPrice: string
  extendedMetadata: {
    id: string
    outcomeSpace: OutcomeSpace | null
    outcomePoint: OutcomePoint | null
  } | null
}

export interface ProductsWithOutcomeSpaceResponse {
  products: {
    nodes: ProductWithOutcomeSpace[]
  }
}

export function createProductsWithOutcomeSpaceQuery(): string {
  return `
    query ProductsWithOutcomeSpace {
      products {
        nodes {
          id
          symbol
          description
          minPrice
          maxPrice
          extendedMetadata {
            id
            outcomeSpace {
              id
              fspType
              description
              units
              frequency
              sourceName
              sourceUri
              baseCase {
                id
                condition
                fspResolution
              }
              edgeCases {
                edges {
                  node {
                    id
                    condition
                    fspResolution
                  }
                }
              }
            }
            outcomePoint {
              id
              fspType
              outcome
              releaseDate
              referenceDate
            }
          }
        }
      }
    }
  `
}
