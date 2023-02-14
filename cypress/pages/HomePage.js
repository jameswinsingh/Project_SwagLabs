export class HomePage
{

    product ='//span[contains(text(),"Products")]';



    validateHomePage()
    {
        cy.xpath(this.product).should("be.visible");
        
    }

    addproduct(productName)
    {
        cy.get('div.inventory_item_label').each(($el, index, $list) => {
            const textproduct = $el.find('div.inventory_item_name').text()
                        for(let element of productName){
                        if (textproduct==(element)) {
                            let addCartselector ="#add-to-cart-" + textproduct.replace(/\s/gm, "-").toLowerCase();
                            console.log(addCartselector);
                            cy.get(addCartselector).click();  
                    }
                }
          })
    } 









    }









