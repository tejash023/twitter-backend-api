import mongoose from "mongoose";

const tweetSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      max: [250, "Tweet cannot be more than 250 characters"],
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Like",
      },
    ],
  },
  { timestamps: true }
);

const Tweet = mongoose.model("Tweet", tweetSchema);

export default Tweet;

/*
  //Sample Model
  {
    "_id" : ObjectId("6415fae963b49bff5554b15c"),
    "content" : "life goes on #new #post #test",
    "likes" : [],
    "createdAt" : ISODate("2023-03-18T17:54:49.064+0000"),
    "updatedAt" : ISODate("2023-03-18T17:54:49.064+0000"),
    "__v" : NumberInt(0)
  }
*/
