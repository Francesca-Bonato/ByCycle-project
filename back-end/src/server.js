import express from "express";
import morgan from "morgan";
import "express-async-errors";
import dotenv from "dotenv";
import cors from "cors";
import { register, login } from "./controllers/controllers.js";
dotenv.config();

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 4000;

app.post("/register", register);
app.post("/login", login);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
