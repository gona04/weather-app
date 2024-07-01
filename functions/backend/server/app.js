const express = require("express");
const bodyParser = require("body-parser");
const userDetailsRoutes = require("../routes/userDetailsRoutes");
const sequelize = require("./db");
const path = require("path");
const cors = require("cors");

const expressApp = express();

// Middleware
expressApp.use(bodyParser.json());

// CORS middleware
expressApp.use(cors());

// API routes
expressApp.use("/api/user-details", userDetailsRoutes);

// Serve React app static files
expressApp.use(express.static(path.join(__dirname, "../../../build")));

// Fallback route for React client-side routing
expressApp.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../../build", "index.html"));
});

// Test API route to ensure JSON response
expressApp.get("/test", async (req, res) => {
  try {
    // Replace this with actual data retrieval logic if needed
    res.status(200).json({message: "API test endpoint working fine"});
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({error: "Server error"});
  }
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

// Start the Express server with a fixed port (adjust as needed)
const PORT = 5002;
expressApp.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
