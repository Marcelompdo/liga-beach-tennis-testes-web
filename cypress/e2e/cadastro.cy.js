describe('Cadastro', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Cadastro novo usuário organizador deve mostrar mensagem de sucesso', () => {
        cy.cadastrarUsuarioOrganizador()

        cy.fixture('usuarios').then(usuarios => {
            cy.verificarMensagemToast(`Olá, ${usuarios.novoUsuarioOrganizador.nome}!`)
        })
    })
})