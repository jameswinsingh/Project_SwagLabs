/// <reference types="cypress"/>
import 'cypress-xpath'

import { LoginPage } from "../../pages/LoginPage";
import { CartPage } from '../../pages/CartPage';
import { HomePage } from '../../pages/HomePage';
import { CheckoutPage } from '../../pages/CheckoutPage';

describe("Checkout page", function () {
    const loginPage = new LoginPage()
    const homePage = new HomePage()
    const shoppingCartContainer = new CartPage()
    const checkoutPage = new CheckoutPage()

    beforeEach(function () {

        cy.LaunchBrowser();
        cy.fixture('LoginPageTestData').then(function (LoginData) { this.LoginData = LoginData; });
        cy.fixture('HomePageTestData').then(function (homePageData) { this.homePageData = homePageData; });
        cy.fixture('CheckoutPageTestData').then(function (checkoutPageData) { this.checkoutPageData = checkoutPageData; });

    })




    // it("Provide details of the user", function()
    // {
    //     loginPage.login(this.LoginData.userName, this.LoginData.password);
    //     homePage.addproduct(this.homePageData.productname);
    //     shoppingCartContainer.clickCart();
    //     shoppingCartContainer.selectCheckOut();
    //     checkoutPage.validateLandingPage();
    //     checkoutPage.enterUserInformation(this.checkoutPageData.firstName,this.checkoutPageData.lastName,this.checkoutPageData.postalCode);
    //     checkoutPage.selectContinueButton()


    //     checkoutPage.validateProductQuantity(this.checkoutPageData.productQuantity)


    // })

    it("Validate landing page", function () {
        loginPage.login(this.LoginData.userName, this.LoginData.password);
        homePage.addproduct(this.homePageData.productname);
        shoppingCartContainer.clickCart();
        shoppingCartContainer.selectCheckOut();
        checkoutPage.validateLandingPage();
    })



    it("Enter user information and Select continue button", function () {
        //cy.clearCookies();
        loginPage.login(this.LoginData.userName, this.LoginData.password);
        homePage.addproduct(this.homePageData.productname);
        shoppingCartContainer.clickCart();
        shoppingCartContainer.selectCheckOut();
        checkoutPage.validateLandingPage();
        checkoutPage.enterUserInformation(this.checkoutPageData.firstName, this.checkoutPageData.lastName, this.checkoutPageData.postalCode);
        checkoutPage.selectContinueButton();

    })

    // it("Validate quantity of product", function()
    // {

    //     loginPage.login(this.LoginData.userName, this.LoginData.password,{timeout: 30000});
    //     homePage.addproduct(this.homePageData.productname);
    //     shoppingCartContainer.clickCart();
    //     shoppingCartContainer.selectCheckOut();
    //     checkoutPage.validateLandingPage();
    //     checkoutPage.enterUserInformation(this.checkoutPageData.firstName,this.checkoutPageData.lastName,this.checkoutPageData.postalCode);
    //     checkoutPage.selectContinueButton()
    //     checkoutPage.validateProductQuantity(this.checkoutPageData.productQuantity)


    // })





















})