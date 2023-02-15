export class BurgerMenuPage
{

    burgerMenu = "#inventory_sidebar_link"
    logoutButton = "#logout_sidebar_link"

    validateButgerMenuIsDisplayed(expectedText)
    {
        cy.get(this.burgerMenu).should("have.text", expectedText )
    }


    logOut()
    {
        cy.get(this.logoutButton).click();
    }





}