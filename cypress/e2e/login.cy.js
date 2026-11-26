describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Login com dados válidos deve permitir acesso ao sistema', () => {
    cy.fazerLoginOrganizador()

    cy.fixture('credenciais').then(credenciais => {
      cy.verificarMensagemToast(`Olá, ${credenciais.organizadorValido.nome}!`)
    })
  })

  it('Login com dados inválidos deve retornar menssagem de erro', () => {
    cy.tentarFazerLoginInvalido()

    cy.get('#auth-error').should('have.text', 'Email ou senha inválidos.')
  })
})