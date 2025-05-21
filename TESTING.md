# E2E Testing Documentation

This project uses Cypress for end-to-end testing. This document provides information about the testing setup and how to run the tests.

## Testing Setup

The project has the following test files:

1. **Theme Toggle Tests** (`cypress/e2e/theme-toggle.cy.js`)
   - Tests for dark/light theme toggle functionality
   - Checks default theme is dark
   - Verifies theme persistence across page refreshes

2. **Navigation Tests** (`cypress/e2e/navigation.cy.js`)
   - Tests navbar visibility and functionality
   - Tests mobile menu toggle
   - Tests navigation between different sections

3. **Accessibility Tests** (`cypress/e2e/accessibility.cy.js`)
   - Tests proper heading structure
   - Tests responsiveness across different screen sizes
   - Tests image alt text
   - Tests focus indicators for keyboard navigation

## Running Tests

### Prerequisites

Make sure you have the following installed:
- Node.js
- npm

### Installation

1. Install dependencies:
   ```
   npm install
   ```

### Running the Development Server

Before running the tests, start the development server:
```
npm run dev
```

### Running All Tests

To run all tests in headless mode:
```
npm run test:e2e
```

### Running Specific Tests

To run specific test files:
```
npx cypress run --spec "cypress/e2e/theme-toggle.cy.js"
```

### Opening Cypress Test Runner

To open the Cypress Test Runner UI:
```
npm run cypress:open
```

## Test Configuration

The Cypress configuration is defined in `cypress.config.js`. The main settings include:

- Base URL: `http://localhost:5173`
- Custom commands in `cypress/support/commands.js`

## Custom Commands

The project includes a custom `tab` command to simulate keyboard tabbing for accessibility testing.

## CI/CD Integration

For CI/CD integration, you can add the test command to your CI workflow:

```yaml
- name: Run E2E Tests
  run: npm run test:e2e
```

## Best Practices

- Write descriptive test names
- Group related tests with `describe` blocks
- Use `beforeEach` for common setup
- Use data attributes for test-specific selectors
- Avoid brittleness by not relying on text content that changes frequently 