///<reference types="cypress"/>

it ('Google testing', function()
{
    cy.visit('https://www.google.com')
    
    var item = "Test Automation"

    cy.get('.gLFyf').type(item) // predavani do hledace text
    cy.get('.gLFyf').type('{enter}') //potvryeni enter cili hledat

    item = "some other text"
    cy.log(item)
}
)