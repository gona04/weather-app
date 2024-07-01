const express = require("express");
const UserDetails = require("../models/userDetails"); // Adjust path as needed
// eslint-disable-next-line new-cap
const router = express.Router();

// Express route for retrieving user details
router.get(async (req, res) => {
  try {
    // Retrieve all user details from database
    const allUserDetails = await UserDetails.findAll();
    console.log(allUserDetails);
    res.status(200).json(allUserDetails);
  } catch (error) {
    console.error("Error retrieving user details:", error);
    res.status(500).json({error: "Server error"});
  }
});

// Express route for saving user details
router.post(async (req, res) => {
  try {
    const {ip, loginCountry, loginState} = req.body;

    // Save user details to database
    const newUserDetails = await UserDetails.create({
      ip,
      loginCountry,
      loginState,
    });

    res.status(201).json(newUserDetails);
  } catch (error) {
    console.error("Error saving user details:", error);
    res.status(500).json({error: "Server error"});
  }
});

module.exports = router;
