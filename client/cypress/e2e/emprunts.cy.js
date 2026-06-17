describe("Test E2E Emprunts", () => {
  it("Affiche les emprunts d'un utilisateur", () => {
    cy.visit("http://localhost:5173/emprunts");

    cy.get("input").type("jean.dupont@biblio.com");

    cy.get("button").click();

    cy.contains("Le Petit Prince");
    cy.contains("1984");
  });
});