'use strict';

const functions  = require('firebase-functions');
const admin      = require('firebase-admin');

admin.initializeApp();
const database = admin.firestore();
const mailboxes = database.collection('MAILBOXES');
const CONFIG = functions.config().app;



const isValidRequest = (request) => CONFIG.token == request.query.token;



const addNewMessage = (fields) => {
    if (! fields.recipient)
        return;

    const recipient = fields.recipient.match(/([\w-\.]+)@((?:[\w]+\.)+)([a-z]{2,4})/gi).shift().toLowerCase();

    const domain = recipient.split('@').pop();
    if (domain != 'tuamaeaquelaursa.com') {
        return {"message": "mailbox not found"};
    }

    var expires_at = new Date();

    if (recipient == 'falecom@tuamaeaquelaursa.com') {
        expires_at.setMonth(expires_at.getMonth() + 2);
    }

    const message = mailboxes.doc(recipient).collection('INBOX').add({
        recipient  : recipient == 'falecom@tuamaeaquelaursa.com' ? recipient : 'any',
        from       : fields.from,
        subject    : fields.subject,
        bodyHtml   : fields.bodyHtml,
        created_at : Date.now(),
        expires_at : admin.firestore.Timestamp.fromDate(expires_at),
    });

    return message;
}


module.exports = {
    isValidRequest,
    addNewMessage,
}
