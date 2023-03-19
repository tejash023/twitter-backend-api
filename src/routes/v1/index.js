import express from "express";

import { createTweet } from "../../controllers/tweet-controller.js";
import { toggleLike } from "../../controllers/like-controller.js";
import { createComment } from "../../controllers/comment-controller.js";
import { signup, login } from "../../controllers/auth-controller.js";

import { authenticate } from "../../middlewares/authenticate.js";

import {
  validateRegisterUserData,
  validateLoginUserData,
} from "../../middlewares/validate-input.js";

const router = express.Router();

//CREATING TWEETS /api/v1/tweets
router.post("/tweets", createTweet);

router.post("/likes/toggle", toggleLike);

router.post("/comment", createComment);

router.post("/signup", validateRegisterUserData, signup);

router.post("/login", validateLoginUserData, login);

export default router;
