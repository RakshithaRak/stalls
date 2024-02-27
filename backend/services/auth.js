const { initializeApp, cert } = require("firebase-admin/app");
const { getAuth } = require("firebase-admin/auth");
const ServiceAccountKey = require("./ServiceAccountKey.json");

const app = initializeApp({
  credential: cert(ServiceAccountKey),
});

module.exports = getAuth(app);
