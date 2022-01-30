// Import (Require) the necessary modules
const express = require("express");
const { PrismaClient } = require("@prisma/client");

// Initialize the app and mopdules
const server = express();
const prisma = new PrismaClient();

// Setting the middleware to parse the body of the request to json
server.use(express.json());

// API Base route
server.get("/", (req, res) => {
  res.send("<h1>Welcome to API. You are at the base url</h1>");
});

// GET /cars
server.get("/cars", (req, res) => {
  res.send({
    cars: [
      {
        make: "Ford",
        model: "Mustang",
        year: "1969",
      },
      {
        make: "Chevy",
        model: "Camaro",
        year: "1969",
      },
    ],
  });
});

// POST /users
server.post("/users", async (req, res) => {
  try {
    const { name, phone } = req.body;

    const response = await prisma.users.create({
      data: {
        name,
        phone,
      },
    });

    res.send(response);
  } catch (error) {
    console.log(error);
    res.status(500).send("error");
  }
});

// Start the server
server.listen(5000, () => {
  console.log("Server is running on port 5000\n http://localhost:5000");
});

// Kill the process
process.on("SIGINT", () => {
  console.log("\nAPI says goodbye cruel world ;/");
  prisma.$disconnect();
  process.exit();
});
