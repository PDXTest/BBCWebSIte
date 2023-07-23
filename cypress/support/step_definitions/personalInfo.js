import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

Then('user clicks on Account and settings', () => {
    cy.origin('https://www.bbc.co.uk', () =>{
        cy.get('.ssrcss-13ox91y-NavigationLink-AccountLink').click()
    })
})

Then('user click on Continue to Settings button', () => {
    cy.get('a[class=button').contains('Continue to settings').click()
})

Then('user update the postcode', () => {
    cy.get('#Postcode-field > .field__input-container--secondary-content > .link > .link__text').click()
    cy.get('#new-postcode-input').clear()
    cy.get('#new-postcode-input').type('PO6 4TY')
    cy.get('button.button').click()
    cy.get('.form-message__title').should('have.text', 'Location saved')
   
})