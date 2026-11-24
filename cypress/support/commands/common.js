Cypress.Commands.add('clickAuthSubmitButton', (nameSelect, itemSelect) => {
    cy.get('#auth-submit').click()
})

Cypress.Commands.add('selecionarOpcaoSelect', (nameSelect, itemSelect) => {
    cy.get(`select[name="${nameSelect}"]`).select(itemSelect)
})

Cypress.Commands.add('verificarMensagemToast', mensagem => {
    cy.get('#toast').should('have.text', mensagem)
})