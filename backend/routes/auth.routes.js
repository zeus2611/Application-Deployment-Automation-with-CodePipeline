const express = require("express");
const router = express.Router();

const RegisterController = require("../controllers/Auth/RegisterController");
const LoginController = require("../controllers/Auth/LoginController");

// Test API
router.get("/sayhi", RegisterController.sayHi);

// Register API
router.post("/register", RegisterController.register);

// Login API using Email/Password
router.post("/login", LoginController.login);

module.exports = router;
