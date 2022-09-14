const { response } = require("express");
const express = require("express");

// Creating express object
const app = express();

// Handling GET request
app.get("/", (req, res) => {
  res.send("A simple Node App is " + "running on this server");
  res.end();
});
app
  .get("/media", function (req, res) {
    var response = {
      podcasts: [
        {
          description: "some text",
          id: 574,
          title: "Why long-term value is a winning bet",
          media: "podcast",
          publishedDate: "2018-12-19T18:00:00.000Z",
          isLive: true,
          isDeleted: false,
          link: "https://podcasts.com/574",
          createdAt: "2018-12-20T06:30:00.618Z",
          updatedAt: "2019-01-31T06:30:00.864Z",
        },
      ],
      total: 1,
    };
    if (response.podcasts.length > 0) {
      res.send(response);
    } else {
      var errObj = {
        httpCode: 404,
        message: "NOT_FOUND",
        description: "The resource referenced by request does not exists.",
        details: "Podcast is not available",
      };
      res.status(404);
      res.send(errObj);
    }
  })
  .listen(5000);
module.exports = app;
