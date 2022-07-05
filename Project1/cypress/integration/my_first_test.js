/// <reference types="cypress" />

it('google test', () => {

    cy.visit('https://google.com')
    cy.get('.gLFyf').type('Automation Step by Step{enter} ')
    cy.wait(4000)

    cy.contains('Відео').click()

    // cy.get('.dmenKe > .cIkxbf > .usJj9c > h3 > .l').click()

})