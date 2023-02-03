describe('Navigation', () => {
  it('should navigate to the about page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // Find a link with an href attribute containing "projects" and click it
    cy.get('a[href*="projects"]').click()

    // The new url should include "/projects"
    cy.url().should('include', '/projects')

    // The new page should contain an p with "projects"
    cy.get('p').contains('projects')
  })
})
