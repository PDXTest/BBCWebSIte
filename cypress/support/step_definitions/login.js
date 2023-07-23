import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

Given('User launch the BBC website', () => {
    cy.visit('https://account.bbc.com/signin')
})

When('User enter {string}, {string} and click on submit button', (username,password) => {
    cy.get('input[id=user-identifier-input]').type(username)
    cy.get('input[id=password-input]').type(password)
    cy.get('button[type=submit]').click()
   
})

Then('User validate the home page', () => {
        cy.origin('https://www.bbc.co.uk', () =>{
        cy.get('.ssrcss-13ox91y-NavigationLink-AccountLink').should('be.visible')
     
    })
})


