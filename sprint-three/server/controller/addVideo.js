const fs = require("fs");

const addVideo = (video) => {
  const videoData = fs.readFileSync("./model/videos.json");
  //const videoData = fs.readFileSync("./model/api.json");

  const mappedVidData = JSON.parse(videoData);
  /*
  const mappedVidData = JSON.parse(videoData).map((video) => {
    return {
      id: video.id,
      title: video.title,
      channel: video.channel,
      image: video.image,
    };
  });
  */

  //return mappedVidData;

  mappedVidData.push(video);

  fs.writeFileSync("./model/videos.json", JSON.stringify(mappedVidData));
  //fs.writeFileSync("./model/videos.json", JSON.stringify(mappedVidData));
};

module.exports = addVideo;
