import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { db } from "../db.js";

// Function to get all users from the database
const getUsers = (req, res) => {
  const dataUsers = "SELECT * FROM users"; // SQL query to fetch all users
  db.query(dataUsers, (err, results) => {
    //if there is any error, send a 404 response and a "database not found" message, then return
    if (err) {
      res.status(404).json({ msg: "Could not retrieve data from database." });
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

  // Insert the new user into the database and retrieve the ID
  const { id } = db.query(
    "INSERT INTO users SET ? RETURNING id",
    user,
    (error, results, fields) => {
      if (error) {
        console.error(error);
        res.status(400).json({ msg: "Email or username already in use" });
        return;
      }

      const secretkey = process.env.SECRET_KEY;
      // Sign a JWT token for the user
      jwt.sign({ id }, secretkey, { expiresIn: "2d" }, (err, token) => {
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
        return res.status(500).json({ msg: "Could not retrieve data from database." });
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
            const profilePic = dbUser.profile_pic ? `http://localhost:4000/assets/${dbUser.profile_pic}` : `http://localhost:4000/assets/default-profile-pic.png`
            // Prepare the user data to be sent in the response
            const formattedBirthDate = dbUser.birth_date.toLocaleDateString();
            const formattedJoinDate = dbUser.join_date.toLocaleDateString();
            const user = {
              id: dbUser.id,
              birth_date: formattedBirthDate,
              join_date: formattedJoinDate,
              description: dbUser.description,
              email: dbUser.email,
              firstName: dbUser.firstname,
              lastName: dbUser.lastname,
              username: dbUser.username,
              profilePic: profilePic
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

        // La funzione login dovrebbe restituire solo il token JWT all'utente e non salvare il token nel database, in quanto non è necessario per l'autenticazione con JWT e può introdurre potenziali vulnerabilità.
        // Salvare il token nel database significa memorizzare informazioni sensibili. Se un malintenzionato accede al database, potrebbe rubare i token e impersonare gli utenti.
        // L'utente dovrà quindi memorizzare il token in modo sicuro (ad esempio, in un cookie HTTP protetto o nella memoria locale del browser con localStorage).

        // If the user is not found or the password does not match, respond with a 401 status
      } else {
        res.status(401).json({ msg: `Username or password not valid.` });
        console.error();
      }
    }
  );
};

const saveProfilePic = (req, res) => {

}

const updateUser = (req, res) => {
  const updatedUser = req.body;
  const id = req.params.id;
  const upToUser = "UPDATE users SET ? WHERE id=?"
  db.query(upToUser, [updatedUser, id], (error, result) => {
    if (error) {
      res.status(500).json({ msg: "Database error.", error })
      return
    }

    console.log(result.insertId)
    res.status(200).json({ msg: "User updated successfully!" })
  })
}

//Function to delete a user
const deleteUser = (req, res) => {
  const { username } = req.body;
  console.log(username)
  //const deleteByUsername = ;
  db.query(`DELETE FROM users WHERE username=?`, [username], (err, results) => {
    if (err) {
      res.status(500).json({ msg: "Something went wrong" });
      console.error(err);
      return;
    }
    console.log(results)
    res.status(202).json({ msg: "Account deleted successfully." });
  });
};

export { getUsers, getUserByUsername, register, login, deleteUser, updateUser };
