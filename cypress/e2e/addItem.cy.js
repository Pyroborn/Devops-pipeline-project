describe("Todo App", () => {
  it("should have task on the list", () => {
    cy.visit("http://localhost:5173/"), { responseTimeout: 1000}

    cy.get("[data-testid='taskInput']").type("buy some milk")
    cy.get("[data-testid='taskInput']").should("have.value", "buy some milk")
    cy.get("[data-testid='taskButton']").click()
    cy.get("[data-testid='taskList']").should("contain", "buy some milk")
  })
})