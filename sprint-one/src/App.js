import React from "react";
import Header from "./component/Header";
import MainVideo from "./component/MainVideo";
import MainVideoInfo from "./component/MainVideoInfo";
import MainVideoDescription from "./component/MainVideoDescription";
import Comment from "./component/Comment";
import NextVideo from "./component/NextVideo";
import { uuid } from "uuidv4";
import "./style/App.css";
import "./style/App.scss";

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
  };

  render() {
    return (
      <div className="App">
        <Header />
        <MainVideo />
        <Comment commentHistory={this.state.commentHistory} />
        <NextVideo />
      </div>
    );
  }
}
export default App;
