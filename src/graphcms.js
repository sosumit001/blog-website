import { GraphQLClient } from "graphql-request"
// import { defineConfig } from "vite"

const graphcms = new GraphQLClient(
    `${import.meta.env.VITE_GRAPH_CMS_ID}`
  )

export default graphcms