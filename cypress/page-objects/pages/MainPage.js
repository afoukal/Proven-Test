export default class MainPage {

    static displayAllAboutYou () {
        cy.contains('ALL ABOUT YOU').should('be.visible')
    }

}