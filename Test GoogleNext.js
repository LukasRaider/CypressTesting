///<reference types="cypress"/>

it ('Google testing', function()
{
    cy.visit('https://www.google.com')
    cy.get('.FPdoLc > center > .gNO89b').should('contain','Google Search')
    cy.get('.FPdoLc > center > .gNO89b').should('be.enabled')
    cy.get('.FPdoLc > center > .gNO89b').should('not.be.enabled')

}
) 
// pro psuteni tstu je potreba --npx cypress run --spec "cypress/Test GoogleNext.js"