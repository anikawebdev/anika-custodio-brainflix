// Create server
const express = require("express");
const server = express();
const cors = require("cors");
const { uuid } = require("uuidv4");

const getMainVideo = require("./controller/getMainVideo");
const getVideoList = require("./controller/getVideoList");
const addVideo = require("./controller/addVideo");

// Middleware
server.use(express.json());

server.use(cors());

server.use(function (request, response, next) {
  console.log("Logging...");
  next();
});

server.use(function (request, response, next) {
  console.log("Authenticating...");
  next();
});

server.get("/", (request, response) => {
  response.send([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

// Working as per postman
server.get("/videos", (request, response) => {
  //response.send(videos);
  response.json(getVideoList());
});

// Working as per postman
server.get("/videos/:id", (request, response) => {
  response.json(getMainVideo(request.params.id));
});

// Working as per postman
server.post("/videos", (request, response) => {
  const video = {
    // id: videos.length + 1,
    id: uuid(),
    title: request.body.title,
    channel: request.body.channel,
    // OR name: request.data.name???
    image: request.body.image,
    timestamp: Date.now(),
  };
  // videos.push(video);
  // response.send(video);
  //getVideoList().push(video);
  addVideo(video);
  response.json(video);
});

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Listening on port ${port}...`));
