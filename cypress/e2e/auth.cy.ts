import { createClient } from "../../utils/supabase/server";

const BASE_URL =
  process.env.NODE_ENV == "production" ? "" : "http://localhost:3000";

describe("user can login", () => {
  afterEach(() => {
    const supabase = createClient();
    supabase.auth.signOut();
  });

  /* ==== Test Created with Cypress Studio ==== */
  it("logs user in", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit(BASE_URL);
    cy.get(".border > .h-full").click();
    cy.get('[placeholder="you@example.com"]').type("josh@spydr.com");
    cy.get('[placeholder="••••••••"]').type("securepassword");
    cy.get(".bg-green-700").click();
    /* ==== End Cypress Studio ==== */
  });
});

describe("user can logout", () => {
  /* ==== Test Created with Cypress Studio ==== */
  it("Can login and out", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit(BASE_URL);
    cy.get(".border > .h-full > .flex").click();
    cy.get('[placeholder="you@example.com"]').click();
    cy.get('[placeholder="you@example.com"]').type("josh@spydr.com");
    cy.get('[placeholder="••••••••"]').type("securepassword");
    cy.get(".bg-green-700").click();
    cy.get(".bg-btn-background").click();
    /* ==== End Cypress Studio ==== */
  });
});
