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
Cypress.Commands.add('login', () => { 
    cy.request({
      method: 'POST',
      url: 'http://localhost:12345/auth',
      body: {
            "password" : "Ljy19971029",
            "email" : "li.j@ufl.edu"
      }
    })
    .then((resp) => {
        cy.log(resp.body.id)
        window.localStorage.setItem('jwtToken', resp.body.token)
        window.localStorage.setItem('user-id', resp.body.id)
        window.localStorage.setItem('myId', resp.body.id)
        window.localStorage.setItem('name', resp.body.name)
    })
  
  })
Cypress.Commands.add('show', () => { 
    //cy.log("why I dont have id")
    cy.log(window.localStorage.getItem('myId'))

})
describe('Sign up and login', () => {

    it('registerAndLogin', () => {
        cy.get('button').click()
        cy.location('pathname').should('eq', '/login')
        cy.get('input[name="email"]').type('li.j@ufl.edu')
        cy.get('input[name="password"]').type('Ljy19971029')
        cy.get('button').click()
        cy.wait(1000)
        cy.location('pathname').should('eq', '/profile')
    })
})
describe('post a good', () => {
    beforeEach(() => {
        cy.login()
        cy.show()
      })
    it('post', () => {
        cy.get('a[href*="add"]').click()
        cy.get('input[name="name"]').type('a new brush')
        cy.get('textarea').type('A brand new brush, about 20 cm long, with a soft head for small things')
        cy.get('input[name="price"]').type('2')
        cy.get('select').select('daily necessity')
        cy.contains('images').selectFile(['public/images/brush.jpg', 'public/images/light.jpg'])
        //cy.get('#0').click(5,5)
        cy.get('button').click()
        cy.wait(1000)
    })
})
describe('into a detail page and post a comment', () => {
    beforeEach(() => {
        cy.login()
        cy.show()
      })
    it('detail', () => {
        cy.get('.image:first').click()
        cy.get('input[name="message"]').type('Could you send this express?')
        cy.get('button[type=submit]').click()
    })
})
describe('add to favorites', () => {
    beforeEach(() => {
        cy.login()
        cy.show()
      })
    it('love', () => {
        cy.wait(1000)
        cy.get('.love i').click()
        cy.visit('localhost:3000/profile')
        cy.scrollTo(0, 500)
        cy.wait(1000)
        cy.get('.favorites div:first').click()
        cy.wait(1000)
    })
})
describe('delete', () => {
    beforeEach(() => {
        cy.login()
        cy.show()
      })
    it('delete', () => {
        cy.visit('localhost:3000/profile')
        cy.wait(1000)
        cy.get('.posted div:first').click()
        cy.wait(1000)
        cy.get('.ih button').click()
    })
})