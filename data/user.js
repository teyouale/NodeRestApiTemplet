import bcrypt from "bcryptjs";

const MockUser = [
  {
    fullName: "test",
    username: "test",
    password: bcrypt.hashSync("test1234", 8),
    email: "test@gmail.com",
    phonenumber: Number(958565250),
  },
];

export { MockUser };
