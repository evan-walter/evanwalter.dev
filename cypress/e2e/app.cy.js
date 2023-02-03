describe('Navigation', () => {
  it('should navigate to the features page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // Find a link with an href attribute containing "features" and click it
    cy.get('a[href*="features"]').click()

    // The new url should include "/features"
    cy.url().should('include', '/features')

    // The new page should contain an p with "features"
    cy.get('p').contains('features')
  })
})
