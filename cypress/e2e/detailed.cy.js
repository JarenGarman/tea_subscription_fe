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

  it("Displays subscription details", () => {
    cy.getBySel("sub-section")
      .find("h2")
      .should("contain", "Subscription Details")

      .getBySel("sub-section")
      .find("img")
      .should("exist")

      .getBySel("sub-section")
      .find("h3")
      .should("contain", "commodi")

      .getBySel("sub-section")
      .find("p")
      .should("contain", "$83.12");
  });

  it("Displays subscription teas", () => {
    cy.getBySel("teas-section")
      .find(".tea-title")
      .first()
      .should("contain", "Dianhong")

      .getBySel("teas-section")
      .find(".tea-brew-time")
      .first()
      .should("contain", "5 minutes")

      .getBySel("teas-section")
      .find(".tea-description")
      .first()
      .should(
        "contain",
        "Et sequi blanditiis. Et ut sed. Magni consectetur vel."
      )

      .getBySel("teas-section")
      .find(".tea-title")
      .last()
      .should("contain", "Darjeeling")

      .getBySel("teas-section")
      .find(".tea-brew-time")
      .last()
      .should("contain", "8 minutes")

      .getBySel("teas-section")
      .find(".tea-description")
      .last()
      .should(
        "contain",
        "Eius blanditiis sit. Est non incidunt. Libero unde rerum."
      );
  });
});
