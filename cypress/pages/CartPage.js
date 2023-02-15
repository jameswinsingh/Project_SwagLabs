export class CartPage {
    getCart = "a.shopping_cart_link";
    getYourCard = '//span[contains(text(), "Your Cart")]';
    checkoutButton = '#checkout';



    clickCart() {
        cy.get(this.getCart).click();
        cy.xpath(this.getYourCard).should("be.visible")

    }



    // ValidateYourCartProducts(productName)
    // {
    //     cy.get('.cart_item_label').each(($el, index, $list) => 
    //     {
    //         const textproduct = $el.find('.inventory_item_name').text()
    //         if(textproduct.includes(productName))
    //         {
    //             expect(textproduct).to.be.equal(productName)
    //         }     
    //     })

    // }

    validateYourCartProducts(productName) {

        productName.forEach(element => {
            cy.ValidateYourCart(element);

        });

    }


    selectCheckOut() {
        cy.get(this.checkoutButton).click();

    }





}