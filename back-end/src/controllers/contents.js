import { db } from "../db.js";

const getThreads = (req, res) => {
  const dataThreads = "SELECT * FROM threads"; // SQL query to fetch all users
  db.query(dataThreads, (err, results) => {
    //if there is any error, send a 404 response and a "database not found" message, then return
    if (err) {
      res.status(404).json({ msg: "Could not retrieve data from database." });
      return;
    }

    res.status(200).json(results);
  });
};

const createNewThread = (req, res) => {
  const { title, description, author } = req.body;
  const newThread = {
    title,
    description,
    author,
  };

  // Insert the new thread into the database and retrieve the ID
  const { id } = db.query(
    "INSERT INTO threads SET ? RETURNING id",
    newThread,
    (error, results, fields) => {
      if (error) {
        console.error(error);
        res.status(400).json({ msg: "Email or username already in use" });
        return;
      }
      // Respond with the thread data
      res.status(201).json({
        newThread,
        msg: "New thread successfully created!",
      });
    }
  );
};

export { getThreads, createNewThread };
