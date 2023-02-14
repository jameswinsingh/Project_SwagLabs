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



Cypress.Commands.add('LaunchBrowser', () => { 
    // cy.visit("https://www.saucedemo.com/"),{ timeout: 520000 },{ force: true }
    cy.visit("https://www.saucedemo.com/")
 })



//  Cypress.Commands.add('Login', function(userName, password)  { 
//     cy.get(this.userName).type(userName);
//     cy.get(this.password).type(password);
//     cy.get(this.loginButton).click(); 
//  })