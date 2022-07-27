const { resolveSoa } = require("dns");
const express = require("express");
const { start } = require("repl");
const path = require ('path')

const PORT = process.env.PORT || 3001;

const app = express();
const path=require('path')

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get("/api", (req, res) => {
  res.sendFile(path.join(__dirname+'./index.html'))
});