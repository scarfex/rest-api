const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Posts Screen");
});

module.exports = router;
