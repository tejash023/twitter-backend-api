import { response } from "express";
import TweetService from "../services/tweet-service.js";

const tweetService = new TweetService();

export const createTweet = async (req, res) => {
  try {
    const response = await tweetService.create(req.body);
    return res.status(201).json({
      success: true,
      message: "Successfully created the Tweet",
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong. Try again",
      data: response,
      err: error,
    });
  }
};
