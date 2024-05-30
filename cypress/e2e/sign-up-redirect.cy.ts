import { BASE_URL } from "./constants/urls";

describe("user email sign up redirect", () => {
  it("redirect the user to the sign up page from home page", function () {
    cy.visit(BASE_URL);
    /* ==== Generated with Cypress Studio ==== */
    cy.get(".flex-col > .inline-flex").click();
    /* ==== End Cypress Studio ==== */
    cy.contains("Username");
    cy.contains("Email");
    cy.contains("Password");
  });

  it("keeps the user email in the email field", function () {
    cy.visit(BASE_URL);
    /* ==== Generated with Cypress Studio ==== */
    cy.get("form.w-full > .flex-col > .flex").type("josh@spydr.com");
    cy.get(".flex-col > .inline-flex").click();
    /* ==== End Cypress Studio ==== */
    cy.get("[name=email]").should("have.value", "josh@spydr.com");
  });
});
