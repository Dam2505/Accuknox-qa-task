/// <reference types="cypress" />


describe('Frontend-Backend Integration', () => {
  
  afterEach(function () {
    cy.PassedScreenshot()
})
  
  it('should display the greeting message from the backend', () => {
    cy.visit('http://localhost:8080'); 
    cy.contains('Hello from the Backend!'); // Check for the correct greeting message
    cy.log('Frontend service has successfully communicated with the backend service')
  });
});