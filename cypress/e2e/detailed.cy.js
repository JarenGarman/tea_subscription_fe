describe("Detailed Page", () => {
  beforeEach(() => {
    cy.intercept("GET", "/api/v1/subscriptions/1", {
      fixture: "detailed_sub",
    })
      .as("getSub")
      .visit("http://localhost:5173/subscriptions/1")
      .wait("@getSub")

      .url()
      .should("eq", "http://localhost:5173/subscriptions/1");
  });

  it("Can click home button to return to main page", () => {
    cy.intercept("GET", "/api/v1/subscriptions", { fixture: "subs" })
      .as("getSubs")
      .getBySel("home")
      .click()
      .wait("@getSubs")
      .url()
      .should("eq", "http://localhost:5173/");
  });

  it("Can click title to return to main page", () => {
    cy.intercept("GET", "/api/v1/subscriptions", { fixture: "subs" })
      .as("getSubs")
      .getBySel("title")
      .click()
      .wait("@getSubs")
      .url()
      .should("eq", "http://localhost:5173/");
  });
});
