import UserService from "../services/user-service.js";

const userService = new UserService();

export const signup = async (req, res) => {
  try {
    const response = await userService.signup({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
    });

    return res.status(200).json({
      success: true,
      data: response,
      message: "Sign up successfull",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(501).json({
      success: false,
      data: {},
      message: "Something went wrong",
      error: error,
    });
  }
};
