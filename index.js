const express = require("express");

const server = express();
server.use(express.json());

const shouts = [];

server.get("/", (req, res) => {
  res.status(200).json({ hello: "Node 22" });
});

server.post("/shouts", (req, res) => {
  shouts.push(req.body);

  res.status(201).json(shouts);
});

// for heroku we need a dynamic port
// we can read the PORT value added by heroku to the enviroment
const port = process.env.PORT || 8000;
server.listen(port, () => {
  console.log(`\n server running on ${port}`);
});
