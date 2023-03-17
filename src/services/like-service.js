import { TweetRepository, LikeRepository } from "../repository/index.js";

class LikeService {
  constructor() {
    this.likeRepository = new LikeRepository();
    this.tweetRepository = new TweetRepository();
  }

  async toggleLike(modelId, modelType, userId) {
    // /api/v1/likes/toggle?id=modelId&modelType=Tweet
    if (modelType == "Tweet") {
      var likeable = await this.tweetRepository.find(modelId);
      console.log("likeable", likeable);
    } else if (modelType == "Comment") {
      //TODO
    } else {
      throw new Error("unknown model type");
    }

    const checkLikeExists = await this.likeRepository.findByUserAndLikeable({
      user: userId,
      onModel: modelType,
      likeable: modelId,
    });

    console.log("checkLikeExists", checkLikeExists);

    if (checkLikeExists) {
      likeable.likes.pull(checkLikeExists.id);
      await likeable.save();
      await checkLikeExists.deleteOne();
      var isAdded = false;
    } else {
      const newLike = await this.likeRepository.create({
        user: userId,
        onModel: modelType,
        likeable: modelId,
      });

      likeable.likes.push(newLike);
      await likeable.save();
      var isAdded = true;
    }

    return isAdded;
  }
}

export default LikeService;
