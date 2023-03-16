const { TweetRepository } = require("../repository/index");

class TweetService {
  constructor() {
    this.tweetRepository = new TweetRepository();
  }

  async create(data) {
    const content = data.content;
    const tags = content.match(/#[a-zA-Z0-9_]+/g); //this regex extracts hashtags from strings
    tags = tags.map((tag) => tag.substring(1));
    const tweet = await this.tweetRepository.create(data);
    console.log(tags);
    /**
     * BulkCreate in Mongoose
     * Filter title of the hashtag based on multiple tags
     * Adding tweeet id inside all the hashtags
     */

    return tweet;
  }
}

module.exports = TweetService;

/**
 * this is my #first #tweet. I am #excited.
 *
 */
