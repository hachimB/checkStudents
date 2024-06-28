// firebaseAdminConfig.js
const admin = require('firebase-admin');
const serviceAccount = require("C:\\Users\\HachimB\\Desktop\\Projects\\checkStudents\\backend\\firebaseAdminConfig.js");

// Initialize Firebase Admin with service account
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Get Firestore instance
const db = admin.firestore();

module.exports = { db, admin };
