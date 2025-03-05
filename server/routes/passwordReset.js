const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const {User} = require("../models/user"); // Ensure this points to your user model

router.post("/", async (req, res) => {
  const { email, newPassword } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) return res.status(404).send({ message: "User not found" });

    user.password = req.body.newPassword;
    await user.save();
    
    res.send({ message: "Password reset successful!" });
  } catch (error) {
    res.status(500).send({ message: "Server error" });
  }
});

module.exports = router;
