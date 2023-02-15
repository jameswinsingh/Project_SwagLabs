export class CheckoutPage {

    firstName = "#first-name";
    lastName = "#last-name";
    postalCode = "#postal-code";
    continueButton = "#continue"
    pageName = '//span[contains(text(), "Your Information")]'



    validateLandingPage() {
        cy.xpath(this.pageName).should("have.text", "Checkout: Your Information")
    }


    enterUserInformation(firstName, lastName, postalCode) {
        cy.get(this.firstName).type(firstName);
        cy.get(this.lastName).type(lastName);
        cy.get(this.postalCode).type(postalCode);

    }


    selectContinueButton() {
        cy.get(this.continueButton).click()

    }



    // validateProductQuantity(productQuantity)
    // { 
    //     cy.get('.cart_item').each(($el, index, $list) => 
    //     {
    //         const textproduct = $el.find('.cart_quantity').text()
    //         if(textproduct.includes(productQuantity))
    //         {
    //             expect(textproduct).to.be.equal(productQuantity)

    //         }     
    //     })  
    // }







}