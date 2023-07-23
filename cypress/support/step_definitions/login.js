import { Given, When } from "@badeball/cypress-cucumber-preprocessor"

Given('User launch the BBC website', () => {
    cy.visit('https://account.bbc.com/signin')
})

When('User login to the Website', () => {
    cy.get('input[id=user-identifier-input]').type('chandubhirud@yahoo.com')
    cy.get('input[id=password-input]').type('login2bbc')
    cy.get('button[type=submit]').click()
})