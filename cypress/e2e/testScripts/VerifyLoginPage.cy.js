/// <reference types="cypress"/>
import { LoginPage } from "../../pages/LoginPage";

describe("SauceLabs", function () {

    const login = new LoginPage();

    beforeEach(function () {
        cy.LaunchBrowser();
        cy.fixture('LoginPageTestData').then(function (LoginData) {
            this.LoginData = LoginData;
        })
    })




    it("Validate Landing page URL", function () {
        login.validateLandingPageURL(this.LoginData.expectedLandingPageURL)
    })

    it("Validate Login page", function () {
        login.login(this.LoginData.userName, this.LoginData.password)
    })













})