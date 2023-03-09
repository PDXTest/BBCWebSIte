import {Given} from '@badeball/cypress-cucumber-preprocessor'

Given('Login to Orange HRM First Time', () => {

    //lomg to the application
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name=username]').type('Admin')
    cy.get('[name=password]').type('admin123')
    cy.get('[type=submit]').click()

    //validate the dashboard text
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard')

    cy.xpath('//*[text()="Recruitment"]').click()
    cy.xpath('//div[@class="orangehrm-header-container"]/button[@type="button"]').click()

    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('Chandu')
    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('Bhirud')
    cy.get('.oxd-select-wrapper').click()
    cy.get('[role=listbox]').contains('Senior QA Lead').click()
     
});

Given('Login to Orange HRM Second Time', () => {

    //lomg to the application
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name=username]').type('Admin')
    cy.get('[name=password]').type('admin123')
    cy.get('[type=submit]').click()

    //validate the dashboard text
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard')

    cy.get(':nth-child(5) > .oxd-main-menu-item > .oxd-text').click()
    // cy.get('.orangehrm-header-container > .oxd-button').click()
    cy.get('.orangehrm-header-container > .oxd-button').click()

    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('Chandu')
    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('Bhirud')
    cy.get('.oxd-select-wrapper').click()
    cy.get('[role=listbox]').contains('Software Engineer').click()

});