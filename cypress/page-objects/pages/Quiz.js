import BasePage from "../BasePage";

export default class Quiz extends BasePage {

    static your_name(){
        return cy.get("input[placeholder='Your Name']")
    }

    static zip_code(){
        return cy.get("input[placeholder='Enter Zip Code']")
    }

    static your_email(){
        return cy.get("input[placeholder='Your email']")
    }

    static password(){
        return cy.get("input[placeholder='Enter password']")
    }
}