const express = require("express");

// Creating express object
const app = express();

// Handling GET request
app
  .get("/", (req, res) => {
    res.send("A simple Node App is " + "running on this server");
    res.end();
  })
  .listen(5000);
