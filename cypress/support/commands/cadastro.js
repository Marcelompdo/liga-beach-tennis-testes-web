Cypress.Commands.add('cadastrarUsuarioOrganizador', () => {
    cy.get('#register-button').click()

    cy.fixture('usuarios').then(usuarios => {
        cy.get('input[name="name"]').click().type(usuarios.novoUsuarioOrganizador.nome)
        cy.selecionarOpcaoSelect('role', 'organizador')
        cy.get('input[name="email"]').click().type(usuarios.novoUsuarioOrganizador.email)
        cy.get('input[name="password"]').click().type(usuarios.novoUsuarioOrganizador.senha)

        cy.clickAuthSubmitButton()
    })
})