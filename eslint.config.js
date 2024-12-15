import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import pluginCypress from "eslint-plugin-cypress";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,vue}"],
    languageOptions: {
      globals: {
        ...globals.browser,  // Includes browser-specific globals like `window`, `document`, etc.
        ...pluginCypress.configs.recommended.globals, // Include Cypress globals like `cy`, `Cypress`, etc.
      },
    },
  },
  pluginJs.configs.recommended, // Using the recommended configuration from ESLint plugin for JavaScript
  ...pluginVue.configs["flat/essential"], // Using Vue's essential configuration
  {
    files: ["cypress/**/*.js"],  // Apply these settings to Cypress test files
    plugins: ["cypress"], // Use the Cypress plugin
    languageOptions: {
      globals: {
        ...globals.browser, // Browser globals
        ...pluginCypress.configs.recommended.globals, // Cypress globals
      },
    },
    rules: {
      // You can override or add specific rules for Cypress tests here
    },
  },
  pluginCypress.configs.recommended, // Apply Cypress recommended rules
];
