const admin = require('firebase-admin');
const cert = require('./config.json');

const firebaseCert = JSON.stringify(cert);
console.info(firebaseCert);

const serviceAccount = firebaseCert
	.replace('{{private_key_id}}', process.env.FIREBASE_CERT_KEY_ID)
	.replace('{{private_key}}', process.env.FIREBASE_CERT_KEY);

console.info(serviceAccount);

admin.initializeApp({
	credential: admin.credential.cert(JSON.parse(serviceAccount)),
});

module.exports = admin;
