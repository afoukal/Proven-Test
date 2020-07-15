import { url, login_password, login_username } from "../../config"
import LoginPage from "../page-objects/pages/LoginPage";
import Header from "../page-objects/components/Header";
import MainPage from "../page-objects/pages/MainPage";
import SettingPage from "../page-objects/pages/SettingPage";
import HamburgerMenu from "../page-objects/components/Hamburger-menu";


describe('Login Failed Tests', () => {
    before(function () {
        cy.visit(url)
        MainPage.displayAllAboutYou()
        Header.clickLogin()
        LoginPage.login(login_username, login_password)
        cy.wait(10000)
        Header.clickOnHamburgerMenu()
        cy.contains('Account').click()
        SettingPage.edit_button().should('have.length', 4)
    })

    // it('should login',()=> {
    //     cy.contains('Profile').should('be.visible')
    //     SettingPage.edit_button().eq(0).click()
    //     SettingPage.name_field().clear()
    //     SettingPage.name_field().type('Ana Fo')
    //     cy.contains("Save Changes").click()
    //     cy.contains('Successfully updated!').should('be.visible')
    //     cy.contains('Cancel').click()
    //     SettingPage.edit_button().eq(0).click()
    //     SettingPage.name_field().clear()
    //     cy.contains("Save Changes").click()
    //     cy.contains('This field is required.').should('be.visible')
    //     SettingPage.name_field().type('Tester Tester')
    //     cy.contains('Cancel').click()
    //     cy.contains('Successfully updated!').should('not.be.visible')
    //     SettingPage.saved_name().should('contain', 'Ana Fo')
    //     SettingPage.edit_button().eq(0).click()
    //     SettingPage.name_field().clear()
    //     SettingPage.name_field().type('Tester Tester')
    //     cy.contains("Save Changes").click()
    //     cy.contains('Cancel').click()
    //     SettingPage.saved_name().should('contain', 'Tester Tester')
    // })

    it('user should NOT be able to change password, if password does not match', () => {
        cy.contains('Password').should('be.visible')
        SettingPage.edit_button().eq(1).click()
        SettingPage.new_password().clear().type('newpassword')
        SettingPage.new_password_confirm().clear().type('oldpassword')
        cy.contains("Save Changes").click()
        cy.contains("Password confirmation doesn't match the new password").should('be.visible')
        cy.contains('Cancel').click()
    })

    it('user should be able to change the password and log in with new password', () => {
        //Changing new password
        SettingPage.edit_button().eq(1).click()
        const new_pass_changed = 'qwerty'
        SettingPage.new_password().clear().type(new_pass_changed)
        SettingPage.new_password_confirm().clear().type(new_pass_changed)
        cy.contains("Save Changes").click()
        cy.contains("Successfully updated!").should('be.visible')
        //Log out
        cy.get('.src-components-shared-account-header-___account-header-v2__wrapper___a4U03 button').click()
        HamburgerMenu.clickLogOut()
        //Log in with new password
        LoginPage.login(login_username, new_pass_changed)
        cy.wait(10000)
        //Changing password to old one
        Header.clickOnHamburgerMenu()
        cy.contains('Account').click()
        SettingPage.edit_button().eq(1).click()
        SettingPage.new_password().clear().type(login_password)
        SettingPage.new_password_confirm().clear().type(login_password)
        cy.contains("Save Changes").click()
        cy.contains("Successfully updated!").should('be.visible')
        cy.contains('Cancel').click()
    })


    it('user is able to change the address, if valid address is provided', ()=>{
        SettingPage.edit_button().eq(2).click()
        SettingPage.shipping_name().clear().type('New')
        SettingPage.shipping_surname().clear().type("New")
        SettingPage.shipping_address().clear().type("651 N Rodeo Dr")
        SettingPage.shipping_city().clear().type("Beverly Hills")
        SettingPage.shipping_state().type('California {enter}')
        SettingPage.shipping_zip().clear().type('90210')
        cy.contains("Save Changes").click()
        cy.contains("Successfully updated!").should('be.visible')
        cy.contains("Cancel").click()
        SettingPage.shipping_details().eq(0).should('contain','New New')
        SettingPage.shipping_details().eq(1).should('contain', '651 N Rodeo Dr')
        SettingPage.shipping_details().eq(2).should('contain', 'Beverly Hills, CA 90210')
    })

    it('user is not able to change the address if key inputs are missing', () => {
        SettingPage.edit_button().eq(2).click()
        SettingPage.shipping_name().clear()
        cy.contains("Save Changes").click()
        cy.contains("This field is required.").should('be.visible')
        SettingPage.shipping_name().type('Ana')
        SettingPage.shipping_surname().clear()
        cy.contains("Save Changes").click()
        cy.contains("This field is required.").should('be.visible')
        SettingPage.shipping_surname().type("Fo")
        SettingPage.shipping_address().clear()
        cy.contains("Save Changes").click()
        cy.contains("This field is required.").should('be.visible')
        SettingPage.shipping_address().type("521 Waterview Drive")
        SettingPage.shipping_city().clear()
        cy.contains("Save Changes").click()
        cy.contains("This field is required.").should('be.visible')
        SettingPage.shipping_city().type('Coppell')
        SettingPage.shipping_state().type('Texas {enter}')
        SettingPage.shipping_zip().clear()
        cy.contains("Save Changes").click()
        cy.contains("This field is required.").should('be.visible')
        SettingPage.shipping_zip().type('75019')
        cy.contains("Save Changes").click()
        cy.contains("Successfully updated!").should('be.visible')
        cy.contains("Cancel").click()

    })

    it('user is able to save the phone number only if it has 10 digits', ()=>{
        SettingPage.edit_button().eq(2).click()
        SettingPage.shipping_phone().type('123')
        cy.contains('Save Changes').click()
        cy.contains("This phone number is invalid.").should('be.visible')
        SettingPage.shipping_phone().clear().type(1234567890)
        cy.contains('Save Changes').click()
        cy.contains('Successfully updated!').should('be.visible')
        cy.contains('Cancel').click()

    })
})