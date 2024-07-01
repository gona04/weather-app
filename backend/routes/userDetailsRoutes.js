const express = require("express");
const UserDetails = require("../models/userDetails"); // Adjust path as needed
const router = express.Router();

// Express route for saving user details
router.post("/api/user-details", async (req, res) => {
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

module.exports = router;
