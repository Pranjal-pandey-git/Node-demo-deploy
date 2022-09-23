const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      "Hello World!, A Hello, World! program is generally a computer program that ignores any input and outputs or displays a message similar to 'Hello, World!'. A small piece of code in most general-purpose programming languages, this program is used to illustrate a language's basic syntax"
    );
  console.log("hello world");
});

module.exports = app;
