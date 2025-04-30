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

  it("Displays subscription customers", () => {
    cy.getBySel("customer-subs")
      .find(".customer-name")
      .first()
      .should("contain", "Kaley Hand")

      .getBySel("customer-subs")
      .find(".status")
      .first()
      .should("contain", "Inactive")

      .getBySel("customer-subs")
      .find(".toggle-status")
      .first()
      .should("contain", "Reactivate")

      .getBySel("customer-subs")
      .find(".customer-email")
      .first()
      .should("contain", "melina@terry-stamm.example")

      .getBySel("customer-subs")
      .find(".customer-address")
      .first()
      .should("contain", "3343 Solomon Ridge, Hyattchester, CO 36994-5015")

      .getBySel("customer-subs")
      .find(".customer-name")
      .last()
      .should("contain", "Jenine Christiansen")

      .getBySel("customer-subs")
      .find(".status")
      .last()
      .should("contain", "Active")

      .getBySel("customer-subs")
      .find(".toggle-status")
      .last()
      .should("contain", "Cancel")

      .getBySel("customer-subs")
      .find(".customer-email")
      .last()
      .should("contain", "cherly.wisoky@walsh.example")

      .getBySel("customer-subs")
      .find(".customer-address")
      .last()
      .should("contain", "770 Bonnie Lock, South Mindifurt, MT 63955");
  });
});
