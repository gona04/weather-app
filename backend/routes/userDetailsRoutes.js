const express = require("express");
const UserDetails = require("../models/userDetails");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allUserDetails = await UserDetails.findAll();
    res.status(200).json({UserDetails:allUserDetails});
  } catch (error) {
    console.error("Error retrieving user details:", error);
    res.status(500).json({error: "Server error"});
  }
});

router.post("/", async (req, res) => {
  try {
    const {ip, login_country, login_city} = req.body;
    const userDt = {ip: ip, login_country: login_country, login_city: login_city};
    const newUserDetails = await UserDetails.create(userDt);

    res.status(201).json(newUserDetails);
  } catch (error) {
    console.error("Error saving user details:", error);
    res.status(500).json({error: "Server error"});
  }
});

module.exports = router;
