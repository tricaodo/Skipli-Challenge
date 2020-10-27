const accountSid = 'AC380407190c3b68d28fe5bdd7e56ed509';
const authToken = 'f0b3f6ef4d1060af1305c4cd3d7f2448';
const client = require('twilio')(accountSid, authToken);
exports.sendSMS = function (phoneNumber, accessCode) {
    client.messages
        .create({
            body: `Your verification code is: ${accessCode}`,
            from: '+14157612479',
            to: `+1${phoneNumber}`
        })
        .then(message => console.log(message.sid));
}