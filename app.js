const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
  console.log("hello world");
});

module.exports = app;
