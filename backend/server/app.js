const express = require("express");
const sequelize = require("./db");
const userDetailsRoutes = require("../routes/userDetailsRoutes");

const app = express();
const PORT = process.env.PORT || 8080;

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use userDetailsRoutes for '/api/user-details'
app.use("/api/user-details", userDetailsRoutes);

// Sync Sequelize models with the database
sequelize.sync().then(() => {
  console.log("Database synced");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
