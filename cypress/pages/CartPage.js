export class CartPage
{
    getCart = "a.shopping_cart_link";
    getYourCard = '//span[contains(text(), "Your Cart")]';


    ValidateYourCartProducts(productName)
    {
        cy.get(this.getCart).click();
        cy.xpath(this.getYourCard).should("be.visible")



        // cy.get('div.inventory_item_label').each(($el, index, $list) => {
        //     const textproduct = $el.find('div.inventory_item_name').text()
        //                 for(let element of productName){
        //                 if (textproduct==(element)) {
        //                     let addCartselector ="#add-to-cart-" + textproduct.replace(/\s/gm, "-").toLowerCase();
        //                     console.log(addCartselector);
        //                     cy.get(addCartselector).click();  
        //             }
        //         }
        //   })


        

        cy.get('.cart_item_label').each(($el, index, $list) => {
            const textproduct = $el.find('.inventory_item_name').text()
            cy.log(textproduct)
                
          })

    }



}