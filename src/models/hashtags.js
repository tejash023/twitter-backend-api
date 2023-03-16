/* 

* Hashtag will be having a title,
* What all tweets are belonging to a hashtags
  - Multiple tweets can belong to a hashtag
  - One hashtags can have multiple tweets

* Mainting a tweet array which will have tweets id and reference will be Tweet Schema
   - Multiple tweet ids - belonging to a hashtag

*/

const mongoose = require("mongoose");

const hashtagSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
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

module.exports = Hashtag;
