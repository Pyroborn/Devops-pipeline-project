describe("Todo App", () => {
  it("should have mark a task on the list", () => {
    cy.visit("http://localhost:5173/")

    cy.get("[data-testid='taskInput']").type("buy some milk")
    cy.get("[data-testid='taskInput']").should("have.value", "buy some milk")
    cy.get("[data-testid='taskButton']").click()
    cy.wait(1000)

    cy.get("[data-testid='taskList']").contains("li", "buy some milk")
    cy.get("[data-testid='taskList']").get("li").click({ multiple: true })
    cy.wait(1000)
    
    cy.get("[data-testid='taskList']").get("li").should("have.class", "completed")
  })
})