require('dotenv').config(); // This line loads the environment variables from the .env file
const Sequelize = require("sequelize");
const fs = require("fs");
const path = require("path");

// Read the SSL certificate
const sslCert = fs.readFileSync(
    path.join(__dirname, "certs", "DigiCertGlobalRootCA.crt"),
);

// Initialize Sequelize with SSL configuration and environment variables
const sequelize = new Sequelize({
  dialect: "mysql",
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE, 
  dialectOptions: {
    ssl: {
      ca: sslCert,
      rejectUnauthorized: false, 
    },
  },
  logging: console.log,
});

module.exports = sequelize;