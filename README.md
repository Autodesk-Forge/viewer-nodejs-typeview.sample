#TypeView

##Description

TypeScript Sample using Node.js and Autodesk View & Data API

##Dev Requirements

install [Node.js](https://nodejs.org/en/download/)
sudo npm install -g gulp

##Deployment

In app/config/config.ts: replace consumerKey and consumerSecret by the keys you requested on our [API portal](https://developer.autodesk.com/api/view-and-data-api/)
in app/www/scripts/app.ts: replace var urn = '...' by the urn of a model you previously uploaded with the [View & Data OSS REST API](https://developer.autodesk.com/api/view-and-data-api/#step1)

npm install
gulp

##Default URL

http://localhost:3000/node/typeview

##After any modification to a .ts file in the project

gulp

##Test the Live version

[TypeView](http://viewer.autodesk.io/node/typeview)

##License

[MIT License](http://opensource.org/licenses/MIT)

##Written by

Jan Liska
&
[Philippe Leefsma](http://adndevblog.typepad.com/cloud_and_mobile/philippe-leefsma.html)