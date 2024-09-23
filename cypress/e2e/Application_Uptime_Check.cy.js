/// <reference types="cypress" />

describe('Application Uptime Check', () => {
    const Url = 'https://www.facebook.com/login'; 
  
    afterEach(function () {
        cy.PassedScreenshot()
    })

    it('Should check if the application is up or down', () => {
      cy.visit(Url);
      cy.title().should('include', 'Facebook')
      cy.request({
        url: Url,
        failOnStatusCode: false // Prevent Cypress from failing the test on non-2xx/3xx status codes
      }).then((response) => {
        // Check the HTTP status code
        if (response.status === 200) {
          cy.log('Application is UP');
        } else {
          cy.log('Application is DOWN');
        } 
        expect(response.status).to.be.equal(200);
      });
    });
  });