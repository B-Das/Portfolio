// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Custom command to simulate pressing the Tab key
Cypress.Commands.add('tab', { prevSubject: 'element' }, (subject) => {
  const focusableElements = 'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])';
  
  // Get all focusable elements
  cy.get(focusableElements).then($elements => {
    const elements = $elements.toArray();
    
    // Find the index of the currently focused element
    const index = elements.findIndex(el => el === subject[0]);
    
    // Focus the next element or the first if we're at the end
    const nextIndex = (index + 1) % elements.length;
    cy.wrap(elements[nextIndex]).focus();
  });
});