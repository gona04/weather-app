const express = require("express");
const bodyParser = require("body-parser");
const userDetailsRoutes = require("./routes/userDetailsRoutes");
const sequelize = require("./server/db");
const functions = require("firebase-functions");
const admin = require('firebase-admin');
admin.initializeApp();

const expressApp = express();

expressApp.use(bodyParser.json());

expressApp.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});

expressApp.use("/api/user-details", userDetailsRoutes);

sequelize
    .sync()
    .then(() => {
      console.log("Database synced");
    })
    .catch((error) => {
      console.error("Error syncing database:", error);
    });

const PORT = 5002;
expressApp.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

exports.weather_api = functions.https.onRequest(expressApp);