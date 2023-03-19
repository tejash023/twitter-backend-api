import { LikeService } from "../services/index.js";
import { SuccessCodes } from "../utils/erro-codes.js";

const likeService = new LikeService();

export const toggleLike = async (req, res) => {
  try {
    const response = await likeService.toggleLike(
      req.query.modelId,
      req.query.modelType,
      req.user.id
    );

    return res.status(SuccessCodes.CREATED).json({
      success: true,
      data: response,
      message: "Successfully toggled like",
      err: {},
    });
  } catch (err) {
    console.log(error);
    res.status(500).json({
      success: false,
      data: {},
      message: "Something went wrong",
      err: error,
    });
  }
};
