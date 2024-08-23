import express from "express";

const app = express();

//Routes

app.get("/", (req, res) => {
  res.json({
    ok: true,
  });
});

app.listen(4000, () => {
  console.log("server running on PORT:>> ", 4000);
});
