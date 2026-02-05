/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GRAPHQL_ENDPOINT: string
  readonly VITE_AFP_WEB_APP?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
