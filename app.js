const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

//ROUTES
app.get("/", (req, res) => {
    res.send("Home Screen");
});

app.get("/posts", (req, res) => {
    res.send("Posts Screen");
});

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => console.log("Connected to DB!"));

app.listen(3000);
