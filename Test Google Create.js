///<reference types='cypress'/>

it("Google Create Account",function()
{
    cy.visit('https://accounts.google.com./signup/v2/wecreateaccount?services')
    cy.get('[jsname="Odb2Kd"] > rFrNMe').type('Lukas')
    cy.get('[jsname="qlx7ve"] > rFrNMe').type('Huvar')
    cy.get('.d2CFce > rFrNMe').type('Lukas Huvar'+Math.random()*5000)
    cy.get('.qhFLie').click()
}
)