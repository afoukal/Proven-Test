import BasePage from "../BasePage";

export default class LoginPage extends BasePage {

    static login(username, password) {
        cy.login(username, password)
    }

    static clickForgotPasswordLink(){
        cy.contains("Forgot your password").click()
    }
    static displayForgotPasswordLink() {
        cy.isVisible(".src-components-pages-login-login-password-form-___login-password-form__sm-link___3lvPZ")
    }

    static displayWelcomeBack(){
        cy.isVisible(".slider-title")
    }

    static displayErrorMessageForUnregisteredUser() {
        cy.get(".src-components-pages-login-login-password-form-___login-password-form__auth-error___32vqz").should('be.visible').and('contain','Email not found, please take the Skin Genome Quiz')
    }

    static displayErrorMessageForRegisteredUser() {
        cy.get(".src-components-pages-login-login-password-form-___login-password-form__auth-error___32vqz").should('be.visible').and('contain','Wrong email or password.')
    }

    static displayNewToProven () {
        cy.get(".src-components-pages-login-login-footer-___style__start-quiz___SqIQW").should('contain', 'New to PROVEN? START NOW')
    }

    static displayFacebookLogin(){
        cy.isVisible(".src-components-pages-login-login-password-form-___login-password-form__facebook___oAPZC")
    }

    static displayGoogleLogin () {
        cy.isVisible(".src-components-pages-login-login-password-form-___login-password-form__google___3YQxd")
    }

    static displayEmailMeLink () {
        cy.isVisible(".src-components-shared-action-button-___action-button__text-body___2fLnM")
    }

    static clickEmailMeLink(){
        cy.contains('Email me a link').click()
    }
}