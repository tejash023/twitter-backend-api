import UserService from "../services/user-service.js";

const userService = new UserService();

// REGISTERING A USER - EMAIL, PASSWORD AND NAME
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

//LOGGING IN A USER - EMAIL AND PASSWORD
export const login = async (req, res) => {
  try {
    const token = await userService.signin(req.body);
    return res.status(200).json({
      success: true,
      message: "Successfully logged in",
      data: token,
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      data: {},
      message: "Something went wrong",
      error: error,
    });
  }
};
