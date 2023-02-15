/// <reference types="cypress"/>
import 'cypress-xpath'

import { LoginPage } from "../../pages/LoginPage";
import { CartPage } from '../../pages/CartPage';
import { HomePage } from '../../pages/HomePage';

describe("Verify YOUR CART's product list, then click the checkout button.", function () {
    const loginPage = new LoginPage()
    const homePage = new HomePage()
    const shoppingCartContainer = new CartPage()

    beforeEach(function () {

        cy.launchBrowser();
        cy.fixture('LoginPageTestData').then(function (LoginData) { this.LoginData = LoginData; });
        cy.fixture('HomePageTestData').then(function (homePageData) { this.homePageData = homePageData; });


    })


    // it("Validate your cart page", function()
    // {
    //     login.login(this.LoginData.userName, this.LoginData.password);
    //     homePage.addproduct(this.homePageData.productname);
    //     yourCart.ClickCart();
    //     this.homePageData.productname.forEach(element => 
    //     {
    //         yourCart.validateYourCartProducts(element)

    //     });
    // })

    // it("Select cart icon", function()
    // {
    //     login.login(this.LoginData.userName, this.LoginData.password);
    //     homePage.addproduct(this.homePageData.productname);
    //     yourCart.clickCart();
    //     yourCart.validateYourCartProducts(this.homePageData.productname);
    //     yourCart.selectCheckOut();

    // })

    it("Select cart icon", function () {
        loginPage.login(this.LoginData.userName, this.LoginData.password);
        homePage.addproduct(this.homePageData.productname);
        shoppingCartContainer.clickCart();


    })

    it("Add product to the Cart and select checkout button", function () {
        loginPage.login(this.LoginData.userName, this.LoginData.password);
        homePage.addproduct(this.homePageData.productname);
        shoppingCartContainer.clickCart();
        shoppingCartContainer.validateYourCartProducts(this.homePageData.productname);
        shoppingCartContainer.selectCheckOut();



    })

    // it("Select Checkout button", function()
    // {
    //     loginPage.login(this.LoginData.userName, this.LoginData.password);
    //     homePage.addproduct(this.homePageData.productname);
    //     shoppingCartContainer.clickCart();
    //     shoppingCartContainer.selectCheckOut();

    // })


















})