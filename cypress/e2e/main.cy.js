describe("Main Page", () => {
  beforeEach(() => {
    cy.intercept("GET", "/api/v1/subscriptions", { fixture: "subs" })
      .as("getSubs")
      .visit("http://localhost:5173/")
      .wait("@getSubs");
  });

  it("Displays header with title and sort", () => {
    cy.getBySel("title")
      .should("contain", "Tea Subscriptions")

      .getBySel("sort-label")
      .should("contain", "Sort by: ")

      .getBySel("sort-select")
      .should("exist");
  });

  it("Displays subscriptions in default order", () => {
    cy.getBySel("subscriptions-container")
      .find(".sub-title")
      .first()
      .should("contain", "commodi")

      .getBySel("subscriptions-container")
      .find(".sub-price")
      .first()
      .should("contain", "$83.12")

      .getBySel("subscriptions-container")
      .find(".sub-title")
      .last()
      .should("contain", "neque")

      .getBySel("subscriptions-container")
      .find(".sub-price")
      .last()
      .should("contain", "$24.36");
  });
});
