import React from "react";
import { uuid } from "uuidv4";
import SeenIcon from "../asset/icon/SVG/Icon-views.svg";
import HeartIcon from "../asset/icon/SVG/Icon-likes.svg";

function MainVideoInfo(props) {
  //   let bannerVideoPoster = props.videoList[0].poster;
  //   let bannerVideo = props.videoList[0].media;
  let bannerVideoTitle = props.videoList[0].title;
  let bannerVideoAuthor = props.videoList[0].author;
  let bannerVideoDate = props.videoList[0].date;
  let bannerVideoSeen = props.videoList[0].seen;
  let bannerVideoHeart = props.videoList[0].heart;
  let bannerVideoDescription = props.videoList[0].description;

  return (
    <section className="main-video-info">
      <div className="main-video__info">
        <h2>{bannerVideoTitle}</h2>
        <div className="main-video-inner-wrapper">
          <h3>{bannerVideoAuthor}</h3>
          <span className="main-video__date">{bannerVideoDate}</span>
          <div className="main-video__extra-info">
            <div className="main-video__seen">
              <img src={SeenIcon} alt="" />
              {bannerVideoSeen}
            </div>
            <div className="main-video__heart">
              <img src={HeartIcon} alt="" />

              {bannerVideoHeart}
            </div>
          </div>
        </div>
      </div>
      <div className="main-video__extended-info">{bannerVideoDescription}</div>
    </section>
  );
}

export default MainVideoInfo;
