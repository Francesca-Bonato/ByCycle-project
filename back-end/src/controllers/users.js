import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { db } from "../db.js";

// Function to get all users from the database
const getUsers = (req, res) => {
  const dataUsers = "SELECT * FROM users"; // SQL query to fetch all users
  db.query(dataUsers, (err, results) => {
    //if there is any error, send a 404 response and a "database not found" message, then return
    if (err) {
      res.status(404).json({ msg: "Database not found." });
      return;
    }

    res.status(200).json(results);
  });
};

// Function to get a user by their username from the database
const getUserByUsername = (req, res) => {
  const { username } = req.params; // Get the username from the request parameters
  const user = "SELECT * FROM users WHERE username=?"; // SQL query to fetch a user by username
  db.query(user, username, (err, results) => {
    //if there is any error, send a 404 response and a "user not found" message, then return
    if (err) {
      res.status(404).json({ msg: "User not found!" });
      return;
    }

    res.status(200).json(results);
  });
};

// Function to register a new user
const register = async (req, res) => {
  const dataUser = req.body; // Get the user data from the request body
  console.log(dataUser); // Log the user data for debugging purposes (optional)
  const hashPassword = await bcrypt.hash(dataUser.password, 10); // Hash the password
  const roleId = 2; // Assign a role ID to the user (2 = "user")
  const user = {
    username: dataUser.username,
    email: dataUser.usermail,
    birth_date: dataUser.birthdate,
    password: hashPassword,
    role_id: roleId,
  };

  // Insert the new user into the database
  db.query("INSERT INTO users SET ?", user, (error, results, fields) => {
    if (error) {
      console.error(error);
      res.status(500).json({ msg: "Database error" });
      return;
    }
    // Retrieve the ID of the newly inserted user
    db.query(
      "SELECT id FROM users WHERE email=?",
      user.email,
      (error, result, field) => {
        if (error) {
          console.error(error);
          res.status(500).json({ msg: "Database error" });
          return;
        }
        // Get the user's ID
        const userId = result.insertId;
        const secretkey = process.env.SECRET_KEY;

        // Sign a JWT token for the user
        jwt.sign({ userId }, secretkey, { expiresIn: "2d" }, (err, token) => {
          if (err) {
            console.error(err);
            return res.status(500).json({
              msg: "An error has occured during token signature",
            });
          }

          // Respond with the user data (excluding the password) and the token
          res.status(201).json({
            user: { ...user, password: undefined },
            token,
            msg: "Registration successful!",
          });
        });
      }
    );
  });
};

// Function to login a user
const login = async (req, res) => {
  const { usermail, password } = req.body; // Get the user's email and password from the request body

  // Query to find the user by email
  db.query(
    `SELECT * FROM users WHERE email=?`,
    [usermail],
    async (error, result) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ msg: "Database error" });
      }

      const dbUser = result[0]; // Get the user data from the query result

      // Check if the user exists and the password matches
      if (dbUser && (await bcrypt.compare(password, dbUser.password))) {
        const payload = {
          id: dbUser.id,
          email: dbUser.email,
        };
        const { SECRET_KEY = "" } = process.env;

        // Sign a JWT token for the user
        const token = jwt.sign(
          payload,
          SECRET_KEY,
          { expiresIn: "2d" },
          (err, token) => {
            if (err) {
              console.error(err);
              return res.status(500).json({
                msg: "An error has occured during token signature",
              });
            }

            // Prepare the user data to be sent in the response
            const user = {
              id: dbUser.id,
              birth_date: dbUser.birth_date,
              description: dbUser.description,
              email: dbUser.email,
              firstName: dbUser.firstname,
              lastName: dbUser.lastname,
              username: dbUser.username,
              profilePic:
                "http://localhost:4000/users/assets/images/registration-image.jpg",
            };

            // Respond with the user data and the token
            res.status(200).json({
              user,
              token,
              msg: "Login procedure successful!",
            });
          }
        );
        console.log(token);

        // db.query(
        //   `UPDATE users SET token=? WHERE id=?`,
        //   [token, user.id],
        //   (err, result) => {
        //     if (err) {
        //       res.status(500).json({ msg: `Error server` });
        //       console.error(err);
        //     }
        //     res.status(200).json({ id: user.id, usermail, token });
        //   }
        // );

      // If the user is not found or the password does not match, respond with a 401 status
      } else {
        res.status(401).json({ msg: `Username or password not valid.` });
        console.error();
      }
    }
  );
};

//Function to delete a user
const deleteUser = (req, res) => {
  const user = req.params.id;
  const deleteById = "DELETE FROM users WHERE id=?";
  db.query(deleteById, user, (err, results) => {
    if (err) {
      res.status(500).json({ msg: "Something went wrong" });
      console.error(err);
      return;
    }

    res.status(202).json({ msg: "User deleted successfully." });
  });
};

export { getUsers, getUserByUsername, register, login, deleteUser };
