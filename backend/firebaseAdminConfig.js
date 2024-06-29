// firebaseAdminConfig.js
const admin = require('firebase-admin');
const serviceAccount = require("./Config/firebase-service-account.json");

// Initialize Firebase Admin with service account
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Get Firestore instance
const db = admin.firestore();

module.exports = { db, admin };
