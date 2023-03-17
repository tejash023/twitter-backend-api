import Tweet from "../models/tweet.js";
import CrudRepository from "./crud-repository.js";

class TweetRepository extends CrudRepository {
  constructor() {
    super(Tweet);
  }

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

  //GET ALL TWEETS
  async getAll(offset, limit) {
    try {
      const tweet = await Tweet.find().skip(offset).limit(limit);
    } catch (error) {
      console.log(error);
    }
  }
}

export default TweetRepository;
