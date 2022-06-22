import {url, login_password, login_username, new_email} from "../../config"
import Quiz from "../page-objects/pages/Quiz";
import BasePage from "../page-objects/BasePage";

describe('Quiz Tests', () => {
    beforeEach(()=>{
        cy.visit(url)
    })
//
//     it('user should be able to take quiz and log in with valid credentials', () => {
//         cy.on('uncaught:exception', (err, runnable) => {
//             expect(err.message).to.include('Cannot read property \'clientHeight\'')
//
//             return false
//         })
//         cy.contains('Start Skin Quiz').click()
//         cy.url().should('include', '/quiz/concern');
//         cy.contains('Sensitivity').click();
//         cy.contains('Redness').click()
//         cy.contains('Dryness').click()
//         cy.contains("Next").click()
//         Quiz.your_name().type('Tester')
//         cy.contains("Next").click()
//         cy.contains('Often sensitive').click()
//         BasePage.pause(500)
//         cy.contains('Rarely').click()
//         cy.contains('Yes').click()
//         cy.contains('A lot').click()
//         cy.contains('Sometimes').click()
//         cy.contains('Somewhat').click()
//         cy.contains('Yes').click()
//         BasePage.pause(500)
//         cy.contains('Sometimes').click()
//         cy.contains('A little').click()
//         cy.contains('Yes, some of it').click()
//         cy.contains('Rosacea').click()
//         cy.contains("Next").click()
//         BasePage.pause(500)
//         cy.get(":nth-child(2) > label > span").click()
//         BasePage.pause(500)
//         cy.contains("No").click()
//         cy.contains("Tight or dry").click()
//         cy.contains("Matte").click()
//         cy.contains("Tight or dry").click()
//         BasePage.pause(500)
//         cy.contains("Combination").click()
//         cy.contains("Fair/Light").click()
//         cy.contains("34-39").click()
//         cy.contains("Female").click()
//         BasePage.pause(500)
//         cy.contains("No").click()
//         cy.contains("3 - 4").click()
//         BasePage.pause(500)
//         cy.contains("5 - 6").click()
//         cy.contains("Mildly stressed").click()
//         cy.contains("Dairy").click()
//         cy.contains("Next").click()
//         cy.contains("A couple of times a year").click()
//         cy.contains("7-9 hours").click()
//         BasePage.pause(500)
//         cy.contains("2-3 hours").click()
//         cy.contains("SPF").click()
//         cy.contains("Next").click()
//         cy.contains("No").click()
//         BasePage.pause(500)
//         cy.contains("Yes").click()
//         cy.contains("Always").click()
//         cy.contains("No").click()
//         BasePage.pause(500)
//         cy.contains("No").click()
//         BasePage.pause(500)
//         cy.contains("No").click()
//         Quiz.zip_code().type('75019')
//         cy.contains("Next").click()
//         Quiz.your_email().type(login_username)
//         cy.contains("Next").click()
//         Quiz.password().type(login_password)
//         cy.contains("Get My Formula").click()
//         BasePage.pause(10000)
//         cy.get(".src-components-account-congratulations-___index-v3__title___3QJQ4").should('contain',"Tester")
//         cy.get(".src-components-account-congratulations-___index-v3__title___3QJQ4").should('contain',"meet your")
//         cy.get(".src-components-account-congratulations-___index-v3__title___3QJQ4").should('contain',"custom skincare")
//     })
//
//     it('user should be able to take quiz and log in with valid credentials', () => {
//         cy.on('uncaught:exception', (err, runnable) => {
//             expect(err.message).to.include('Cannot read property \'clientHeight\'')
//
//             return false
//         })
//         cy.contains('Start Skin Quiz').click()
//         cy.url().should('include', '/quiz/concern');
//         cy.contains('Sensitivity').click();
//         cy.contains('Redness').click()
//         cy.contains('Dryness').click()
//         cy.contains("Next").click()
//         Quiz.your_name().type('Tester')
//         cy.contains("Next").click()
//         cy.contains('Often sensitive').click()
//         BasePage.pause(500)
//         cy.contains('Rarely').click()
//         cy.contains('Yes').click()
//         cy.contains('A lot').click()
//         cy.contains('Sometimes').click()
//         cy.contains('Somewhat').click()
//         cy.contains('Yes').click()
//         BasePage.pause(500)
//         cy.contains('Sometimes').click()
//         cy.contains('A little').click()
//         cy.contains('Yes, some of it').click()
//         cy.contains('Rosacea').click()
//         cy.contains("Next").click()
//         BasePage.pause(500)
//         cy.get(":nth-child(2) > label > span").click()
//         BasePage.pause(500)
//         cy.contains("No").click()
//         cy.contains("Tight or dry").click()
//         cy.contains("Matte").click()
//         cy.contains("Tight or dry").click()
//         BasePage.pause(500)
//         cy.contains("Combination").click()
//         cy.contains("Fair/Light").click()
//         cy.contains("34-39").click()
//         cy.contains("Female").click()
//         BasePage.pause(500)
//         cy.contains("No").click()
//         cy.contains("3 - 4").click()
//         BasePage.pause(500)
//         cy.contains("5 - 6").click()
//         cy.contains("Mildly stressed").click()
//         cy.contains("Dairy").click()
//         cy.contains("Next").click()
//         cy.contains("A couple of times a year").click()
//         cy.contains("7-9 hours").click()
//         BasePage.pause(500)
//         cy.contains("2-3 hours").click()
//         cy.contains("SPF").click()
//         cy.contains("Next").click()
//         cy.contains("No").click()
//         BasePage.pause(500)
//         cy.contains("Yes").click()
//         cy.contains("Always").click()
//         cy.contains("No").click()
//         BasePage.pause(500)
//         cy.contains("No").click()
//         BasePage.pause(500)
//         cy.contains("No").click()
//         Quiz.zip_code().type('75019')
//         cy.contains("Next").click()
//         Quiz.your_email().type(login_username)
//         cy.contains("Next").click()
//         Quiz.password().type("false1")
//         cy.contains("Get My Formula").click()
//         cy.contains("A password was already created for: tester55@tryproven.com").should('be.visible')
//         cy.contains("Please enter it or reset password").should('be.visible')
//
//     })

    it('new user should be able to take the quiz and sign up', () => {
        cy.on('uncaught:exception', (err, runnable) => {
            expect(err.message).to.include('Cannot read property \'clientHeight\'')

            return false
        })
        cy.contains('GET MY FORMULA').click()
        cy.url().should('include', '/quiz/concern');
        cy.contains('Acne').click();
        cy.contains("Next").click()
        Quiz.your_name().type('Tester')
        cy.get(".src-components-quiz-question-___question__q-progress___2h6B6").should('contain','Tester')
        cy.contains("Next").click()
        cy.contains('Rarely').click()
        cy.contains('Somewhat').click()
        BasePage.pause(500)
        cy.contains('Somewhat').click()
        BasePage.pause(500)
        cy.contains('A lot').click()
        BasePage.pause(500)
        cy.contains('Often').click()
        cy.contains('Not concerned').click()
        BasePage.pause(500)
        cy.contains("No").click()
        cy.contains("Oily in t-zone").click()
        cy.contains("I shine like a diamond").click()
        cy.contains("No particular sensation").click()
        cy.contains("Oily").click()
        cy.contains("Combination").click()
        cy.contains("Very Dark").click()
        cy.contains("47-54").click()
        cy.contains("Male").click()
        cy.contains("7 - 8").click()
        BasePage.pause(500)
        cy.contains("5 - 6").click()
        cy.contains("Extremely stressed").click()
        cy.contains("Alcohol").click()
        cy.contains("Next").click()
        cy.contains("About once or twice a quarter").click()
        cy.contains("10-12 hours").click()
        cy.contains("1 or less").click()
        cy.contains("Day moisturizer").click()
        cy.contains("Next").click()
        cy.contains("Yes").click()
        cy.contains("I don't know").click()
        cy.contains("No").click()
        cy.contains("Wet Shave").click()
        cy.contains("Yes").click()
        BasePage.pause(500)
        cy.contains("No").click()
        BasePage.pause(500)
        cy.contains("No").click()
        BasePage.pause(500)
        cy.contains("No").click()
        Quiz.zip_code().type('75019')
        cy.contains("Next").click()
        Quiz.your_email().type(new_email)
        cy.contains("Next").click()
        Quiz.password().type('123456')
        cy.contains('Get My Formula').click()
        BasePage.pause(10000)
        cy.get(".src-components-account-congratulations-___index-v3__title___3QJQ4").should('contain',"Tester")
        cy.get(".src-components-account-congratulations-___index-v3__title___3QJQ4").should('contain',"meet your")
        cy.get(".src-components-account-congratulations-___index-v3__title___3QJQ4").should('contain',"custom skincare")


    })
})