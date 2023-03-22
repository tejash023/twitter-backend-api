import { response } from "express";
import { TweetService } from "../services/index.js";
import { SuccessCodes } from "../utils/error-codes.js";

import upload from "../config/file-upload-s3-config.js";
const singleUploader = upload.single("image");

const tweetService = new TweetService();

//CREATE TWEETS
export const createTweet = async (req, res) => {
  try {
    singleUploader(req, res, async function (err, data) {
      if (err) {
        return res.status(500).json({ error: err });
      }

      const payload = { ...req.body };
      payload.image = req.file.location;
      const response = await tweetService.create(payload);
      return res.status(SuccessCodes.CREATED).json({
        success: true,
        message: "Successfully created the Tweet",
        data: response,
        err: {},
      });
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong. Try again",
      data: response,
      err: error,
    });
  }
};

//GET ALL TWEETS
export const getAllTweets = async (req, res) => {
  try {
    const tweets = await tweetService.getAll(req.query.offset, req.query.limit);
    return res.status(SuccessCodes.OK).json({
      success: true,
      message: "List of all tweets",
      data: tweets,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong. Try again",
      data: response,
      err: error,
    });
  }
};

//DESTROY TWEET
export const destroyTweet = async (req, res) => {
  try {
    await tweetService.destroy(req.body.id);
    return res.status(SuccessCodes.OK).json({
      success: true,
      message: "Tweet deleted successfully",
      data: {},
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong. Try again",
      data: response,
      err: error,
    });
  }
};
