import { Todo } from "../models/index.js";

const GetAllTodos = async () => {
  return Todo.find();
};

const GetTodoByID = async (todoId) => {
  return Todo.findById(todoId);
};

const CreateTodo = async (todoBody) => {
  return Todo.create(todoBody);
};

const UpdateTodo = async (todoID, todoBody) => {
  return Todo.findByIdAndUpdate(todoID, todoBody);
};

const DeleteAllTodos = async () => {
  return Todo.deleteMany();
};
export default { GetAllTodos, GetTodoByID, CreateTodo, UpdateTodo, DeleteAllTodos };
