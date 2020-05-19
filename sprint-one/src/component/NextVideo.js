import React from "react";

function NextVideo(props) {
  const videoImageList = props.videoList
    .filter((video, index) => {
      return index !== 0;
    })
    .map((video) => {
      return (
        <li className="next-video__item">
          <div className="next-video__image-container">
            <img className="next-video__image" src={video.poster} alt="" />
          </div>
          <div className="next-video__span-container">
            <span className="next-video__title">{video.title}</span>
            <span className="next-video__author">{video.author}</span>
          </div>
        </li>
      );
    });
  return <ul className="next-video__list">{videoImageList}</ul>;
}

export default NextVideo;
