describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the navbar', () => {
    cy.get('nav').should('be.visible');
  });

  it('should have logo that links to home', () => {
    cy.get('nav').find('a[href="#hero"]').should('contain', 'Biraj');
  });

  it('should toggle mobile menu when clicking the menu button', () => {
    // Only run this test on mobile viewports
    cy.viewport('iphone-x');
    
    // Find the menu button
    cy.get('button[aria-label*="menu"]').should('be.visible');
    
    // Menu should initially be hidden
    cy.get('div[class*="opacity-0"]').should('exist');
    
    // Click the mobile menu toggle
    cy.get('button[aria-label*="menu"]').first().click();
    
    // Wait for animation to complete
    cy.wait(500);
    
    // Menu should be visible
    cy.get('div[class*="opacity-100"]').should('exist');
    
    // Close the menu if a close button exists
    cy.get('button[aria-label*="close"]').first().click({force: true});
  });

  it('should navigate to different sections when clicking nav links', () => {
    // Get all nav links (except the logo)
    cy.get('nav a:not([href="#hero"])').each(($link) => {
      const href = $link.attr('href');
      
      // Skip if href is not defined
      if (!href) return;
      
      // Click the link
      cy.wrap($link).click();
      
      // Check if the URL hash matches the link's href
      cy.hash().should('eq', href);
    });
  });
}); 