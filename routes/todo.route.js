import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  return res.status(404).json("View all Todos");
});
router.post("/", (req, res) => {
  return res.status(200).json("Create Todos");
});
router.get("/:todo_id", (req, res) => {
  return res.status(200).json(`View ${req.params.todo_id} Todos`);
});
router.put("/:todo_id", (req, res) => {
  return res.status(200).json(`Update ${req.params.todo_id} Todos`);
});
router.delete("/:todo_id", (req, res) => {
  return res.status(200).json(`Delete ${req.params.todo_id} Todos`);
});
router.delete("/", (req, res) => {
  return res.status(200).json(`Delete all Todos`);
});

export default router;
