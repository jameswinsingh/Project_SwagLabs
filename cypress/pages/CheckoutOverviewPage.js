export class CheckoutOverviewPage {

    // priceBar = ".item_pricebar"
    itemPrice = ".inventory_item_price"
    totalPrice = ".summary_total_label"
    finishButton = '#finish'


    getCartItem() {
        return cy.get('.cart_item')
    }

    getCartQuantity() {
        return '.cart_quantity'
    }


    validateProductQuantity(productQuantity) {
        this.getCartItem().each(($el, index, $list) => {
            const textproduct = $el.find('.cart_quantity').text()

            if (textproduct.includes(productQuantity)) {
                expect(textproduct).to.be.equal(productQuantity)
            }
        })
    }


    calculateProductTotal() {
        var sumofProducts = 0;
        var tax = 0;
        var sumOfProductAndTax = 0;

        cy.get(this.itemPrice).each(($e1, index, $list) => {
            const getText = $e1.text();
            var splitText = getText.split("$")
            splitText = splitText[1].trim()
            sumofProducts = Number(sumofProducts) + Number(splitText)

        }).then(function () {
            cy.get(".summary_tax_label").each(($e1, index, $list) => {
                const getText = $e1.text();
                var splitText = getText.split("$")
                splitText = splitText[1].trim()
                tax = Number(tax) + Number(splitText)

            }).then(function () {
                sumOfProductAndTax = sumOfProductAndTax + sumofProducts + tax;
            })
        })
        //METHOD TO TRIM THE TOTAL
        cy.get(this.totalPrice).then(function (element) {
            const copyText = element.text();
            var splitText = copyText.split("$")
            var total = splitText[1].trim()

            expect(Number(total)).to.equal(Number(sumOfProductAndTax));

        })
    }


    selectFinish() {
        cy.get(this.finishButton).click()
    }

































}