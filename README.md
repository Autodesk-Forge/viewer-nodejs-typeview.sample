#view.and.data-nodejs-typeview.sample

##Description
[![build status](https://api.travis-ci.org/cyrillef/extract-view.and.data.api.png)](https://travis-ci.org/cyrillef/extract-view.and.data.api)
[![Node.js](https://img.shields.io/badge/Node.js-6.0.0-blue.svg)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-3.8.6-blue.svg)](https://www.npmjs.com/)
[![Viewer](https://img.shields.io/badge/Viewer-v2.7-green.svg)](https://developer.autodesk.com/api/view-and-data-api/)
![Platforms](https://img.shields.io/badge/platform-windows%20%7C%20osx%20%7C%20linux-lightgray.svg)
[![License](http://img.shields.io/:license-mit-blue.svg)](http://opensource.org/licenses/MIT)

This sample demonstrates how to use typescript to create the basic Forge Viewer, to understand this sample, there are a couple of technologies as follow you need to be prepared: 
* Use [Node.js](https://nodejs.org) and [Express.js](http://expressjs.com) to create the web framework.
* Use [npm](https://www.npmjs.com) to manage your javascript package.
* Use [Gulp](https://www.npmjs.com/package/gulp) to automate tasks in your development workflow.
* Use [gulp-typescript](https://www.npmjs.com/package/gulp-typescript) to handle compilation workflow of TypeScript.
* Use [Forge Viewer](https://developer.autodesk.com/api/view-and-data-api/) to display the 3D Viewer in web browser.
</br>
If you are not familiar with any of above technology, please click the link to get more information there.

##Live Demo
<center>[Click me to see how it actually works](https://typescriptviewer.herokuapp.com/node/typeview)</center>
</br>
<center>You will see the result as the following picture
![](./screenshot.png)
</center>
##Setup/Usage Instructions

* Download and install [Node.js](https://nodejs.org/en/download/)
* Install gulp globally. If you have previously installed a version of gulp globally, please run **"npm rm --global gulp"** to make sure your old version doesn't collide with gulp-cli. Then install it as **"npm install -g gulp"**. If you do not have 
access to the install folder, please use **"sudo npm install -g gulp"** to gain the security priviledges of super user.
* Please change the following place before you run or deployment:</br>
**In app/config/config.ts:**</br>
replace consumerKey and consumerSecret by the keys you requested at [Forge Platform](https://developer.autodesk.com/user/me/apps)</br>
**In app/www/scripts/app.ts:**</br>
replace var urn = '...' by the urn of a model you previously uploaded with the [View & Data OSS REST API](https://developer.autodesk.com/api/view-and-data-api/#step1)
* Install all the package by running the command **"npm install"**.
* Run command **"gulp"** to automatically deploy your web application.  
* Run command **"npm start"** to start the server.

Run the default URL **http://localhost:3000/node/typeview** in web browser, enjoy:)

##Notice
After any modification to a .ts file in the project, you need to run command **"gulp"** to generate new result.

## License
That samples are licensed under the terms of the [MIT License](http://opensource.org/licenses/MIT). Please see the [LICENSE](LICENSE) file for full details.

## Deploy to Heroku
Click the button below to easily deploy that sample on Heroku (requires an Heroku account)

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

##Written by

Jan Liska & [Philippe Leefsma](http://adndevblog.typepad.com/cloud_and_mobile/philippe-leefsma.html) (**Forge Partner Development**)

https://developer.autodesk.com/api/view-and-data-api/#step1
