Cypress.Commands.add('cadastrarNovaLiga', () => {
    cy.get('nav > a').contains('Ligas').click()
    cy.get('#create-button').click()
    cy.get('#league-form > label > [name="name"]').type('Liga da resenha')
    cy.get('#league-submit').click()
})

Cypress.Commands.add('sortearGruposLiga', () => {
    cy.get('nav > a').contains('Ligas').click()

    // Busca todos os cards de liga
    cy.get('.league-card').then(($cards) => {

        // Converte a coleção de cards em um array e procura o primeiro que tenha pelo menos 4 atletas e não tenha sido sorteado
        const cardEncontrado = [...$cards].find((card) => {
            const textoAtletas = card.querySelector('.league-top .league-meta')?.textContent || ''
            const quantidade = Number(textoAtletas.match(/\d+/)?.[0] || 0)

            const status = card.querySelector('.league-top .pill')?.textContent.trim() || ''

            return quantidade > 4 && status === 'Inscrições abertas'
        })

        // Confirma que foi encontrada uma liga que atende aos dois critérios
        expect(cardEncontrado, 'Precisa ter uma liga com mais de 4 inscritos e inscrições abertas').to.exist

        // Transforma o card encontrado em um objeto Cypress para poder interagir com ele
        cy.wrap(cardEncontrado)
            .contains('button.draw', 'Sortear grupos')
            .should('be.enabled')
            .click()
    })
})

Cypress.Commands.add('inscreverEmLigaAberta', () => {
    cy.get('nav > a').contains('Ligas').click()

    cy.get('.league-card').then(($cards) => {
        const ligaDisponivel = [...$cards].find((card) => {
            const botaoParticipar = card.querySelector('button.join')

            return (
                botaoParticipar?.textContent.trim() === 'Participar' &&
                !botaoParticipar.disabled
            )
        })

        expect(ligaDisponivel, 'Precisa de uma liga disponível para inscrição').to.exist

        cy.wrap(ligaDisponivel)
            .contains('button.join', 'Participar')
            .click()
    })
})