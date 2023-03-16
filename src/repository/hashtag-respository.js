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

  //BULK CREATE HASHTAG
  async bulkCreate(data) {
    try {
      const tags = await Hashtag.insertMany(data);
      return tags;
    } catch (error) {
      console.log(error);
    }
  }

  //GET HASHTAG
  async get(id) {
    try {
      const tag = await Hashtag.findById(id);
      return tag;
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

  //GET HASHTAG BY NAME
  async findByName(titleList) {
    try {
      const tags = await Hashtag.find({
        title: titleList,
      });

      return tags;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = HashtagRepository;

/**
 * select("title - _id"); - will return only the title
 */
