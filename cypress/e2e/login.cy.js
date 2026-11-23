describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Login com dados válidos', () => {
    cy.get('#auth-button').click()

    cy.fixture('credenciais').then(credenciais => {
      cy.get('input[name="email"]').click().type(credenciais.organizadorValido.email)
      cy.get('input[name="password"]').click().type(credenciais.organizadorValido.senha)

      cy.get('#auth-submit').click()

      cy.get('.toast').should('have.text', `Olá, ${credenciais.organizadorValido.nome}!`)
    })
  })

  it('Login com dados inválidos', () => {
    cy.get('#auth-button').click()

    cy.fixture('credenciais').then(credenciais => {
      cy.get('input[name="email"]').click().type(credenciais.invalido.email)
      cy.get('input[name="password"]').click().type(credenciais.invalido.senha)
    })

    cy.get('#auth-submit').click()

    cy.get('#auth-error').should('have.text', 'Email ou senha inválidos.')
  })
})