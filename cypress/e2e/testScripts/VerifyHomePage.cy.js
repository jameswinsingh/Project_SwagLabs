/// <reference types="cypress"/>
import 'cypress-xpath'
import { HomePage } from '../../pages/HomePage';
import { LoginPage } from "../../pages/LoginPage";

describe("Add products to the cart", function () {

    const homePage = new HomePage();
    const login = new LoginPage();

    beforeEach(function () {
        cy.fixture('LoginPageTestData').then(function (LoginData) { this.LoginData = LoginData; })
        cy.fixture('HomePageTestData').then(function (homePageData) { this.homePageData = homePageData; })
        cy.launchBrowser();

    })




    it("Validate Home landing page after login", function () {
        login.login(this.LoginData.userName, this.LoginData.password)
        homePage.validateHomePage();
    })

    it("Add product to cart", function () {
        login.login(this.LoginData.userName, this.LoginData.password)
        //cy.Login(this.LoginData.userName, this.LoginData.password); 
        homePage.addproduct(this.homePageData.productname)
    })











})