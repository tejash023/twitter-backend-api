import Tweet from "../models/tweet.js";
import { CrudRepository } from "../repository/index.js";

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

  //GET TWEET - FROM CRUD REPO

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

  //DESTROY TWEET - FROM CRUD REPO

  //GET ALL TWEETS
  async getAll(offset, limit) {
    try {
      const tweet = await Tweet.find()
        .skip(offset)
        .limit(limit)
        .sort({ date: -1 });
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  //FIND TWEETS
  async find(id) {
    try {
      const tweet = await Tweet.findById(id).populate({ path: "likes" });
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }
}

export default TweetRepository;
