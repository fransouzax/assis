'use strict';

const functions  = require('firebase-functions');


module.exports = function (e, utils) {
    e.mailgun = functions.https.onRequest((request, response, next) => {
        if ( !utils.isValidRequest(request) )
            return response.status(401).send();

        const fields = {
            from      : request.body['from']       || null,
            recipient : request.body['recipient']  || null,
            subject   : request.body['subject']    || null,
            bodyHtml  : request.body['body-html']  || null,
            bodyPlain : request.body['body-plain'] || null,
            headers   : request.body['headers']    || null,
        };

        response.send(utils.addNewMessage(fields));
    });
};
