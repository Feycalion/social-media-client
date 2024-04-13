describe("Login", () => {
  it("can login with valid credentials", () => {
    cy.visit("https://feycalion.github.io/social-media-client")
      .wait(1000)
      .get("#registerForm > div.modal-footer > button.btn-outline-success")
      .click();

    cy.get("#loginEmail")
      .invoke("val", "feycalion@stud.noroff.no")
      .should("have.value", "feycalion@stud.noroff.no");

    cy.get("#loginPassword").invoke("val", "12345678");
    cy.wait(1000);
    cy.get(`button.btn-success`).click();
  });
});
