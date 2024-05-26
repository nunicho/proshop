import bcrypt from 'bcryptjs'

const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: bcrypt.hashSync("12345", 20),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "admin@email.com",
    password: bcrypt.hashSync("12345", 20),
    isAdmin: false,
  },
  {
    name: "Jane Doe",
    email: "jane@email.com",
    password: bcrypt.hashSync("12345", 20),
    isAdmin: false,
  },
];

export default users