import httpStatus from "http-status";
import ApiError from "../utils/ApiError.js";
import userService from "./user.service.js";

const loginUserWithEmailAndPassword = async (email, password) => {
  const user = await userService.getUserByEmail(email);
  if (!user || !(await user.isPasswordMatch(password))) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Incorrect email or password");
  }
  return user;
};

export default { loginUserWithEmailAndPassword };
