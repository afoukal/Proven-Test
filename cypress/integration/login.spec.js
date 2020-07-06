import { url, login_password, login_username } from "../../config"
import LoginPage from "../page-objects/pages/LoginPage";
import Header from "../page-objects/components/Header";
import MainPage from "../page-objects/pages/MainPage";
import CongratsPage from "../page-objects/pages/CongratsPage";


describe('Login Failed Tests', () => {
    before( function(){
        cy.visit(url)
        MainPage.displayAllAboutYou()
        Header.clickLogin()
    })


    it('should not be able to login with invalid credentials', () =>{
        LoginPage.login('fake@gmail.com', 'invalidpassword' )
        LoginPage.pause(5000)
        LoginPage.displayErrorMessageForUnregisteredUser()

    })

    it('should not be able to login with invalid password', () =>{
        LoginPage.login(login_username, 'invalidpassword' )
        LoginPage.pause(3000)
        LoginPage.displayErrorMessageForRegisteredUser()

    })

})

describe('Login Successful Tests', () => {
    before( function(){
        cy.visit(url)
        MainPage.displayAllAboutYou()
        Header.clickLogin()
    })

    it('main elements of the page should be visible', ()=> {
        LoginPage.displayWelcomeBack()
        LoginPage.displayFacebookLogin()
        LoginPage.displayGoogleLogin()
        LoginPage.displayEmailMeLink()
        LoginPage.displayNewToProven()

    })

    it('should be able to log in with valid credentials', () =>{
        LoginPage.login(login_username,login_password)
        CongratsPage.displayWelcomeMessage()
    })
})