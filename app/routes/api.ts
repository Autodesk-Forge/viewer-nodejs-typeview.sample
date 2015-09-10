/// <reference path='../typings/express/express.d.ts' />
/// <reference path='../typings/request/request.d.ts' />

import express = require('express');
import request = require('request');
import config = require('../config/config');
import auth = require('../authinfo');

var router = express.Router();

var authInfo = new auth.AuthInfo(
    config.consumerKey,
    config.consumerSecret);

router.get('/token', (req, res) => {

 request.post(authInfo.Authentication,
    { form: authInfo.Credentials }, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            res.send(body);
        }
    });
});

export = router;




