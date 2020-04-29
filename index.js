const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const axios = require("axios");
const Twitter = require("twitter");

// Enable process.env
require("dotenv").config();

// Twitter Config
var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  bearer_token: process.env.TWITTER_BEARER_TOKEN,
});

// CORS
app.use(cors());

// Route to get Data from Twitter!
app.get("/twitter/search", (req, res) => {
  // Get Search Query
  const { q } = req.query;

  client.get("search/tweets", { q }, function (error, tweets, response) {
    res.json(tweets);
  });
});

// Root!
app.get("/", (req, res) => res.send("Hello World!"));

// Listen/Start Server
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
