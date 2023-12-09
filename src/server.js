const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello to all");
});

app.listen("8000", () => {
  console.log("Listening on port 8000");
});
