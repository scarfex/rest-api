const express = require("express");
const router = express.Router();

router.get("/posts", (req, res) => {
    res.send("Posts Screen");
});

module.exports = router;
