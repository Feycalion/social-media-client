import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    ignores: [
      "src/js/api/auth/login.test.js",
      "src/js/api/auth/logout.test.js",
      "cypress/e2e/*.cy.js",
    ],
  },
];
