import React, { Component } from "react";
import Eye from "../asset/icon/SVG/Icon-views.svg";
import Heart from "../asset/icon/SVG/Icon-likes.svg";

class MainVideoInfo extends Component {
  render() {
    let title = this.props.mainVideo.title;
    let channel = this.props.mainVideo.channel;
    let timestamp = formatDate(this.props.mainVideo.timestamp);
    let likes = this.props.mainVideo.likes;
    let views = this.props.mainVideo.views;
    let description = this.props.mainVideo.description;

    return (
      <section className="main-video-info">
        <div className="main-video__info">
          <h2>{title}</h2>
          <div className="wrapper">
            <h3>{channel}</h3>
            <span className="main-video__date">{timestamp}</span>
            <div className="main-video__extra-info">
              <div className="main-video__seen">
                <img src={Eye} alt="" />
                {views}
              </div>
              <div className="main-video__heart">
                <img src={Heart} alt="" />
                {likes}
              </div>
            </div>
          </div>
        </div>
        <div className="main-video__extended-info">{description}</div>
      </section>
    );

    // Formats the date MM/DD/YYYY
    function formatDate(date) {
      console.log(date);
      const d = new Date(date);
      console.log(d);
      const formattedDate = `${
        d.getMonth() + 1
      }/${d.getDate()}/${d.getFullYear()}`;
      return formattedDate;
    }
  }
}

export default MainVideoInfo;
