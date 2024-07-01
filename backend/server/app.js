const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(bodyParser.json());

// Read the SSL certificate
const sslCert = fs.readFileSync(
  path.join(__dirname, "certs", "DigiCertGlobalRootCA.crt")
);

// Initialize Sequelize with SSL configuration
const sequelize = new Sequelize({
  dialect: "mysql",
  host: "weather-api-db.mysql.database.azure.com",
  username: "gona04",
  password: "Goonja@1990",
  database: "weather_app_db", // Use the new database
  dialectOptions: {
    ssl: {
      ca: sslCert,
      rejectUnauthorized: false, // Accept self-signed certificates
    },
  },
});

// Define Sequelize model
const UserDetails = sequelize.define("user_details", {
  userId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  ip: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  login_country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  login_state: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Sync Sequelize models with the database
sequelize
  .sync()
  .then(() => {
    console.log("Database synced");
  })
  .catch((error) => {
    console.error("Error syncing database:", error);
  });

// Express route for saving user details
app.post("/api/user-details", async (req, res) => {
  try {
    const { ip, login_country, login_state } = req.body;

    // Save user details to database
    const newUserDetails = await UserDetails.create({
      ip,
      login_country,
      login_state,
    });

    res.status(201).json(newUserDetails);
  } catch (error) {
    console.error("Error saving user details:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Start the Express server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
