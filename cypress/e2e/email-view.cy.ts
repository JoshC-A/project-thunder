import { BASE_URL } from "./constants/urls";

describe("user can view their history of emails", () => {
  it("logs user in and views an email", function () {
    cy.visit(BASE_URL);
    cy.get(".border > a").click();
    cy.get('[placeholder="you@example.com"]').type("josh@spydr.com");
    cy.get('[type="password"]').type("securepassword");
    cy.get("[type=submit]").click();
    /* ==== Generated with Cypress Studio ==== */
    cy.get(":nth-child(1) > .font-medium > a").click();
    cy.contains("Good morning");
    /* ==== End Cypress Studio ==== */
  });
});
