const Tweet = require("../models/tweet");

class TweetRepository {
  //CREATE TWEET
  async create(data) {
    try {
      const tweet = await Tweet.create(data);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  //GET TWEET
  async get(id) {
    try {
      const tweet = await Tweet.findById(id);
    } catch (error) {
      console.log(error);
    }
  }

  //GET TWEET WITH COMMENTS
  async getWithComments(id) {
    try {
      const tweet = await Tweet.findById(id)
        .populate({ path: "comments" })
        .lean();
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  //DESTROY TWEET
  async destroy(id) {
    try {
      const tweet = await Tweet.findByIdAndRemove(id);
    } catch (error) {
      console.log(error);
    }
  }

  //GET ALL TWEETS
  async getAll(offset, limit) {
    try {
      const tweet = await Tweet.find().skip(offset).limit(limit);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = TweetRepository;
