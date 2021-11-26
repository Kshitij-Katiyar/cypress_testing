/// <reference types="cypress" />

// Global variables
let email;
let username;

// Load users page
describe("Users page", () => {
  it("Visit the users page", () => {
    return cy.Login().then(() => {
      cy.visit("/users");
    });
  });

  it("Users page should load", () => {
    cy.get(".MuiTypography-h6.font-forza-primary").should(
      "have.text",
      "Halcyon / Users"
    );
  });
});

// Add new user
describe("Add user on users page", () => {
  it("Open add new user drawer", () => {
    cy.get(".MuiButtonBase-root").contains("New User").click();
  });

  it("Enter data into the fields", () => {
    return cy.fixture("createUser.json").then((userData) => {
      username = userData.username + `${new Date().getTime()}`;
      email = username + "@cypresstest.com";

      cy.get("#fullName").type(userData.fullName);
      cy.get("#username").type(username);
      cy.get("#email").type(email);
      cy.get("#password").type(userData.password);
      cy.get("#repeatPassword").type(userData.password);
    });
  });

  it("Click on save button", () => {
    cy.get(".MuiButtonBase-root").contains("Save").should("be.visible").click();
  });

  it("User should be added", () => {
    cy.get(".MuiTableCell-root").contains(username).should("be.visible");
  });
});

// Delete the new user
describe("Delete the added user from users page and logout", () => {
  it("Click on delete button", () => {
    cy.get(".MuiTableCell-root").last().click();
    cy.get(".MuiTableCell-root")
      .contains(email)
      .should("be.visible")
      .parent()
      .next(".MuiTableCell-root")
      .click();
    cy.get(".cursor-pointer").contains("Delete").should("be.visible").click();
  });

  it("Confirm delete and logout", () => {
    cy.get(".MuiButtonBase-root")
      .contains("Delete")
      .should("be.visible")
      .click();
    cy.Logout();
  });
});
