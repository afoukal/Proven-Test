export default class SettingPage{


    static edit_button(){
       return cy.get('.src-components-account-setting-setting-item-___setting-item__buttons___2z0_8').find("button[type='button']")
    }

    static name_field(){
        return cy.get("input[name='name']")
    }

    static saved_name(){
        return cy.get(".src-components-account-setting-setting-item-___setting-item__content___OYpRN > :nth-child(2) > span")
    }

}