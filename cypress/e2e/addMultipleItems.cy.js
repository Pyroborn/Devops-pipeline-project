describe("Todo App", () => {
  it("should have multiple tasks on the list", () => {
    cy.visit("http://localhost:5173/")

    cy.get("[data-testid='taskInput']").type("buy some milk")
    cy.get("[data-testid='taskInput']").should("have.value", "buy some milk")
    cy.get("[data-testid='taskButton']").click()
    cy.get("[data-testid='taskList']").should("contain", "buy some milk")
    cy.get("[data-testid='taskInput']").type("enjoy the assignment")
    cy.get("[data-testid='taskInput']").should("have.value", "enjoy the assignment")
    cy.get("[data-testid='taskButton']").click()
    cy.get("[data-testid='taskList']").should("contain", "enjoy the assignment")
    cy.get("[data-testid='taskList']").find("li").should("contain", "buy some milk");
    cy.get("[data-testid='taskList']").find("li").should("contain", "enjoy the assignment");
  })
})