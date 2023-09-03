const admin = require('firebase-admin');

const serviceAccount = JSON.parse(process.env.FIREBASE_CERT);

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
