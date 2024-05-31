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
            return res.status(500).json({
              msg: "Si è verificato un errore nella creazione del token",
            });
          }
          res.status(201).json({
            user: { ...user, password: undefined },
            token,
            msg: "Registrazione avvenuta con successo!",
          });
        });
      }
    );
  });
};

const login = async (req, res) => {
  const { username, password } = req.body;
  db.query(
    `SELECT * FROM users WHERE username=?`,
    [username],
    async (error, result) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ msg: "database error" });
      }
      const user = result[0];
      if (user && (await bcrypt.compare(password, user.password))) {
        const payload = {
          id: user.id,
          username,
        };
        const { SECRET_KEY = "" } = process.env;
        const token = jwt.sign(
          payload,
          SECRET_KEY,
          { expiresIn: "2d" },
          (err, token) => {
            if (err) {
              console.error(err);
              return res.status(500).json({
                msg: "Si è verificato un errore nella creazione del token",
              });
            }
            res.status(200).json({
              user,
              token,
              msg: "Login avvenuto con successo!",
            });
          }
        );
        console.log(token);

        db.query(
          `UPDATE users SET token=? WHERE id=?`,
          [token, user.id],
          (err, result) => {
            if (err) {
              res.status(500).json({ msg: `Error server` });
              console.error(err);
            }
            res.status(200).json({ id: user.id, username, token });
          }
        );
      } else {
        res.status(401).json({ msg: `Username or password not valid.` });
        console.error();
      }
    }
  );
};

export { register, login };
