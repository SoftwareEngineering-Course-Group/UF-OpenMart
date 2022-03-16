// sample_spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('First Test', () => {
    it('Visits the home page and go to profile page', () => {
      cy.visit('localhost:3000')
      cy.get('a[href*="profile"]').click()
      cy.url().should('include', '/profile')
    })
})
describe('Sign up and login', () => {
    beforeEach(() => {
        cy.task('log', 'This will be output to the terminal')
      })
    it('registerAndLogin', () => {
        
        // cy.visit('localhost:3000/register')
        // cy.get('input[name="name"]').type('Lee')
        // cy.get('input[name="phone"]').type('3521112113')
        // cy.get('input[name="email"]').type('Lee@ufl.edu')
        // cy.get('input[name="password"]').type('lee12345')
        // cy.get('button').click()
        // cy.wait(1000)
        // cy.location('pathname').should('eq', '/login')
        cy.visit('localhost:3000/login')
        cy.get('input[name="email"]').type('yyb976644121@gmail.com')
        cy.get('input[name="password"]').type('yyb')
        cy.get('button').click()
        cy.wait(1000)
        cy.location('pathname').should('eq', '/profile')
    })
})
describe('post a good', () => {
    it('post', () => {
        cy.get('a[href*="add"]').click()
        cy.get('input[name="name"]').type('a new brush')
        cy.get('textarea').type('A brand new brush, about 20 cm long, with a soft head for small things')
        cy.get('input[name="price"]').type('2')
        cy.contains('images').selectFile(['public/images/brush.jpg', 'public/images/light.jpg'])
        cy.get('#0').click(5,5)
        cy.pause()
        cy.get('button').click()
    })
})