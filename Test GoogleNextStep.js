///<reference types="cypress"/>

it ('Google testing', function()
{
    cy.visit('https://www.google.com')
    cy.wait(5000) //celani v milisekundach cili 5 sekund
    

    cy.title().should('eq',"Google") // nazev testu
}
)