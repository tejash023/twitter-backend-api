import mongoose from "mongoose";

const likeSchema = new mongoose.Schema(
  {
    onModel: {
      type: String,
      required: true,
      enum: ["Tweet", "Comment"],
    },
    likeable: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      refPath: "onModel",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },

  { timestamps: true }
);

const Like = mongoose.model("Like", likeSchema);

export default Like;

/*
  onModel: Type of Model - could be either tweet or a comment
  likeable: Tweet id for user will like/unline
  user: user details

  {
    "_id" : ObjectId("6416070bdb42396efb5e7d78"),
    "onModel" : "Tweet",
    "likeable" : ObjectId("6415fae963b49bff5554b15c"),
    "user" : ObjectId("6414aefb80dbc3da1ff58a01"),
    "createdAt" : ISODate("2023-03-18T18:46:35.448+0000"),
    "updatedAt" : ISODate("2023-03-18T18:46:35.448+0000"),
    "__v" : NumberInt(0)
  }

*/
