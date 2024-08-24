import express from "express";
import dotenv from "dotenv";
import auhRouter from "./routes/auth";
import eventRouter from "./routes/events";
import { dbConnection } from "./db/config";
import cors from "cors";

dotenv.config();

const app = express();

dbConnection();

app.use(cors());

app.use(express.static("public"));

app.use(express.json());

app.use("/api/auth", auhRouter);
app.use("/api/events", eventRouter);

app.listen(process.env.PORT, () => {
  console.log("server running on PORT:>> ", process.env.PORT);
});
