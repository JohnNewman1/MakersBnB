describe('Index page', function() {
  beforeEach(function () {
    cy.visit('http://localhost:8000')
  })

  it('Displays a welcome message', function () {
    cy.contains('Welcome to MakersBnB').should('be.visible');
  })

  it('has a link to /spaces/new', function () {
    cy.get('.link-form').contains('Submit space for rent')
  })
})
