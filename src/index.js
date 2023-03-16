const express = require("express");
const connect = require("./config/database");

const app = express();

const { TweetRepository } = require("./repository/tweet-repository");
const TweetService = require("./services/tweet-service");

app.listen(3000, async () => {
  console.log("Server is up and running");
  await connect();
  console.log("MongoDB connected");
  let repo = new TweetService();
  const tweet = await repo.create({
    content:
      "This is again #after hastag processing, it is going to be #Fun #nodejs #code",
  });
  console.log(tweet);
});
