import express from "express";
import morgan, { token } from "morgan";
import "express-async-errors";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import cors from "cors";
import { db } from "./db.js";
dotenv.config();

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 4000;

app.post("/register", async (req, res) => {
  const dataUser = req.body;
  console.log(dataUser);
  const hashPassword = await bcrypt.hash(dataUser.password, 10);
  const roleId = 2;
  const user = {
    username: dataUser.username,
    email: dataUser.usermail,
    password: hashPassword,
    role_id: roleId,
  };

  db.query("INSERT INTO users SET ?", user, (error, results, fields) => {
    if (error) {
      console.error(error);
      res.status(500).json({ msg: "database error" });
      return;
    }

    res.status(201).json({
      user: user,
      token: "etCWBp8lziJKOUDhCVXzKQv8agbPeLRE0Sr66oqMk8lKHb3jaR9Yb6DH7CLqbQgi",
      msg: "Registrazione avvenuta con successo!",
    });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
