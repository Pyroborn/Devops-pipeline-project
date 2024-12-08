describe("Todo App", () => {
  it("should have multiple tasks on the list", () => {
    cy.visit("http://localhost:5173/")

    cy.get("[data-testid='taskList'] li").each(($el, index, $list) => {
      cy.wrap($el).find("button").click();
    });
    cy.wait(1000)

    cy.get("[data-testid='taskInput']").type("buy some milk")
    cy.get("[data-testid='taskInput']").should("have.value", "buy some milk")
    cy.get("[data-testid='taskButton']").click()
    cy.wait(1000)

    cy.get("[data-testid='taskList']").find("li").should("contain", "buy some milk");
    cy.get("[data-testid='taskList'] li").contains("buy some milk").siblings("button").click();
    cy.wait(1000)
    
    cy.get("[data-testid='taskList']").should("not.contain", "buy some milk");
  })
})