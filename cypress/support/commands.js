// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



Cypress.Commands.add('launchBrowser', () => {
    cy.visit("https://www.saucedemo.com/")
})

Cypress.Commands.add('validateYourCart', (productName) => {
    cy.get('.cart_item_label').each(($el, index, $list) => {
        const textproduct = $el.find('.inventory_item_name').text()
        if (textproduct.includes(productName)) {
            expect(textproduct).to.be.equal(productName)
        }
    })
})







