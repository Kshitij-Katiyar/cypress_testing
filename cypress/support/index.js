// ***********************************************************
// Don't delete this file, if deleted a new file will be created automatically by Cypress
//
// This support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// Preserve cookies untill all tests are completed
Cypress.Cookies.defaults({
  preserve: [
    "access_token_cookie",
    "csrf_access_token",
    "refresh_token_cookie",
    "csrf_refresh_token",
  ],
});
