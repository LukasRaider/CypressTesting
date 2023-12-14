///<reference types="cypress"/>

it('Write to file',function(){

    cy.writeFile('TestFile.txt', 'I am QA and PM')

})

if('Read from file', function(){
    cy.readFile('TestFile.txt').should('contains', 'I am QA and PM')
})