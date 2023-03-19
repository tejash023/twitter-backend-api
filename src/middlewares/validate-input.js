import { ClientErrors } from "../utils/error-codes.js";

export const validateRegisterUserData = (req, res, next) => {
  if (!req.body.email || !req.body.password || !req.body.name) {
    return res.status(ClientErrors.BAD_REQUEST).json({
      success: false,
      data: {},
      message: "Missing mandatory properties",
      err: "BAD REQUEST - User Signup",
    });
  }

  next();
};

export const validateLoginUserData = (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    return res.status(ClientErrors.BAD_REQUEST).json({
      success: false,
      data: {},
      message: "Missing mandatory properties",
      err: "BAD REQUEST - User Login",
    });
  }

  next();
};
