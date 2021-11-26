/// <reference types="cypress" />

describe("Test login into the app", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Perform log-in into the app with invalid credentials", () => {
    return cy.fixture("user.json").then((userData) => {
      cy.get("#username").type(userData.invalidCredentials.username);
      cy.get("#password").type(userData.invalidCredentials.password);
      cy.get(".MuiButtonBase-root").click();
      cy.get(".MuiTypography-root.error").should(
        "have.text",
        "Incorrect username or password."
      );
    });
  });

  it("Perform log-in into the app with valid credentials", () => {
    cy.Login();
  });
});

describe("Test logout", () => {
  it("Click logout button", () => {
    cy.Logout();
  });

  it("Log-in page should load", () => {
    cy.get(".MuiTypography-h1").should("have.text", "Log in");
  });
});
