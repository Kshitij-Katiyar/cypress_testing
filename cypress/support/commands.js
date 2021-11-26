// ***********************************************
// Don't delete this file, if deleted a new file will be created automatically by Cypress
//
// Here you can create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Common command to perform Login
Cypress.Commands.add("Login", () => {
  cy.visit("/");
  cy.fixture("user.json").then((userData) => {
    cy.get("#username").type(userData.validCredentials.username);
    cy.get("#password").type(userData.validCredentials.password);
  });
  cy.get(".MuiButtonBase-root").click();
  cy.get(".MuiTypography-h6.font-forza-primary").should("have.text", "events");
});

// Common command to perform Logout
Cypress.Commands.add("Logout", () => {
  cy.get(".MuiButtonBase-root").contains("Logout").click();
  cy.get(".MuiTypography-h1").should("have.text", "Log in");
});
