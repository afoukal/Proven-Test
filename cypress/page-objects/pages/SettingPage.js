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

    static new_password(){
        return cy.get("input[placeholder='New Password']")
    }

    static new_password_confirm(){
        return cy.get("input[placeholder='Type new password again']")
    }

    static shipping_name(){
        return cy.get("input[name='firstName']")
    }

    static shipping_surname(){
        return cy.get("input[name='lastName']")
    }

    static shipping_address(){
        return cy.get("input[name='address1']")
    }

    static shipping_city(){
        return cy.get("input[name='city']")
    }

    static shipping_state() {
        return cy.get(".css-15ewbyk")
    }

    static shipping_zip() {
        return cy.get("input[name='zip']")
    }

    static shipping_phone() {
        return cy.get("input[name='phone']")
    }

    static shipping_details(){
        return cy.get(".src-components-account-setting-shipping-info-___shipping-info__nomargin___x44iR div")
    }

}