# S206_Prova
Segunda prova do Lab de S206
<br>
<br>

# Teste de UI (interface) com Cypress
Realizados no seguinte site: https://www.saucedemo.com/
<br>
<br>

# Funções utilizadas:
```javascript
function site_visit(){
    cy.visit("https://www.saucedemo.com/")
}

//Adiciona 3 produtos no carrinho
function add_products(){
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
}
```

1º Teste: Teste de login de usuário
Esse teste verifica se é possível fazer login com um dos usuário já cadastrados no site
```javascript
it("Teste de login de usuário", ()=>{
        site_visit()
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
})
```

<br>
<br>

2º Teste: Teste de remover produtos do carrinho pela páigna principal
Esse teste verifica se é possível remover produtos já adicionados no carrinho através do botão de remover da página principal
```javascript
it("Teste de remover produtos do carrinho pela páigna principal", ()=>{
        site_visit()
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        add_products()
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
})
```

<br>
<br>

3º Teste: Teste de tentativa de código postal inexistente
Esse teste verifica se é possível continuar a compra com um CEP inválido
```javascript
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
```

<br>
<br>

# Relatório Mochawesome
![image](https://github.com/user-attachments/assets/3080990c-50b7-48c5-8c39-2509ba5bcb36)

<br>
<br>
