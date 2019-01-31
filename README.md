# viewer-nodejs-typeview.sample
[![Build Status](https://travis-ci.org/dukedhx/viewer-nodejs-typeview.sample.svg?branch=master)](https://travis-ci.org/dukedhx/viewer-nodejs-typeview.sample)
[![TravisCI Build](https://travis-ci.org/dukedhx/viewer-nodejs-typeview.sample.svg?branch=master)](https://travis-ci.org/dukedhx/viewer-nodejs-typeview.sample)
[![codebeat badge](https://codebeat.co/badges/d5ce951d-aca0-4618-9c43-e11aaa8e36f6)](https://codebeat.co/projects/github-com-dukedhx-viewer-nodejs-typeview-sample-master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Node.js](https://img.shields.io/badge/Node.js-8.0.0-blue.svg)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-3.8.6-blue.svg)](https://www.npmjs.com/)
[![Platforms](https://img.shields.io/badge/platform-windows%20%7C%20osx%20%7C%20linux-lightgray.svg)]()
[![License](http://img.shields.io/:license-mit-blue.svg)](http://opensource.org/licenses/MIT)
[![Viewer](https://img.shields.io/badge/Viewer-v6.4-green.svg)](https://forge.autodesk.com/en/docs/viewer/v6/developers_guide/overview/)

# Description

This sample demonstrates how to use typescript to create the basic [Autodesk Forge Viewer](https://forge.autodesk.com/en/docs/viewer/v6/developers_guide/overview/), with your familiar stack of jQuery, Bootstrap and Forge Node.js SDK.

The front-end will look like:

### Thumbnail
![thumbnail](/thumbnail.png)

# Setup

For using this sample, you need an Autodesk developer credentials. Visit the [Forge Developer Portal](https://developer.autodesk.com), sign up for an account, then [create an app](https://developer.autodesk.com/myapps/create). Finally take note of the **Client ID** and **Client Secret**.

To understand this sample, there are a couple of technologies as follow you need to be prepared:
* Use [Node.js](https://nodejs.org) and [Express.js](http://expressjs.com) to create the web framework.
* Use [npm](https://www.npmjs.com) to manage your javascript package.
* Use [Gulp](https://www.npmjs.com/package/gulp) to automate tasks in your development workflow.
* Use [gulp-typescript](https://www.npmjs.com/package/gulp-typescript) to handle compilation workflow of TypeScript.
* Use [Forge Viewer](https://developer.autodesk.com/api/view-and-data-api/) to display the 3D Viewer in web browser.

### Run locally

Install [NodeJS](https://nodejs.org).

Clone this project or download it. It's recommended to install [GitHub desktop](https://desktop.github.com/). To clone it via command line, use the following (**Terminal** on MacOSX/Linux, **Git Shell** on Windows):

    git clone https://github.com/Developer-Autodesk/viewer-nodejs-typeview.sample.git

Install gulp globally. If you have previously installed a version of gulp globally, please run **"npm rm --global gulp"** to make sure your old version doesn't collide with gulp-cli. Then install it as **"npm install -g gulp"**. If you do not have access to the install folder, please use **"sudo npm install -g gulp"** to gain the security priviledges of super user.

In `app/config/config.ts`:</br>
replace `urn` with the `ObjectID` (no base64 encoding required) of a model you previously uploaded with the [Model Derivative API](https://developer.autodesk.com/en/docs/model-derivative/v2/tutorials/prepare-file-for-viewer/)

To run it, install the required packages, set the enviroment variables with your client ID & secret and finally start it. Via command line, navigate to the folder where this repository was cloned and use the following:


Mac OSX/Linux (Terminal)

    npm install
    export FORGE_CLIENT_ID=<<YOUR CLIENT ID FROM DEVELOPER PORTAL>>
    export FORGE_CLIENT_SECRET=<<YOUR CLIENT SECRET>>
    npm run dev

Windows (use **Node.js command line** from Start menu)

    npm install
    set FORGE_CLIENT_ID=<<YOUR CLIENT ID FROM DEVELOPER PORTAL>>
    set FORGE_CLIENT_SECRET=<<YOUR CLIENT SECRET>>
    npm run dev




Open the browser: [http://localhost:3000/](http://localhost:3000/).

**Important:** do not use **npm start** locally, this is intended for PRODUCTION only with HTTPS (SSL) secure cookies.

### Deploy on Heroku

To deploy this application to Heroku, the **Callback URL** must use your .herokuapp.com address. After clicking on the button below, at the Heroku Create New App page, set your Client ID & Secret and the correct callback URL.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/Autodesk-Forge/viewer-nodejs-typeview.sample)

Watch [this video](https://www.youtube.com/watch?v=Oqa9O20Gj0c) on how deploy this sample to Heroku.


### Packages used

All Autodesk Forge NPM packages are included by default, see complete list of what's available at [NPM website](https://www.npmjs.com/browse/keyword/autodesk). Some other non-Autodesk packaged are used, including [express](https://www.npmjs.com/package/express) ([express-session](https://www.npmjs.com/package/express-session)). The front-end uses [bootstrap](https://www.npmjs.com/package/bootstrap) and [jquery](https://www.npmjs.com/package/jquery).

# Tips & tricks

- To use the definitions in your TypeScript (2.x or later) project (Angular/Vue/React or non-framework), install the definitions:

  ```bash
  npm install --save-dev @types/forge-apis @types/forge-viewer @types/three #THREE is required by Viewer
  ```

  And reference them in your `tsconfig.json`:

  ```json
  {
    "types": [ "forge-viewer" ]
  }
  ```

- After any modification to a .ts file in the project, you need to run command "gulp" to generate new result, which however not necessary if `nodemon` is running when the app is started with 'npm run dev'.


# Questions

Please post your questions to [StackOverflow using the autodesk-viewer tag](http://stackoverflow.com/questions/tagged/autodesk-viewer).

After installing Github desktop for Windows, on the Git Shell, if you see a ***error setting certificate verify locations*** error, use the following:

    git config --global http.sslverify "false"

# License

This sample is licensed under the terms of the [MIT License](http://opensource.org/licenses/MIT).
Please see the [LICENSE](LICENSE) file for full details.

## Written by

Jan Liska<br/>Philippe Leefsma<br/>Zhong Wu<br/>Bryan Huang<br/>
Forge Partner Development<br/>
http://forge.autodesk.com
