const express = require("express");
const router = express.Router();
const { handleUserSignIn, handleUserSignUp } = require("../controllers/User");

// singin route
router.post("/signin", handleUserSignIn);

// signup route
router.post("/signup", handleUserSignUp);

module.exports = router;
