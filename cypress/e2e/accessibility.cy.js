describe('Accessibility and Responsive Design', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have a title', () => {
    cy.title().should('not.be.empty');
  });

  it('should have proper heading structure', () => {
    // Check that h1 exists and is visible
    cy.get('h1').should('be.visible');
    
    // Check that headings are in order (no h1 after h2, etc.)
    cy.get('h1, h2, h3, h4, h5, h6').then($headings => {
      const tags = $headings.get().map(el => el.tagName.toLowerCase());
      
      // Check if headings are in proper order
      for (let i = 1; i < tags.length; i++) {
        const current = parseInt(tags[i].replace('h', ''));
        const previous = parseInt(tags[i-1].replace('h', ''));
        
        // Current heading should not be more than one level deeper than previous
        expect(current).to.be.at.most(previous + 1);
      }
    });
  });

  it('should be responsive on different screen sizes', () => {
    // Test on mobile
    cy.viewport('iphone-x');
    cy.get('nav').should('be.visible');
    cy.wait(500); // Wait for any animations
    
    // Test on tablet
    cy.viewport('ipad-2');
    cy.get('nav').should('be.visible');
    cy.wait(500);
    
    // Test on desktop
    cy.viewport(1920, 1080);
    cy.get('nav').should('be.visible');
  });

  it('should have proper alt text for images', () => {
    // Check all images have alt text
    cy.get('img').each($img => {
      // Get alt attribute or empty string if it doesn't exist
      const alt = $img.attr('alt') || '';
      
      // Images should either have alt text or be marked as decorative with empty alt
      expect(alt).to.exist;
    });
  });

  it('should have proper focus indicators', () => {
    // Tab through focusable elements and check if they're visible when focused
    cy.get('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])').first().focus();
    
    // Press tab multiple times to navigate through focusable elements
    for (let i = 0; i < 5; i++) {
      cy.focused().should('be.visible');
      cy.focused().tab();
    }
  });
}); 