import { User, Todo } from "./models/index.js";
import { MockUser } from "./data/user.js";
import { MockTodos } from "./data/todo.js";

const importData = async () => {
  try {
    await User.deleteMany();
    await Todo.deleteMany();

    const createdUserUsers = await User.insertMany(MockUser);
    const createdTodos = await Todo.insertMany(MockTodos);
    console.log("Data Imported!");
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};
export { importData };
