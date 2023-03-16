const Hashtag = require("../models/hashtags");

class HashtagRepository {
  //CREATE HASHTAG
  async create(data) {
    try {
      const tag = await Hashtag.create(data);
      return tag;
    } catch (error) {
      console.log(error);
    }
  }

  //GET HASHTAG
  async get(id) {
    try {
      const tag = await Hashtag.findById(id);
    } catch (error) {
      console.log(error);
    }
  }

  //DESTROY HASHTAG
  async destroy(id) {
    try {
      const tag = await Hashtag.findByIdAndRemove(id);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = HashtagRepository;
