import { todoService } from "../services/index.js";

const AllTodos = async (req, res) => {
  const todos = await todoService.GetAllTodos();
  // console.log(todos);
  return res.status(200).json({ todos });
};

const SingleTodos = async (req, res) => {
  const todoId = req.params.todo_id;
  const todo = await todoService.GetTodoByID(todoId);
  return res.status(200).json({ todo });
};

const CreateTodo = async (req, res) => {
  const todo = await todoService.CreateTodo(req.body);
  return res.status(200).json({ todo });
};

const UpdateTodo = async (req, res) => {
  const todoId = req.params.todo_id;

  const todo = await todoService.GetTodoByID(todoId);

  if (todo === null) {
    res.status(200).json({ msg: "No Todo Id found" });
  }
  const updatedTodo = await todoService.UpdateTodo(todoId, req.body);
  return res.status(200).json({ updatedTodo });
};
const DeleteTodos = async (req, res) => {
  const deleteTodos = await todoService.DeleteAllTodos();
  const todos = await todoService.GetAllTodos();
  return res.status(200).json({ todos });
};
export default { AllTodos, SingleTodos, CreateTodo, UpdateTodo, DeleteTodos };
