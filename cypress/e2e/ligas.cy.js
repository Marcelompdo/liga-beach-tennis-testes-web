describe('Ligas', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Criar nova liga deve mostrar mensagem de sucesso', () => {
        cy.fazerLoginOrganizador()
        cy.cadastrarNovaLiga()

        cy.verificarMensagemToast('Liga criada! Agora é só reunir os participantes.')
    })

    it('Sortear uma liga deve mostrar mensagem de sucesso', () => {
        cy.fazerLoginOrganizador()
        cy.sortearGruposLiga()

        cy.verificarMensagemToast('Grupos sorteados com sucesso!')
    })

    it('Increver-se em uma liga aberta deve registar inscrição', () => {
        cy.fazerLoginParticipante()
        cy.inscreverEmLigaAberta()

        cy.verificarMensagemToast('Você entrou na liga!')
    })
})