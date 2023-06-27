import express from "express";
import authRoutes from "./auth.route.js";

const router = express.Router();

router.get("/ping", (req, res) => {
  res.json("Connected");
});
router.use("/auth", authRoutes);

export default router;
