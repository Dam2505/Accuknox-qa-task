# Accuknox-qa-task

**Prerequisites**
Before you begin, Please ensure you have the following installed:

- Docker
- Kubernetes (Kind)
- kubectl
- Node.js (with npm)
- Cypress

1. Run This command in command prompt: <br />
	  npm install cypress --save-dev <br />
2. Open Cypress to run the automated tests <br />
	  npx cypress open <br />
3. To take screenshots after running each spec file  <br />
  npm install cy-verify-downloads <br />


**Important Notes**

- Before running cypress, ensure frontend and backend service is created and up <br />
- Create backend and frontend deployment yaml (backend-deployment.yaml and frontend deployment.yaml)<br />
Step 1: Create a Kind cluster <br />
    kind create cluster --name test-cluster   
<br />
  To get cluster info
    <br />
    kubectl cluster-info 
    <br />
Step 2:  Build docker images: 
<br />
      For the backend:
      <br />
        docker build -t backend:latest -f ./backend/Dockerfile . 
<br />
      For the frontend:
        docker build -t frontend:latest -f ./frontend/Dockerfile .
<br />
Step 3: Load images into Kind cluster:
<br />
      Load the backend image:
  <br />
        kind load docker-image backend:latest --name test-cluster
  <br />
      Load the frontend image:
        kind load docker-image frontend:latest --name test-cluster

Step 4: Deploy Backend and Frontend:
      Apply the deployment YAML files to deploy the services: 
        kubectl apply -f ./Deployment/backend-deployment.yaml
        kubectl apply -f ./Deployment/frontend-deployment.yaml

Step 5: To check Status of Pod:
     *Ensure both frontend and backend status is Running*
        kubectl get pods  
      	
Step 6: Get Service Details: 
      *Retrieve the list of services:*
        kubectl get services
  
Step 7: Port-Forward Frontend Service
      kubectl port-forward svc/frontend-service 8080:80

4. Once Cypress is open, you can execute your integration tests by selecting the test file. Ensure that the frontend service is accessible at http://localhost:8080.

	For example, click on Click on Intergration.cy.js to start the test.

**Test Script for automated testing**
The following Cypress test script verifies the integration between the frontend and backend services:

/// <reference types="cypress" />

describe('Frontend-Backend Integration', () => {
    it('should display the greeting message from the backend', () => {
      cy.visit('http://localhost:8080');
      cy.contains('Hello from the Backend!'); // Check for the correct greeting message
      cy.log('Frontend service has successfully communicated with the backend service')
    });
  });

**Test Script End**
