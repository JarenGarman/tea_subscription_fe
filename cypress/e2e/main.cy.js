describe("Main Page", () => {
  beforeEach(() => {
    cy.intercept("GET", "/api/v1/subscriptions", { fixture: "subs" })
      .as("getSubs")
      .visit("http://localhost:5173/")
      .wait("@getSubs")
      .url()
      .should("eq", "http://localhost:5173/");
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

  it("Displays subscriptions sorted by price descending", () => {
    cy.intercept("GET", "/api/v1/subscriptions?sort_by_price=desc", {
      fixture: "subs_pr_desc",
    })
      .as("getSubsDesc")
      .getBySel("sort-select")
      .select("Price: High to Low")
      .wait("@getSubsDesc")

      .getBySel("subscriptions-container")
      .find(".sub-title")
      .first()
      .should("contain", "eveniet")

      .getBySel("subscriptions-container")
      .find(".sub-price")
      .first()
      .should("contain", "$92.23")

      .getBySel("subscriptions-container")
      .find(".sub-title")
      .last()
      .should("contain", "neque")

      .getBySel("subscriptions-container")
      .find(".sub-price")
      .last()
      .should("contain", "$24.36");
  });

  it("Displays subscriptions sorted by price ascending", () => {
    cy.intercept("GET", "/api/v1/subscriptions?sort_by_price=asc", {
      fixture: "subs_pr_asc",
    })
      .as("getSubsAsc")
      .getBySel("sort-select")
      .select("Price: Low to High")
      .wait("@getSubsAsc")

      .getBySel("subscriptions-container")
      .find(".sub-title")
      .first()
      .should("contain", "neque")

      .getBySel("subscriptions-container")
      .find(".sub-price")
      .first()
      .should("contain", "$24.36")

      .getBySel("subscriptions-container")
      .find(".sub-title")
      .last()
      .should("contain", "eveniet")

      .getBySel("subscriptions-container")
      .find(".sub-price")
      .last()
      .should("contain", "$92.23");
  });

  it("Moves to detailed page when clicking on a subscription", () => {
    cy.intercept("GET", "/api/v1/subscriptions/1", {
      fixture: "detailed_sub",
    })
      .as("getSub")
      .getBySel("subscriptions-container")
      .find("article")
      .first()
      .click()
      .wait("@getSub")

      .url()
      .should("eq", "http://localhost:5173/subscriptions/1");
  });
});
