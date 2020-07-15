import { url, login_password, login_username } from "../../config"
import LoginPage from "../page-objects/pages/LoginPage";
import Header from "../page-objects/components/Header";
import MainPage from "../page-objects/pages/MainPage";
import SettingPage from "../page-objects/pages/SettingPage";


describe('Login Failed Tests', () => {
    before(function () {
        cy.visit(url)
        MainPage.displayAllAboutYou()
        Header.clickLogin()
    })

    it('should login',()=> {
        LoginPage.login(login_username, login_password)
        cy.wait(10000)
        Header.clickOnHamburgerMenu()
        cy.contains('Account').click()
        SettingPage.edit_button().should('have.length', 4)
        SettingPage.edit_button().eq(0).click()
        SettingPage.name_field().clear()
        SettingPage.name_field().type('Ana Fo')
        cy.contains("Save Changes").click()
        cy.contains('Successfully updated!').should('be.visible')
        cy.contains('Cancel').click()
        SettingPage.edit_button().eq(0).click()
        SettingPage.name_field().clear()
        cy.contains("Save Changes").click()
        cy.contains('This field is required.').should('be.visible')
        SettingPage.name_field().type('Tester Tester')
        cy.contains('Cancel').click()
        cy.contains('Successfully updated!').should('not.be.visible')
        SettingPage.saved_name().should('contain', 'Ana Fo')
        SettingPage.edit_button().eq(0).click()
        SettingPage.name_field().clear()
        SettingPage.name_field().type('Tester Tester')
        cy.contains("Save Changes").click()
        cy.contains('Cancel').click()
        SettingPage.saved_name().should('contain', 'Tester Tester')





    })
})