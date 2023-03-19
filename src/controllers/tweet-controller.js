import { response } from "express";
import TweetService from "../services/tweet-service.js";

import upload from "../config/file-upload-s3-config.js";
const singleUploader = upload.single("image");

const tweetService = new TweetService();

export const createTweet = async (req, res) => {
  try {
    singleUploader(req, res, async function (err, data) {
      if (err) {
        return res.status(500).json({ error: err });
      }

      const payload = { ...req.body };
      payload.image = req.file.location;
      const response = await tweetService.create(payload);
      return res.status(201).json({
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
