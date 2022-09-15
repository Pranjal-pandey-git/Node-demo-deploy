const express = require("express");
const app = express();

app
  .get("/", (req, res) => {
    res.status(200).send("Hello World!");
    console.log("hello world");
  })
  .listen(5000);

module.exports = app;
