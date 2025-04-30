describe("Error Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/s");
  });

  it("Displays 404 for unknown routes", () => {
    cy.getBySel("error-message")
      .find("h2")
      .should("contain", "404: This page doesn't exist")

      .getBySel("error-message")
      .find("p")
      .should("contain", "Sorry, the route you're trying to visit is invalid")

      .getBySel("error-message")
      .find("a")
      .should("contain", "Go back home");
  });

  it("Takes you home after clicking link", () => {
    cy.intercept("GET", "/api/v1/subscriptions", { fixture: "subs" })
      .as("getSubs")
      .getBySel("error-message")
      .find("a")
      .click()
      .wait("@getSubs")

      .url()
      .should("eq", "http://localhost:5173/");
  });
});
