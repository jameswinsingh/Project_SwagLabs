export class BackToHomePage {

    title = ".title"
    burgerMenu = "#react-burger-menu-btn"




    validateProductPageTitle(titleText) {
        cy.get(this.title).should("have.text", titleText)
    }


    openBurgerMenu()
    {
        cy.get(this.burgerMenu).click()
    }













}

