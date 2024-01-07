const express = require("express");
const router = express.Router();
const { createUser, getAllUsers } = require("../controller/user.controller.js");

router.get("/user", getAllUsers);
router.post("/user", createUser);

module.exports = router;
