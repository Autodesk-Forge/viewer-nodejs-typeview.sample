#view.and.data-nodejs-typeview.sample

##Description
[![build status](https://api.travis-ci.org/cyrillef/extract-view.and.data.api.png)](https://travis-ci.org/cyrillef/extract-view.and.data.api)
[![Node.js](https://img.shields.io/badge/Node.js-6.0.0-blue.svg)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-3.8.6-blue.svg)](https://www.npmjs.com/)
[![Viewer](https://img.shields.io/badge/Viewer-v2.5-green.svg)](https://developer.autodesk.com/api/view-and-data-api/)
![Platforms](https://img.shields.io/badge/platform-windows%20%7C%20osx%20%7C%20linux-lightgray.svg)
[![License](http://img.shields.io/:license-mit-blue.svg)](http://opensource.org/licenses/MIT)

This sample demonstrates how to use typescript with the Forge Viewer using a Node.js server

##Dev Requirements

install [Node.js](https://nodejs.org/en/download/)

sudo npm install -g gulp

##Deployment
You need to request API credentials at [Forge Platform](https://developer.autodesk.com/user/me/apps)

In app/config/config.ts:<br/>
replace consumerKey and consumerSecret by the keys you requested at [Forge Platform](https://developer.autodesk.com/user/me/apps)

In app/www/scripts/app.ts:<br/>
replace var urn = '...' by the urn of a model you previously uploaded with the [View & Data OSS REST API](https://developer.autodesk.com/api/view-and-data-api/#step1)

npm install

gulp

npm start

##Default URL

http://localhost:3000/node/typeview

##After any modification to a .ts file in the project

gulp

##Test the Live version

[TypeView](http://viewer.autodesk.io/node/typeview)

## License

That samples are licensed under the terms of the [MIT License](http://opensource.org/licenses/MIT). Please see the [LICENSE](LICENSE) file for full details.

## Deploy to Heroku

Click the button below to easily deploy that sample on Heroku (requires an Heroku account)

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

##Written by

Jan Liska <br/>
& <br/>
[Philippe Leefsma](http://adndevblog.typepad.com/cloud_and_mobile/philippe-leefsma.html)

Autodesk Forge, 2016

