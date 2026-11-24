describe('Ligas', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Criar nova liga', () => {
        cy.fazerLoginOrganizador()
        cy.cadastrarNovaLiga()

        cy.verificarMensagemToast('Liga criada! Agora é só reunir os participantes.')
    })

    it('Sortear uma liga', () => {
        cy.fazerLoginOrganizador()
        cy.sortearGruposLiga()

        cy.verificarMensagemToast('Grupos sorteados com sucesso!')
    })
})