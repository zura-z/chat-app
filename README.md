# Chat App

Group app chat for communication between unlimited (authed) users 


##### Created using: React for front-end & Firebase for back-end 


## Live Project

https://chat-app-0000001.web.app/

## Installation

1. clone or download repository
2. run `npm install` in root directory
3. run `npm run dev` to run projects locally
4. (**important**) To ensure that the above steps work as they should and that the app runs correctly, you need to complete the processes described below (Firebase; Environment Variables) 

### Firebase

You need to setup the firebase

1. Create firebase project
2. Enable Google Auth & Anonymous Auth
3. Enable firestore database
4. Change environment variables (which are listed below) with your own firebase project config values  

### Environment Variables

You will need to add the following environment variables to your .env file

`VITE_API_KEY`

`VITE_AUTH_DOMAIN`

`VITE_PROJECCT_ID`

`VITE_STORAGE_BUCKET`

`VITE_MESSAGING_SENDER_ID`

`VITE_APP_ID`

`VITE_MEASUREMENT_ID`
