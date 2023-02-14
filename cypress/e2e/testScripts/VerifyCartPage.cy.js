/// <reference types="cypress"/>
import 'cypress-xpath'

import { LoginPage } from "../../pages/LoginPage";
import { CartPage } from '../../pages/CartPage';
import { HomePage } from '../../pages/HomePage';

describe("SauceLabs", function()
{

    const login = new LoginPage()
    const homePage = new HomePage()
    const yourCart = new CartPage()

    beforeEach(function()
    {
        cy.fixture('LoginPageTestData').then(function(LoginData){this.LoginData = LoginData;})
        cy.fixture('HomePageTestData').then(function(homePageData){this.homePageData = homePageData;})
        cy.LaunchBrowser(); 
              
    })




    it("Validate your cart page", function()
    {
        login.validateLoginPage(this.LoginData.userName, this.LoginData.password)
        homePage.addproduct(this.homePageData.productname)
        yourCart.ValidateYourCartProducts(this.homePageData.productname)
        
    })

   
    















})