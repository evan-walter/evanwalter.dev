describe('Navigation', () => {
  it('should navigate to the works page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // Find a link with an href attribute containing "works" and click it
    cy.get('a[href*="works"]').click()

    // The new url should include "/works"
    cy.url().should('include', '/works')

    // The new page should contain an p with "works"
    cy.get('p').contains('works')
  })
})
