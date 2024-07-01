const express = require("express");
const bodyParser = require("body-parser");
const userDetailsRoutes = require("../routes/userDetailsRoutes");
const sequelize = require("./db");

const app = express();
app.use(bodyParser.json());

// Register userDetailsRoutes middleware
app.use(userDetailsRoutes);

// Sync Sequelize models with the database
sequelize
  .sync()
  .then(() => {
    console.log("Database synced");
  })
  .catch((error) => {
    console.error("Error syncing database:", error);
  });

// Start the Express server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
