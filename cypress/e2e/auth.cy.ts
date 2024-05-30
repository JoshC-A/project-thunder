import { BASE_URL } from "./constants/urls";

describe("user can login", () => {
  /* ==== Test Created with Cypress Studio ==== */
  it("logs user in", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit(BASE_URL);
    cy.get(".border > a").click();
    cy.get('[placeholder="you@example.com"]').type("josh@spydr.com");
    cy.get('[type="password"]').type("securepassword");
    cy.get(".bg-green-700").click();
    /* ==== End Cypress Studio ==== */
  });
});

describe("user can logout", () => {
  /* ==== Test Created with Cypress Studio ==== */
  it("Can login and out", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit(BASE_URL);
    cy.get(".border > a").click();
    cy.get('[placeholder="you@example.com"]').type("josh@spydr.com");
    cy.get('[type="password"]').type("securepassword");
    cy.get(".bg-green-700").click();
    cy.get(".inline-flex").click();
    /* ==== End Cypress Studio ==== */
  });
});

describe("sign up", () => {
  /* ==== Test Created with Cypress Studio ==== */
  it("Can sign up", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit(BASE_URL);
    cy.get(".bg-black > .text-white").click();
    cy.get('[placeholder="Username"]').type("test");
    cy.get('[placeholder="you@example.com"]').type(
      `${Date.now().toString()}@test.com`
    );
    cy.get('[type="password"]').type("securepassword");
    cy.get(".border-foreground\\/20").click();
    /* ==== End Cypress Studio ==== */
  });
});
