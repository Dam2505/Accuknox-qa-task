# Accuknox-qa-task

**Prerequisites**
Before you begin, Please ensure you have the following installed:

- Docker
- Kubernetes (Kind)
- kubectl
- Node.js (with npm)
- Cypress

**Installing Cypress:**

1. Run This command in command prompt:  npm install cypress --save-dev 
2. Open Cypress to run the automated tests: npx cypress open
3. To take screenshots after running each spec file: npm install cy-verify-downloads


**Important Notes**

- Beforing running cypress, ensure frontend and backend service is created and up 
- Create backend and frontend deployment yaml (backend-deployment.yaml and frontend deployment.yaml)
<br/>

 **Step 1:** Create a Kind cluster:  kind create cluster --name test-cluster
  To get cluster info : kubectl cluster-info
<br/>

**Step 2:**  Build docker images:
      For the backend:  docker build -t backend:latest -f ./backend/Dockerfile . 
      <br />
      For the frontend: docker build -t frontend:latest -f ./frontend/Dockerfile .
<br/>

**Step 3:** Load images into Kind cluster:
      Load the backend image: kind load docker-image backend:latest --name test-cluster
      <br />
      Load the frontend image: kind load docker-image frontend:latest --name test-cluster
<br/>

**Step 4:** Deploy Backend and Frontend:
      Apply the deployment YAML files to deploy the services: 
        kubectl apply -f ./Deployment/backend-deployment.yaml
        <br />
        kubectl apply -f ./Deployment/frontend-deployment.yaml
<br/>

**Step 5:** To check Status of Pod:
     *Ensure both frontend and backend status is Running*
     <br />
        kubectl get pods  
<br/>

**Step 6:** Get Service Details: 
      *Retrieve the list of services:*
      <br />
        kubectl get services
  
**Step 7:** Port-Forward Frontend Service:
<br />
      kubectl port-forward svc/frontend-service 8080:80

4. Once Cypress is open, you can execute your integration tests by selecting the test file. Ensure that the frontend service is accessible at http://localhost:8080.

	For example, click on Click on Intergration.cy.js to start the test.

**Test Script for automated testing**
Test Script is present in ./cypress/e2e/Integration.cy.js 