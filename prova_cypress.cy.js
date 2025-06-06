/// <reference = cypress>
describe("Testes UI no site Swag Labs", ()=>{
    it("Teste de login de usuário", ()=>{
        site_visit()
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    })

    it("Teste de remover produtos do carrinho pela páigna principal", ()=>{
        site_visit()
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        add_products()
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
    })

    it("Teste de tentativa de código postal inexistente", ()=>{
        site_visit()
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        add_products()
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type("Gabriel")
        cy.get('[data-test="lastName"]').type("Soares")
        cy.get('[data-test="postalCode"]').type("aseio-oeo")
        cy.get('[data-test="continue"]').click()
        cy.get('.error-message-container')
    })
})



function site_visit(){
    cy.visit("https://www.saucedemo.com/")
}

//Adiciona 3 produtos no carrinho
function add_products(){
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
}