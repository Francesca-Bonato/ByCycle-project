import { db } from "../db.js";

//controllers per la sezione community
const getThreads = (req, res) => {
  const threadsData = `
  SELECT threads.*, users.username AS author_username
  FROM threads
  INNER JOIN users ON threads.author_id = users.id`; // SQL query to fetch all threads

  db.query(threadsData, (err, results) => {
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
        res
          .status(400)
          .json({ msg: "Failed to create thread. Please try again." });
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
  const repliesData = `
  SELECT thread_replies.*, users.username AS author_username
  FROM thread_replies
  INNER JOIN users ON thread_replies.author_id = users.id
  WHERE thread_replies.thread_id = ?`; // SQL query to fetch all replies

  db.query(repliesData, id, (err, results) => {
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
    author_id,
  };

  // Insert the new reply into the database and retrieve the ID
  const { idReply } = db.query(
    "INSERT INTO thread_replies SET ? RETURNING id AS idReply",
    newReply,
    (error, results, fields) => {
      if (error) {
        console.error(error);
        res
          .status(400)
          .json({ msg: "Failed to create reply. Please try again." });
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

//controllers per la sezione blog
const getArticles = (req, res) => {
  // Estrae i parametri di query per pagina e limite, con valori predefiniti
  const page = parseInt(req.query.page) || 1;
  const limit = 6;
  const offset = (page - 1) * limit;

  // Query SQL per ottenere gli articoli con paginazione
  const blogData = `SELECT * FROM blog_posts LIMIT ${limit} OFFSET ${offset}`;
  const countQuery = `SELECT COUNT(*) as total FROM blog_posts`;

  // Esegue la query per ottenere gli articoli
  db.query(blogData, (err, results) => {
    if (err) {
      //if there is any error, send a 404 response and a "database not found" message, then return
      res
        .status(404)
        .json({ msg: `Could not retrieve data from database: ${err.message}` });
      return;
    }

    // Esegue la query per ottenere il numero totale di articoli
    db.query(countQuery, (countErr, countResults) => {
      if (countErr) {
        // In caso di errore, invia una risposta 404 e un messaggio di errore
        res.status(404).json({
          msg: `Could not retrieve data from database: ${err.message}`,
        });
        return;
      }
      const totalArticles = countResults[0].total;
      const totalPages = Math.ceil(totalArticles / limit);

      // Invia i risultati con il numero totale di pagine
      res.status(200).json({
        articles: results,
        totalPages: totalPages,
      });
    });
  });
};

const getArticleByHighlight = (req, res) => {
  const highlightArticle = "SELECT * FROM blog_posts WHERE highlight=?"; // SQL query to fetch a user by username
  db.query(highlightArticle, true, (err, results) => {
    //if there is any error, send a 404 response and a "article not found" message, then return
    if (err) {
      res.status(404).json({ msg: "Article not found!" });
      return;
    }

    res.status(200).json(results);
  });
};

const getArticleById = (req, res) => {
  const { id } = req.params;
  const article = "SELECT * FROM blog_posts WHERE id=?"; // SQL query to fetch a user by username
  db.query(article, id, (err, results) => {
    //if there is any error, send a 404 response and a "article not found" message, then return
    if (err) {
      res.status(404).json({ msg: "Article not found!" });
      return;
    }

    res.status(200).json(results);
  });
};

//controllers per la sezione eventi
const getEvents = (req, res) => {
  const eventsData = "SELECT * FROM events"; // SQL query to fetch all events
  db.query(eventsData, (err, results) => {
    //if there is any error, send a 404 response and a "database not found" message, then return
    if (err) {
      res.status(404).json({ msg: "Could not retrieve data from database." });
      return;
    }

    res.status(200).json(results);
  });
};

const getEventByHighlight = (req, res) => {
  const highlightEvent = "SELECT * FROM events WHERE highlight=?";
  db.query(highlightEvent, true, (err, results) => {
    //if there is any error, send a 404 response and a "database not found" message, then return
    if (err) {
      res
        .status(404)
        .json({ msg: "Could not retrieve data from the database" });
      return;
    }
    res.status(200).json(results);
  });
};

const getEventById = (req, res) => {
  const { id } = req.params;
  const eventData = "SELECT * FROM events WHERE id=?"; // SQL query to fetch a user by username
  db.query(eventData, id, (err, results) => {
    //if there is any error, send a 404 response and a "article not found" message, then return
    if (err) {
      res.status(404).json({ msg: "Could not retrieve data from database." });
      return;
    }

    res.status(200).json(results);
  });
};

export {
  getThreads,
  createThread,
  getReplies,
  createReply,
  getArticles,
  getArticleByHighlight,
  getArticleById,
  getEvents,
  getEventByHighlight,
  getEventById,
};
