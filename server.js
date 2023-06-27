import express from "express";
import mongoose from "mongoose";
import router from "./routes/index.js";
import ApiError from "./utils/ApiError.js";
import { env } from "./config/config.js";
import passport from "passport";
import jwtStrategy from "./config/passport.js";
import { errorHandler, errorConverter } from "./middlewares/error.js";
import { importData } from "./seeder.js";
import httpStatus from "http-status";
import cors from "cors";
import path from "path";

const app = express();
app.use(cors());

// Accessing the path module
const __dirname = path.resolve();

mongoose
  .connect(env.mongoose.url, env.mongoose.options)
  .then(() => {
    importData();
  })
  .catch((e) => console.log("Error Occured ", e));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// jwt authentication
app.use(passport.initialize());

passport.use("jwt", jwtStrategy);

app.get("/", (req, res) => {
  res.json("Hello from Simple Server");
});

app.use("/api/v1", router);

app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, "Not Found"));
});

app.listen(env.PORT, () => console.log(`Server is Running on Port ${env.PORT}`));
