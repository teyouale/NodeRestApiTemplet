import httpStatus from "http-status";
import { User } from "../models/index.js";
import ApiError from "../utils/ApiError.js";

const CreateUser = async (userBody) => {
  if (await User.isEmailTaken(userBody.email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Email Already Takern");
  }
  return User.create(userBody);
};

const getUserByEmail = async (email) => {
  return User.findOne({ email });
};
export default { CreateUser, getUserByEmail };
