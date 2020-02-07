This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). <img src="https://github.com/kscheung029/cognito_starter/blob/master/src/logo.svg" width="100" height="100">

## Technologies includes:
 - AWS Cognito Service
 <img src="https://github.com/kscheung029/ImageAsset/blob/master/Picture1.jpg">
 <br></br>
 <img src="https://github.com/kscheung029/ImageAsset/blob/master/Picture2.jpg">
 - AWS S3 Bucket Storage
 - AWS Database Authetication to store User Account information including username,password,email,etc. 
   </br>Account Register Interface:</br>
   <img src="https://github.com/kscheung029/ImageAsset/blob/master/Picture3.jpg">
 - Integrate Cognito Authetication into .NET Core App with NetCorePool id and App Client id
  <img src="https://github.com/kscheung029/ImageAsset/blob/master/Picture4.jpg">
 - AWS SDK Connection
 - Email verification 
   <img src="https://github.com/kscheung029/ImageAsset/blob/master/Picture5.jpg">
 - Login and Logout Functionality with React native

 
## Project goals:

 - Uses Cognito Identity Service for user registration and authentication.
 - When a user is authenticated, they can view an “Items” page, this can be any form of item that can be stored in a database (In this project, blog entry images are the items).
 - If the user is not authenticated...this page and its relevant links should not be accessible.
 - Items must be pulled using a Lambda Function from an AWS datastore of your choosing.
 - Items must include at least one image.
 - Images should be stored in an AWS S3 bucket and only the URL saved to the database.
 
## Application Page Flow
 - Registration with email confirmation
 - Login and Logout
 - Item List
 - Item Detail
 
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
