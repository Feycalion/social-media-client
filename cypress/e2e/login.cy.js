describe("Login", () => {
  it("can login with valid credentials", () => {
    cy.visit("https://darling-taiyaki-bb5b03.netlify.app/").wait(1000);

    cy.get("#loginEmail")
      .invoke("val", "feycalion@stud.noroff.no")
      .should("have.value", "feycalion@stud.noroff.no");

    cy.get("#loginPassword")
      .invoke("val", "999999999")
      .should("have.value", "999999999");
    cy.wait(1000);
    cy.get("#loginBtn").click();
  });
});
