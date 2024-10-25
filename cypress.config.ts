import { defineConfig } from "cypress";
import "@cypress/instrument-cra";

export default defineConfig({
  env: {
    codeCoverage: {
      exclude: ["cypress/**/*.*", "src/store.ts"],
    },
  },
  e2e: {
    setupNodeEvents(on, config) {
      require("@cypress/code-coverage/task")(on, config);
      return config;
    },
  },

  component: {
    excludeSpecPattern: ["src/store.ts"],
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
    setupNodeEvents(on, config) {
      require("@cypress/code-coverage/task")(on, config);
      return config;
    },
  },
});
