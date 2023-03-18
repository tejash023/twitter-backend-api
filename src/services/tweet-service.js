import { TweetRepository, HashtagRepository } from "../repository/index.js";

class TweetService {
  constructor() {
    this.tweetRepository = new TweetRepository();
    this.hashtagRepository = new HashtagRepository();
  }

  async create(data) {
    /**
     * 1. Taking the content from data => content: "this is my #first #tweet. I am #excited"
     * 2. Regex is used to extract the hashtags => ["#first", "#tweet", "#excited"]
     * 3. Mapping over the tags to eliminate the "#" and making it LCase => ["first", "tweet", "excited"]
     * 4. Check if the hastags are already present in the DB, if not then create it
     * 5. Create the tweets
     * 6. Check alreadyPresentTags, findByName will return already present tags in DB => [{title: excited}, {title:fun}]
     * 7. Map over alreadyPresentTags and extract tags title => [excited, carrer]
     * 8. Filtering out the elements in first array, which are not present in second array
     * 9. Map over the newTags and tweet id inside each tags
     * 10. newTags are created using buLkCreate which is insertMany()
     * 11. Looping over already present tags and pushing the tweet ids as one hashtags can have multiple tweets
     */

    const content = data.content;

    let tags = content.match(/#[a-zA-Z0-9_]+/g); //THIS REGEX EXTRACTS HASHTAGS
    tags = tags.map((tag) => tag.substring(1).toLowerCase());

    const tweet = await this.tweetRepository.create(data); //CREATING TWEET

    let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
    let titleOfPresentTags = alreadyPresentTags.map((tags) => tags.title);

    let newTags = tags.filter((tag) => !titleOfPresentTags.includes(tag));

    newTags = newTags.map((tag) => {
      return { title: tag, tweets: [tweet.id] };
    });

    await this.hashtagRepository.bulkCreate(newTags);

    alreadyPresentTags.forEach((tag) => {
      tag.tweets.push(tweet.id);
      tag.save();
    });

    return tweet;
  }
}

export default TweetService;

/*
  SAMPLE RESPONSE - Create DATA
  content This is again #after hastag processing, it is going to be #Fun #nodejs #code
  Tags [ 'after', 'Fun', 'nodejs', 'code' ]
  Tweet {
    content: 'This is again #after hastag processing, it is going to be #Fun #nodejs #code',
    _id: new ObjectId("64134694c6a22745fae98a6a"),
    createdAt: 2023-03-16T16:40:52.968Z,
    updatedAt: 2023-03-16T16:40:52.968Z,
    __v: 0
  }

  alreadyPresent [
    {
      _id: new ObjectId("641345ae6275e8affc8104f0"),
      title: 'after',
      tweets: [ new ObjectId("641345ae6275e8affc8104ed") ],
      __v: 0,
      createdAt: 2023-03-16T16:37:02.985Z,
      updatedAt: 2023-03-16T16:37:02.985Z
    },
    {
      _id: new ObjectId("641345ae6275e8affc8104f1"),
      title: 'Fun',
      tweets: [ new ObjectId("641345ae6275e8affc8104ed") ],
      __v: 0,
      createdAt: 2023-03-16T16:37:02.986Z,
      updatedAt: 2023-03-16T16:37:02.986Z
    }
  ]

  titleOfPresentTags [ 'after', 'Fun' ]

  New Tags [ 'nodejs', 'code' ]
  new Tags [
    { title: 'nodejs', tweets: [ '64134694c6a22745fae98a6a' ] },
    { title: 'code', tweets: [ '64134694c6a22745fae98a6a' ] }
  ]
    ______________RESPONSE_______________ 
  [
    {
      title: 'nodejs',
      tweets: [ new ObjectId("64134694c6a22745fae98a6a") ],
      _id: new ObjectId("64134695c6a22745fae98a6d"),
      __v: 0,
      createdAt: 2023-03-16T16:40:53.006Z,
      updatedAt: 2023-03-16T16:40:53.006Z
    },
    {
      title: 'code',
      tweets: [ new ObjectId("64134694c6a22745fae98a6a") ],
      _id: new ObjectId("64134695c6a22745fae98a6e"),
      __v: 0,
      createdAt: 2023-03-16T16:40:53.007Z,
      updatedAt: 2023-03-16T16:40:53.007Z
    }
  ]
  {
    content: 'This is again #after hastag processing, it is going to be #Fun #nodejs #code',
    _id: new ObjectId("64134694c6a22745fae98a6a"),
    createdAt: 2023-03-16T16:40:52.968Z,
    updatedAt: 2023-03-16T16:40:52.968Z,
    __v: 0
  }

*/
