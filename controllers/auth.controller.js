import { authService, userService, tokenService } from "../services/index.js";
import httpStatus from "http-status";

const register = async (req, res) => {
  const user = await userService.CreateUser(req.body);
  const tokens = await tokenService.generateAuthTokens(user);
  res.send({ user, tokens });
};
// With Emalil and Password
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await authService.loginUserWithEmailAndPassword(email, password);
    const tokens = await tokenService.generateAuthTokens(user);
    res.status(httpStatus.OK).send({ user, tokens });
  } catch (e) {
    res.status(e.statusCode).json(e);
  }
};

export default { register, login };
