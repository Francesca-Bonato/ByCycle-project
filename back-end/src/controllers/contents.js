import { db } from "../db.js";

const getThreads = (req, res) => {
  const dataThreads = `
  SELECT threads.*, users.username AS author_username
  FROM threads
  INNER JOIN users ON threads.author_id = users.id`; // SQL query to fetch all threads

  db.query(dataThreads, (err, results) => {
    //if there is any error, send a 404 response and a "database not found" message, then return
    if (err) {
      res.status(404).json({ msg: "Could not retrieve data from database." });
      return;
    }
    res.status(200).json(results);
  });
};

const createThread = (req, res) => {
  const { title, description, author } = req.body;
  const newThread = {
    title,
    description,
    author_id: author,
  };

  // Insert the new thread into the database and retrieve the ID
  const { id } = db.query(
    "INSERT INTO threads SET ? RETURNING id",
    newThread,
    (error, results, fields) => {
      if (error) {
        console.error(error);
        res.status(400).json({ msg: "Failed to create thread. Please try again." });
        return;
      }
      // Respond with the thread data
      res.status(201).json({
        id,
        msg: "New thread successfully created!",
      });
    }
  );
};

const getReplies = (req, res) => {
  const { id } = req.params;
  const dataReplies = `
  SELECT thread_replies.*, users.username AS author_username
  FROM thread_replies
  INNER JOIN users ON thread_replies.author_id = users.id
  WHERE thread_replies.thread_id = ?`; // SQL query to fetch all replies

  db.query(dataReplies, id, (err, results) => {
    //if there is any error, send a 404 response and a "database not found" message, then return
    if (err) {
      res.status(404).json({ msg: "Could not retrieve data from database." });
      return;
    }
    res.status(200).json(results);
  });
};

const createReply = (req, res) => {
  const { id } = req.params;
  const { text, thread_id, author_id } = req.body;
  const newReply = {
    text,
    thread_id,
    author_id
  };

  // Insert the new reply into the database and retrieve the ID
  const { idReply } = db.query(
    "INSERT INTO thread_replies SET ? RETURNING id AS idReply",
    newReply,
    (error, results, fields) => {
      if (error) {
        console.error(error);
        res.status(400).json({ msg: "Failed to create reply. Please try again." });
        return;
      }
      // Respond with the thread data
      res.status(201).json({
        idReply,
        msg: "New reply successfully created!",
      });
    }
  );
};

export { getThreads, createThread, getReplies, createReply };
