import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,vue}"],
    languageOptions: {
      // Define which global variables to include
      globals: {
        ...globals.browser, // This includes browser-specific globals like `window`, `document`, etc.
      },
    },
  },
  pluginJs.configs.recommended, // Using the recommended configuration from ESLint plugin for JavaScript
  ...pluginVue.configs["flat/essential"], // Using Vue's essential configuration
];
