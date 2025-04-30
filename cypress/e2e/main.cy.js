describe("Main Page", () => {
  beforeEach(() => {
    cy.intercept("GET", "/api/v1/subscriptions", { fixture: "subs" }).as(
      "getSubs"
    );
    cy.visit("http://localhost:5173/").wait("@getSubs");
  });
  it("Displays header with title and sort", () => {
    cy.getBySel("title").should("contain", "Tea Subscriptions");
    cy.getBySel("sort-label").should("contain", "Sort by: ");
    cy.getBySel("sort-select").should("exist");
  });
});
