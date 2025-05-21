describe('Theme Toggle', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    cy.clearLocalStorage();
    
    // Visit the homepage
    cy.visit('/');
  });

  it('should default to dark theme on first visit', () => {
    // Check if html element has dark class
    cy.get('html').should('have.class', 'dark');
    
    // Check if localStorage has theme set to dark
    cy.window().then((win) => {
      expect(win.localStorage.getItem('theme')).to.eq('dark');
    });
  });

  it('should toggle theme when button is clicked', () => {
    // Find and click the theme toggle button (using first to handle multiple matches)
    cy.get('button[aria-label*="Switch to light mode"]').first().click();
    
    // Check if dark class is removed
    cy.get('html').should('not.have.class', 'dark');
    
    // Check if localStorage has theme set to light
    cy.window().then((win) => {
      expect(win.localStorage.getItem('theme')).to.eq('light');
    });
    
    // Click again to go back to dark theme
    cy.get('button[aria-label*="Switch to dark mode"]').first().click();
    
    // Check if dark class is added back
    cy.get('html').should('have.class', 'dark');
    
    // Check if localStorage has theme set to dark
    cy.window().then((win) => {
      expect(win.localStorage.getItem('theme')).to.eq('dark');
    });
  });

  it('should persist theme across page refreshes', () => {
    // Switch to light theme
    cy.get('button[aria-label*="Switch to light mode"]').first().click();
    
    // Verify light theme is active
    cy.get('html').should('not.have.class', 'dark');
    
    // Reload the page
    cy.reload();
    
    // Verify light theme is still active after reload
    cy.get('html').should('not.have.class', 'dark');
    cy.window().then((win) => {
      expect(win.localStorage.getItem('theme')).to.eq('light');
    });
    
    // Switch back to dark theme
    cy.get('button[aria-label*="Switch to dark mode"]').first().click();
    
    // Reload again
    cy.reload();
    
    // Verify dark theme persists
    cy.get('html').should('have.class', 'dark');
    cy.window().then((win) => {
      expect(win.localStorage.getItem('theme')).to.eq('dark');
    });
  });
}); 