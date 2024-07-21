describe("https://darling-taiyaki-bb5b03.netlify.app/", () => {
  it("can't login with invalid credentials and is shown an error message", () => {
    cy.visit("https://darling-taiyaki-bb5b03.netlify.app/").wait(1000);
    cy.get("#loginEmail")
      .invoke("val", "feycalion@stud.noroff.no")
      .should("have.value", "feycalion@stud.noroff.no");

    cy.get("#loginPassword")
      .invoke("val", "999999998")
      .should("have.value", "999999998");
    cy.wait(1000);
    cy.get("#loginBtn").click();

    cy.on("window:alert", (message) => {
      expect(message).to.equal(
        "Either your username was not found or your password is incorrect",
      );
    });
  });
});
