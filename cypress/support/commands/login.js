Cypress.Commands.add('fazerLoginOrganizador', () => {
    cy.get('#auth-button').click()

    cy.fixture('credenciais').then(credenciais => {
        cy.get('input[name="email"]').click().type(credenciais.organizadorValido.email)
        cy.get('input[name="password"]').click().type(credenciais.organizadorValido.senha)

        cy.get('#auth-submit').click()
    })
})

Cypress.Commands.add('fazerLoginParticipante', () => {
    cy.get('#auth-button').click()

    cy.fixture('credenciais').then(credenciais => {
        cy.get('input[name="email"]').click().type(credenciais.participanteValido.email)
        cy.get('input[name="password"]').click().type(credenciais.participanteValido.senha)

        cy.get('#auth-submit').click()
    })
})

Cypress.Commands.add('tentarFazerLoginInvalido', () => {
    cy.get('#auth-button').click()

    cy.fixture('credenciais').then(credenciais => {
        cy.get('input[name="email"]').click().type(credenciais.invalido.email)
        cy.get('input[name="password"]').click().type(credenciais.invalido.senha)
    })

    cy.get('#auth-submit').click()
})