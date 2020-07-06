export default class Header {

    static clickOnLOgo(){
        cy.get('.src-components-shared-account-header-___account-header-v2__heading___2T7IJ').click()
    }

    static clickOnHamburgerMenu(){
        cy.get('.src-components-shared-account-header-___account-header-v2__transparent___3xO1D button').click()
    }

    static clickLogin(){
        cy.contains('Login').click()
    }

    static startSkinQuiz(){
        cy.contains('START SKIN QUIZ').click()
    }


}