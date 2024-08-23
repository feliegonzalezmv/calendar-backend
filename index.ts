import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

//Routes

//Public directory

app.use(express.static("public"));
// app.get("/", (req, res) => {
//   res.json({
//     ok: true,
//   });
// });

app.listen(process.env.PORT, () => {
  console.log("server running on PORT:>> ", process.env.PORT);
});
