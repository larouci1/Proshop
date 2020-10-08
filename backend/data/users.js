import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Moh Lar",
    email: "Moh@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Dil lar",
    email: "Dil@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
