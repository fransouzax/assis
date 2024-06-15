'use strict';

const functions  = require('firebase-functions');
const Busboy     = require('busboy');

module.exports = function (e, utils) {
    e.sendgrid = functions.https.onRequest((request, response, next) => {
        if ( !utils.isValidRequest(request) )
            return response.status(401).send();

        const busboy = new Busboy({headers: request.headers});
        const input = {};

        busboy.on('field', (fieldname, val) => {
            input[fieldname] = val;
        });

        busboy.on('finish', () => {

            const fields = {
                from      : input['from']       || null,
                recipient : input['to']         || null,
                subject   : input['subject']    || null,
                bodyHtml  : input['html']       || null,
                bodyPlain : input['text']       || null,
                headers   : input['headers']    || null,
            };

            response.send(utils.addNewMessage(fields));
        });

        busboy.end(request.rawBody);
    });
};
