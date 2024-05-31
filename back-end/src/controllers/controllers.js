import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { db } from "../db.js";

const register = async (req, res) => {
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
    //l'utente è stato inserito correttamente e prendo il suo id:
    db.query(
      "SELECT id FROM users WHERE email=?",
      user.email,
      (error, result, field) => {
        if (error) {
          console.error(error);
          res.status(500).json({ msg: "database error" });
          return;
        }
        //l'id è stato preso correttamente:
        const userId = result.insertId;
        const secretkey = process.env.SECRET_KEY;
        jwt.sign({ userId }, secretkey, { expiresIn: "2d" }, (err, token) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ msg: "Si è verificato un errore nella creazione del token" });
          }
          res.status(201).json({
            user,
            token,
            msg: "Registrazione avvenuta con successo!",
          });
        });
      }
    );
  });
};

const login = async (req, res) => {
    
};

export { register, login };
