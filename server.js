import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (_, res) => {
  res.send("Server is up and running 🌪️");
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
