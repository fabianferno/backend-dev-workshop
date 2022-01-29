const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

server.get("/workshop", (req, res) => {
  res.send("<h1>Hello Workshop</h1>");
});

server.listen(5000, () => {
  console.log("Server is running on port 5000");
});

process.on("SIGINT", () => {
  console.log("\nAPI says goodbye");
  process.exit();
});
