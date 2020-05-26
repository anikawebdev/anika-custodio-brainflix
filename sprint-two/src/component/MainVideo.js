import React from "react";
import PlayButton from "../asset/icon/SVG/Icon-play.svg";
import FullScreenButton from "../asset/icon/SVG/Icon-fullscreen.svg";
import VolumeButton from "../asset/icon/SVG/Icon-volume.svg";

const API_KEY = `be98f7ba-186f-406d-892c-9e08cdb0dfd6`;

function MainVideo(props) {
  let videoPoster = props.mainVideo.image;
  let video = props.mainVideo.video;
  let duration = props.mainVideo.duration;

  return (
    <section>
      <div className="main-video-container">
        <video
          className="main-video__video"
          poster={videoPoster}
          src={`${video}?api_key=${API_KEY}`}
        ></video>
        <div className="button-video-container">
          <button className="button button-play">
            <img src={PlayButton} />
          </button>
          <button className="button button-video-time">
            <div></div>
            <div></div>
          </button>
          <button className="button button-fullscreen-volume">
            <img src={FullScreenButton} alt="" />
            <img src={VolumeButton} alt="" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default MainVideo;
