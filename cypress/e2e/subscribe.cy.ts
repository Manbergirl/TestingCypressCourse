describe("newsLetter Subscribe Form", () => {
    beforeEach(() =>{
    cy.visit('http://localhost:3000/')
    })

    it("allows user to subscribe to the email list",() => {

    cy.getByData("email-input").type("Beatris.Dimitrovaaa@gmail.com")
    cy.getByData("submit-button").click();
    cy.getByData("success-message").should("exist").contains("Beatris.Dimitrovaaa@gmail.com") 
    })

    it.only("does NOT allow an invalid email address",()=>{
    
    cy.getByData("email-input").type("Bea")
    cy.getByData("submit-button").click();
    cy.getByData("success-message").should("not.exist")


    })


}) 