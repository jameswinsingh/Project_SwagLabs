export class Logout
{

    botLogo = ".bot_column"


    verifyLogoutlandingPage()
    {
        cy.get(this.botLogo).should("be.visible")
    }




}