const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

//Import Routes
const postsRoute = require("./routes/posts");
app.use(bodyParser.json());
app.use("/posts", postsRoute);

//ROUTES
app.get("/", (req, res) => {
    res.send("Home Screen");
});

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => console.log("Connected to DB!"));

app.listen(3000);
