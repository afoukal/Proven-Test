export default class ForgotPasswordPage {

    static clickBackButton(){
        cy.contains("Back").click()
    }

    static displayForgotPassword (){
        cy.contains('Forgot Password?').should('be.visible')
    }

    static displayForgotPasswordInstructions(){
        cy.get(".slider-text").should('contain', 'Please enter your email. We will send you an email to reset your password.' )
    }

    static resetPassword(email) {
        cy.get("input[type='email']").clear()
        cy.get("input[type='email']").type(email)
        cy.contains('Reset Password').click()
    }

    static displayMessageForUnregisteredUser() {
        cy.get('.src-components-pages-login-forgot-password-form-___style__auth-error___2J2eo').should('be.visible').and('contain', "We could not find your email.")
    }

    static displayMessageForRegisteredUser(){
        cy.get('.src-components-pages-login-forgot-password-form-___style__auth-error___2J2eo').should('contain', "We've sent you an email to reset password.")
    }

}