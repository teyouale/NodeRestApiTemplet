import { User } from "./models/index.js";
import { MockUser } from "./data/user.js";

const importData = async () => {
  try {
    await User.deleteMany();

    const createdUserUsers = await User.insertMany(MockUser);
    console.log("Data Imported!");
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};
export { importData };
