const express = require("express");
const router = express.Router();
const auth = require("../helpers/auth");

const UserController = require("../controllers/User/UserController");

// CREATE NEW STUDENT
router.post("/create-student", auth, UserController.createUser);

// GET STUDENT LIST
router.get("/student-list", auth, UserController.getUser);

module.exports = router;
