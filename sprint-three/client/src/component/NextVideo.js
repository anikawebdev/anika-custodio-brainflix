import React from "react";
import { Link } from "react-router-dom";

function NextVideo({ videoList, currentId, match }) {
  const nextVideos = videoList
    .filter((video, index) => {
      return video.id !== currentId;
    })
    .map((video) => (
      <li className="next-video__item" key={video.id}>
        <div className="next-video__image-container">
          <Link to={`${match.url}/${video.id}`}>
            <img
              className="next-video__image"
              src={video.image}
              alt={video.title}
              //className="poster"
            />
          </Link>
        </div>

        <div className="next-video__span-container">
          <span className="next-video__title">{video.title}</span>
          <span className="next-video__author">{video.channel}</span>
        </div>
      </li>
    ));

  return <ul className="next-video__list">{nextVideos}</ul>;
  // <>
  //

  // </>;
}

export default NextVideo;
