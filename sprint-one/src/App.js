import React from "react";
import Header from "./component/Header";
import MainVideo from "./component/MainVideo";
import Comment from "./component/Comment";
import NextVideo from "./component/NextVideo";
import { uuid } from "uuidv4";
import "./style/App.css";
import CommentPhoto from "./asset/image/Mohan-muruge.jpg";

class App extends React.Component {
  state = {
    commentHistory: [
      {
        name: "Theodore Duncan",
        comment:
          "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
        date: "11/15/2018",
      },
      {
        name: "Gary Wong",
        comment:
          "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
        date: "12/12/2018",
      },
      {
        name: "Michael Lyons",
        comment:
          "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
        date: "12/18/2018",
      },
    ],
    videoList: [
      {
        title: "BMX Rampage: 2018 Highlights",
        author: "By Red Cow",
        poster: `./asset/image/video-list-0.jpg`,
        media: `./video/Brainstation-Sample-Video.mp4`,
        date: "12/18/2018",
        seen: "1,001,023",
        heart: "110,985",
        description:
          "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
      },
      {
        title: "Become A Travel Pro In One Easy Lesson...",
        author: "Scotty Cranmer",
        poster: `./asset/image/video-list-1.jpg`,
        media: "./video/Brainstation-Sample-Video.mp4",
        date: "12/18/2018",
        seen: "1,001,023",
        heart: "110,985",
        description:
          "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
      },
      {
        title: "Les Houches The Hidden Gem Of The...",
        author: "Scotty Cranmer",
        poster: `./asset/image/video-list-2.jpg`,
        media: "./video/Brainstation-Sample-Video.mp4",
        date: "12/18/2018",
        seen: "1,001,023",
        heart: "110,985",
        description:
          "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
      },
      {
        title: "Travel Health Useful Medical Information...",
        author: "Scotty Cranmer",
        poster: `./asset/image/video-list-3.jpg`,
        media: "./video/Brainstation-Sample-Video.mp4",
        date: "12/18/2018",
        seen: "1,001,023",
        heart: "110,985",
        description:
          "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
      },
      {
        title: "Cheap Airline Tickets Great Ways To Save",
        author: "Emily Harper",
        poster: `./asset/image/video-list-4.jpg`,
        media: "./video/Brainstation-Sample-Video.mp4",
        date: "12/18/2018",
        seen: "1,001,023",
        heart: "110,985",
        description:
          "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
      },
      {
        title: "Take A Romantic Break In A Boutique Hotel",
        author: "Ethan Owen",
        poster: `./asset/image/video-list-5.jpg`,
        media: "./video/Brainstation-Sample-Video.mp4",
        date: "12/18/2018",
        seen: "1,001,023",
        heart: "110,985",
        description:
          "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
      },
      {
        title: "Choose The Perfect Accommodations",
        author: "Lydia Perez",
        poster: `./asset/image/video-list-6.jpg`,
        media: "./video/Brainstation-Sample-Video.mp4",
        date: "12/18/2018",
        seen: "1,001,023",
        heart: "110,985",
        description:
          "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
      },
      {
        title: "Cruising Destination Ideas",
        author: "Timothy Austin",
        poster: `./asset/image/video-list-7.jpg`,
        media: "./video/Brainstation-Sample-Video.mp4",
        date: "12/18/2018",
        seen: "1,001,023",
        heart: "110,985",
        description:
          "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
      },
      {
        title: "Train Travel On Track For Safety",
        author: "Scotty Cranmer",
        poster: `./asset/image/video-list-8.jpg`,
        media: "./video/Brainstation-Sample-Video.mp4",
        date: "12/18/2018",
        seen: "1,001,023",
        heart: "110,985",
        description:
          "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
      },
    ],
  };

  render() {
    return (
      <div className="App">
        <Header />
        <MainVideo videoList={this.state.videoList} />
        <section className="user-input">
          <h3>3 Comments</h3>
          <div class="comments__user-input">
            <div className="comment-photo-container">
              <img src={CommentPhoto} alt="" />
            </div>
            <div className="form-container">
              <form class="comments__form">
                <div class="form__comment-input">
                  <label for="form__comment">JOIN THE CONVERSATION</label>
                  <textarea
                    id="form__comment"
                    class="form__comment"
                    placeholder="Add a new comment"
                  ></textarea>
                </div>
                <div class="button-wrapper">
                  <button
                    id="form__button"
                    class="form__button button"
                    type="submit"
                  >
                    COMMENT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
        <section className="comment-history">
          <Comment commentHistory={this.state.commentHistory} />
        </section>
        <section className="next-video">
          <h4>NEXT VIDEO</h4>
          <NextVideo videoList={this.state.videoList} />
        </section>
      </div>
    );
  }
}
export default App;
