import { url, login_password, login_username } from "../../config"
import LoginPage from "../page-objects/pages/LoginPage";
import Header from "../page-objects/components/Header";
import ForgotPasswordPage from "../page-objects/pages/ForgotPasswordPage";


describe ('Forgot password tests' , () => {
    before(function(){
        cy.visit(url)
        Header.clickLogin()
        cy.contains('Forgot your password?').should('be.visible')
        LoginPage.clickForgotPasswordLink()
    })

    it('main elements of Forgot password page should be visible', () => {
        ForgotPasswordPage.displayForgotPassword()
        ForgotPasswordPage.displayForgotPasswordInstructions()
        LoginPage.displayNewToProven()

    })

    it('user should get an error message for unregistered email', () => {
        ForgotPasswordPage.resetPassword('invalid@mail.com')
        ForgotPasswordPage.displayMessageForUnregisteredUser()
    })

    it('user should get a confirmation message for registered user', () => {
        ForgotPasswordPage.resetPassword(login_username)
        ForgotPasswordPage.displayMessageForRegisteredUser()
    })

    it (' should be able to click on Back Button' , () => {
        ForgotPasswordPage.clickBackButton()
        LoginPage.displayWelcomeBack()

    })


})


