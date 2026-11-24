describe('Cadastro', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Cadastro novo usuário organizador', () => {
        cy.cadastrarUsuarioOrganizador()

        cy.fixture('usuarios').then(usuarios => {
            cy.verificarMensagemToast(`Olá, ${usuarios.novoUsuarioOrganizador.nome}!`)
        })
    })
})