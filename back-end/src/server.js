import express from "express";
import morgan from "morgan";
import "express-async-errors";
import dotenv from "dotenv";
import cors from "cors";
import {
  register,
  login,
  getUsers,
  deleteUser,
  getUserByUsername,
  updateUser,
} from "./controllers/users.js";
import "./passport.js";
import {
  getThreads,
  createThread,
  getReplies,
  createReply,
  getArticles,
  getArticleByHighlight,
  getArticleById,
  getEvents,
  getEventByHighlight,
  getEventById
} from "./controllers/contents.js";
dotenv.config();

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(express.static('public'))
const port = process.env.LOCAL_PORT || 4000;

//gestione utenti
app.get("/users", getUsers);
app.get("/users/:username", getUserByUsername);

app.post("/register", register);
app.post("/login", login);

app.delete("/users/unsubscribe", deleteUser);

//gestione discussione community
app.get("/community", getThreads);
app.post("/community", createThread);
app.get("/community/replies/:id", getReplies);
app.post("/community/replies/:id", createReply);

//gestione articoli del blog
app.get("/blog", getArticles);
app.get("/blog/highlighted", getArticleByHighlight);
app.get("/blog/:id", getArticleById);

//gestione sezione eventi
app.get("/events", getEvents);
app.get("/events/highlighted", getEventByHighlight);
app.get("/events/:id", getEventById);

//Gestione sezione profilo
app.put("/profile/update/:id", updateUser)
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
