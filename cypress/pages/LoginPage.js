export class LoginPage {
    userName = "#user-name";
    password = "#password";
    loginButton = "#login-button";



    validateLandingPageURL(url) {
        cy.url().should('include', url)

    }

    login(userName, password) {
        cy.get(this.userName).type(userName);
        cy.get(this.password).type(password);
        cy.get(this.loginButton).click();
    }


    












}