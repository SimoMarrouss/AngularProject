// server/config.js
module.exports = {
  AUTH0_DOMAIN: 'https://mmarrouss.eu.auth0.com/',
  AUTH0_API_AUDIENCE: 'http://localhost:8083/api/', /* likely 'http://localhost:8083/api/' */
  MONGO_URI: process.env.MONGO_URI || 'mongodb://[USER]:[PASSWORD]@[DS######].mlab.com:[PORT]/[DB_NAME]'
};