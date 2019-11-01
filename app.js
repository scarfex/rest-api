const express = require("express");

const app = express();

//Middleware
app.use("/posts", () => {
    console.log("This is a middleware running");
});

//ROUTES
app.get("/", (req, res) => {
    res.send("Home Screen");
});

app.get("/posts", (req, res) => {
    res.send("Posts Screen");
});

app.listen(3000);
