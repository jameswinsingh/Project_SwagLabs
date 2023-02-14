/// <reference types="cypress"/>
import 'cypress-xpath'
import { HomePage } from '../../pages/HomePage';
import { LoginPage } from "../../pages/LoginPage";

describe("SauceLabs", function()
{

    const homePage = new HomePage();
    const login = new LoginPage()

    beforeEach(function()
    {
        cy.fixture('LoginPageTestData').then(function(LoginData){this.LoginData = LoginData;})
        cy.fixture('HomePageTestData').then(function(homePageData){this.homePageData = homePageData;})
        cy.LaunchBrowser(); 
              
    })




    it("Validate Home landing page", function()
    {
        login.validateLoginPage(this.LoginData.userName, this.LoginData.password)
        //cy.Login(this.LoginData.userName, this.LoginData.password); 
        homePage.validateHomePage();
    })

    it("Add product to cart", function()
    {
        login.validateLoginPage(this.LoginData.userName, this.LoginData.password)
        //cy.Login(this.LoginData.userName, this.LoginData.password); 
        homePage.addproduct(this.homePageData.productname)
    })
    















})