///<reference types='cypress'/>

it("Google Create Account Fixture",function()
{
    cy.visit('https://react-redux.realworld.io/#/login?_k=2gqraj')

    cy.fixture('example').then((user)=>{

        cy.get(':nth-child(1) > .form-control').type(user.email)
        cy.get(':nth-child(2) > .form-control').type(user.password)

    })
   
    cy.get('.btn').contains('Sign in').should('be.visible').click()

    
}
)