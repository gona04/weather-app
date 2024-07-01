const express = require("express");
const UserDetails = require("../models/userDetails");
const router = express.Router();

// Express route for retrieving user details
router.get("/", async (req, res) => { // Add "/" to the path
  try {
    console.log("in get");
    const allUserDetails = await UserDetails.findAll();
    console.log(allUserDetails);
    res.status(200).json({UserDetails:allUserDetails});
  } catch (error) {
    console.error("Error retrieving user details:", error);
    res.status(500).json({error: "Server error"});
  }
});

// Express route for saving user details
router.post("/", async (req, res) => { // Add "/" to the path
  try {
    console.log(req.body);
    const {ip, login_country, login_state} = req.body;
    const userDt = {ip: ip, login_country: login_country, login_state: login_state};
    console.log(userDt);
    const newUserDetails = await UserDetails.create(userDt);

    res.status(201).json(newUserDetails);
  } catch (error) {
    console.error("Error saving user details:", error);
    res.status(500).json({error: "Server error"});
  }
});

module.exports = router;
