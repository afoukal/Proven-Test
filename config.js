export const url = "http://staging.tryproven.com"
export const login_username = "tester55@tryproven.com"
export const login_password = "123456"

const timestampInt = Date.now() + Math.random()
export const new_email = timestampInt + '@tryproven.com'

export const getIframeBody = () => {
    // get the iframe > document > body
    // and retry until the body element is not empty
    return cy
        .get('iframe[name="__privateStripeFrame5"]')
        .its('0.contentDocument.body').should('not.be.empty')
        // wraps "body" DOM element to allow
        // chaining more Cypress commands, like ".find(...)"
        // https://on.cypress.io/wrap
        .then(cy.wrap)
}

export const getIframeBody_exp_date = () => {
    // get the iframe > document > body
    // and retry until the body element is not empty
    return cy
        .get('iframe[name="__privateStripeFrame6"]')
        .its('0.contentDocument.body').should('not.be.empty')
        // wraps "body" DOM element to allow
        // chaining more Cypress commands, like ".find(...)"
        // https://on.cypress.io/wrap
        .then(cy.wrap)
}

export const getIframeBody_cvv = () => {
    // get the iframe > document > body
    // and retry until the body element is not empty
    return cy
        .get('iframe[name="__privateStripeFrame7"]')
        .its('0.contentDocument.body').should('not.be.empty')
        // wraps "body" DOM element to allow
        // chaining more Cypress commands, like ".find(...)"
        // https://on.cypress.io/wrap
        .then(cy.wrap)
}

export const getIframeBody_2 = () => {
    // get the iframe > document > body
    // and retry until the body element is not empty
    return cy
        .get('iframe[name="__privateStripeFrame11"]')
        .its('0.contentDocument.body').should('not.be.empty')
        // wraps "body" DOM element to allow
        // chaining more Cypress commands, like ".find(...)"
        // https://on.cypress.io/wrap
        .then(cy.wrap)
}

export const getIframeBody_exp_date_2 = () => {
    // get the iframe > document > body
    // and retry until the body element is not empty
    return cy
        .get('iframe[name="__privateStripeFrame12"]')
        .its('0.contentDocument.body').should('not.be.empty')
        // wraps "body" DOM element to allow
        // chaining more Cypress commands, like ".find(...)"
        // https://on.cypress.io/wrap
        .then(cy.wrap)
}

export const getIframeBody_cvv_2 = () => {
    // get the iframe > document > body
    // and retry until the body element is not empty
    return cy
        .get('iframe[name="__privateStripeFrame13"]')
        .its('0.contentDocument.body').should('not.be.empty')
        // wraps "body" DOM element to allow
        // chaining more Cypress commands, like ".find(...)"
        // https://on.cypress.io/wrap
        .then(cy.wrap)
}

