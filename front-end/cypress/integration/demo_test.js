describe('My First Test', () => {
    it('Visits openMart', () => {
      cy.visit('http://localhost:3000/')
      cy.contains('type')
    })
  })