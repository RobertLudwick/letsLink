// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'AC00dc4b68ceac6c1d9bc500ca68264e11';
const authToken = 'c3b5a5c29d29f093f7cf6d819d28eccd';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+17327240124',
     to: '+17186197929'
   })
  .then(message => console.log(message.sid));