import express from "express";
import authRoutes from "./auth.route.js";
import todosRoutes from "./todo.route.js";

const router = express.Router();

router.get("/ping", (req, res) => {
  res.json("Connected");
});
router.use("/auth", authRoutes);
router.use("/todos", todosRoutes);
export default router;
