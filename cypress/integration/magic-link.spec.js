import {url, login_username} from "../../config";
import MainPage from "../page-objects/pages/MainPage";
import Header from "../page-objects/components/Header";
import LoginPage from "../page-objects/pages/LoginPage";

describe('Magic Link Tests' , () => {
    before(function () {
        cy.visit(url)
        MainPage.displayAllAboutYou()
        Header.clickLogin()
    })

    it('should click on Email me a link', () => {
        LoginPage.clickEmailMeLink()
    })

    it('main components of the page should be visible', () =>{
        cy.contains('Send me a magic link')
        cy.contains('Please enter your email. We will send you an email with a link to sign in to PROVEN.')
        LoginPage.displayNewToProven()
    })

    it('should display error message for Unregistered user', ()=> {
        cy.get("input[type='email']").clear()
        cy.get("input[type='email']").type('invalid@gmail.com')
        cy.get('.src-components-pages-login-magic-link-form-___style__magic-link-wrapper___TFMIJ span').click()
        cy.get('.src-components-pages-login-magic-link-form-___style__auth-error___danLj').should('contain', 'Email not found, please take the Skin Genome Quiz')
    })

    it('should display confirmation message for Registered user', ()=> {
        cy.get("input[type='email']").clear()
        cy.get("input[type='email']").type(login_username)
        LoginPage.pause(5000)
        cy.get('.src-components-pages-login-magic-link-form-___style__magic-link-wrapper___TFMIJ span').click()
        cy.contains("Check your email!").should('be.visible')
        cy.contains('You’ll receive a link to log-in.').should('be.visible')
        cy.contains('I did not receive a link').should('be.visible')

    })



})