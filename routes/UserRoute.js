const express = require("express");
const router = express.Router();

router.get("/user", getUser);
router.post("/user",postUser);
router.get("/user/getall",getAll)

module.exports = router;
