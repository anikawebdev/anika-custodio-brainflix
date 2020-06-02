const fs = require("fs");

const getMainVideo = (id) => {
  //const videoData = fs.readFileSync("./model/api.json");
  const videoData = fs.readFileSync("./model/videos.json");

  const filteredvideoData = JSON.parse(videoData).find(
    (video) => video.id === id
  );
  return filteredvideoData;
};

module.exports = getMainVideo;
