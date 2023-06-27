import express from "express";
import { todoContoller } from "../controllers/index.js";

const router = express.Router();

router.get("/", todoContoller.AllTodos);
router.get("/:todo_id", todoContoller.SingleTodos);
router.post("/", todoContoller.CreateTodo);
router.put("/:todo_id", todoContoller.UpdateTodo);
router.delete("/", todoContoller.DeleteTodos);

router.delete("/:todo_id", (req, res) => {
  return res.status(200).json(`Delete ${req.params.todo_id} Todos`);
});

export default router;
