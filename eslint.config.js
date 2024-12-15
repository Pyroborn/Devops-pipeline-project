import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import pluginCypress from "eslint-plugin-cypress";

/** @type {import('eslint').Linter.Config[]} */
export default [
// Global settings for all JavaScript and Vue files
{
    files: ["**/*.{js,mjs,cjs,vue}"],
    ignores: ["**/node_modules/**", "dist/**", "coverage/**", "**/.git/**"],
    languageOptions: {
        globals: {
            ...globals.browser,
        },
    },
    plugins: {
        vue: pluginVue,
    },
},
// JavaScript recommended configuration
pluginJs.configs.recommended,
// Vue essential configuration
...pluginVue.configs["flat/essential"],
// Cypress test files configuration
// Test files configuration (Vitest)
{
    files: ["**/*.{spec,test}.{js,mjs,cjs,vue}"],
    languageOptions: {
        globals: {
            ...globals.node,
            ...globals.jest,
            describe: "readonly",
            it: "readonly",
            test: "readonly",
            expect: "readonly",
            beforeEach: "readonly",
            afterEach: "readonly",
            beforeAll: "readonly",
            afterAll: "readonly",
            vi: "readonly",
        },
    },
},
// Cypress test files configuration
{
    files: ["cypress/**/*.{js,jsx,ts,tsx}", "cypress.config.js", "**/*.cy.{js,jsx,ts,tsx}"],
    plugins: {
        cypress: pluginCypress,
    },
    languageOptions: {
        globals: {
            ...globals.node,
            ...globals.browser,
            cy: "readonly",
            Cypress: "readonly",
            assert: "readonly",
            expect: "readonly",
            describe: "readonly",
            it: "readonly",
            beforeEach: "readonly",
            afterEach: "readonly",
        },
    },
    rules: {
        ...pluginCypress.configs.recommended.rules,
        "cypress/no-unnecessary-waiting": "error",
        "cypress/assertion-before-screenshot": "warn",
    },
}
];
