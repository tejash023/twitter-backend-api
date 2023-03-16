import express from "express";

import { createTweet } from "../../controllers/tweet-controller.js";

const router = express.Router();

router.use("/tweets", createTweet);

export default router;
