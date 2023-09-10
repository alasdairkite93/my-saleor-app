import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://thwatchshop.eu.saleor.cloud/graphql/",
  documents: "graphql/**/*.graphql",
  generates: {
    "./saleor/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
