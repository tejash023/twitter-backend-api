import mongoose from "mongoose";

const hashtagSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    tweets: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tweet",
      },
    ],
  },
  { timestamps: true }
);

const Hashtag = mongoose.model("Hashtag", hashtagSchema);

export default Hashtag;

/* 

  * Hashtag will be having a title,
  * What all tweets are belonging to a hashtags
    - Multiple tweets can belong to a hashtag
    - One hashtags can have multiple tweets

  * Mainting a tweet array which will have tweets id and reference will be Tweet Schema
    - Multiple tweet ids - belonging to a hashtag

  SAMPLE MODEL
  {
    "_id" : ObjectId("64135da35457238080eabfc9"),
    "title" : "india",
    "tweets" : [
        ObjectId("64135da25457238080eabfc4")
    ],
    "__v" : NumberInt(0),
    "createdAt" : ISODate("2023-03-16T18:19:15.012+0000"),
    "updatedAt" : ISODate("2023-03-16T18:19:15.012+0000")
  }

*/
