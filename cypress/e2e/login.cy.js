describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Login com dados válidos', () => {
    cy.fazerLoginOrganizador()

    cy.fixture('credenciais').then(credenciais => {
      cy.get('.toast').should('have.text', `Olá, ${credenciais.organizadorValido.nome}!`)
    })
  })

  it('Login com dados inválidos', () => {
    cy.tentarFazerLoginInvalido()

    cy.get('#auth-error').should('have.text', 'Email ou senha inválidos.')
  })
})