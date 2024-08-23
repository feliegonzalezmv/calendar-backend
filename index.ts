import express from "express";
import dotenv from "dotenv";
import router from "./routes/auth";

dotenv.config();

const app = express();

//Routes

//Public directory

app.use(express.static("public"));

app.use(express.json());

//TODO USERS
app.use("/api/auth", router);

//TODO CRUD EVENTS

app.listen(process.env.PORT, () => {
  console.log("server running on PORT:>> ", process.env.PORT);
});
