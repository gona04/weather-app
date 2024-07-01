const Sequelize = require("sequelize");
const fs = require("fs");
const path = require("path");

// Read the SSL certificate
const sslCert = fs.readFileSync(
    path.join(__dirname, "certs", "DigiCertGlobalRootCA.crt"),
);

// Initialize Sequelize with SSL configuration
const sequelize = new Sequelize({
  dialect: "mysql",
  host: "weather-api-db.mysql.database.azure.com",
  username: "gona04",
  password: "Goonja@1990",
  database: "weather_app_db", 
  dialectOptions: {
    ssl: {
      ca: sslCert,
      rejectUnauthorized: false, 
    },
  },
  logging: console.log,
});

module.exports = sequelize;