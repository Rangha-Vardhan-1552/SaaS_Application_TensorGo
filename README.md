## Communication Platform with Postmarkapp.com
Create a communication platform within a SaaS application, allowing users to log in using
Google OAuth, view their communication details, and interact with the Postmarkapp.com API for email
communication.
The solution is designed as a microservices architecture with a Node.js backend and a React frontend.

## Features
* ### Backend Microservices (Node.js)
  
  #### User Authentication
  Endpoint: /api/auth/google.
  Description: Enable users to log in using Google OAuth.
  
  #### Communication Details
  Endpoint: /api/communication.
  Description: Retrieve communication history, including sent and received emails.
  
  #### Send Email
  Endpoint: /api/email/send.
  Description: Send emails using the Postmarkapp.com API. This endpoint should integrate with Postmarkapp.com to handle email communication. Ensure that communication history is recorded and reflected in the frontend.

* ### Frontend (React)
    * #### Authentication using Google OAuth.
    * #### Display Communication History
    * #### Compose emails

## Prerequisites
  * ### Node installed
     For more details visit ... [Node.js](https://nodejs.org/en "Nodejs Home")
  * ### Postmarkapp.com API key
    For more details visit ... [Postmarkapp.com](https://postmarkapp.com/developer "PostMarkapp Home")

## Installation
 * ### Clone the repository
   ```bash
     git clone https://github.com/Rangha-Vardhan-1552/SaaS_Application_TensorGo.git
     cd SaaS_Application_TensorGo
   ```

* ### Now installing dependecies for backend
   ```bash
   npm install
   ```
   Above command is used to install all the packages which is present in package.json folder.

* ### Installing the dependencies for frontend
   ```bash
   cd client
   npm install
   ```
   change your present working directory i.e('/SaaS_Application_TensorGo) to client folder,then run the last command for installing frontend dependencies.

* ### Configure the environmental variable by creating _.env_ file
  _.env_ file consist of sensitive information like api_keys, tokens, or secret keys which are directly not provide in allication files  to avoid security issues...
  #### creating of _.env_ file for backend or api ,go to...
  ```bash
  cd SaaS_Application_TensorGo
  ```
  Then create .env file here i.e(_/SaaS_Application_TensorGo/.env_)
  ```bash
    JWT_SECRET='YOUR_JWT_SECRET'
    MONGO='YOUR_MONGODB_URL'
  ```
   #### And also create _.env_ file for frontend ,go to...
  ```bash
  cd client
  ```
  hen create .env file here i.e(_/SaaS_Application_TensorGo/client/.env_)
  ```bash
  VITE_FIREBASE_API_KEY='YOUR_FIREBASE_API_KEY_FOR_GOOGLE_OAUTH'
  ```
* ### Run the server (Microservices Node.js)
  > _SaaS_Application_TensorGo_ folder.
  ```bash
  npm run dev
  ```
* ### Run the Local Application (React App)
  > _SaaS_Application_TensorGo/client_ folder.
  ```bash
  npm run dev
  ```
## Overview
![image](https://github.com/Rangha-Vardhan-1552/SaaS_Application_TensorGo/assets/113281417/fe68f692-bdab-4f44-b5ad-5561b2674194)
![image](https://github.com/Rangha-Vardhan-1552/SaaS_Application_TensorGo/assets/113281417/c11ef70f-f27d-4748-b6d5-b16ed781cfa7)
![image](https://github.com/Rangha-Vardhan-1552/SaaS_Application_TensorGo/assets/113281417/8e6bec55-f5e1-43b5-a01b-8bb627bed9c2)
![image](https://github.com/Rangha-Vardhan-1552/SaaS_Application_TensorGo/assets/113281417/4c2dfa08-bb2e-4630-aa19-3f84a1bc437a)
![image](https://github.com/Rangha-Vardhan-1552/SaaS_Application_TensorGo/assets/113281417/a06c733a-aeae-447a-b23d-458516ed33f8)








  
  
  
  
  
  
   
    
