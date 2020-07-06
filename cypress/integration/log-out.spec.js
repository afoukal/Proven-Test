import {url, login_username, login_password} from "../../config";
import MainPage from "../page-objects/pages/MainPage";
import Header from "../page-objects/components/Header";
import LoginPage from "../page-objects/pages/LoginPage";
import HamburgerMenu from "../page-objects/components/Hamburger-menu";
import BasePage from "../page-objects/BasePage";

describe('Log out tests', ()=> {
    before(function () {
        cy.visit(url)
        MainPage.displayAllAboutYou()
        Header.clickLogin()
        LoginPage.login(login_username,login_password)
        BasePage.pause(7000)
    })

    it('should be able to log out', ()=> {
        Header.clickOnHamburgerMenu()
        HamburgerMenu.clickLogOut()
    })
})