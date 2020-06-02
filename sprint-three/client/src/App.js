import React, { Component } from "react";
import axios from "axios";
import { Route, Redirect } from "react-router-dom";
import Header from "./component/Header";
import MainVideo from "./component/MainVideo";
import MainVideoInfo from "./component/MainVideoInfo";
import Comment from "./component/Comment";
import NextVideo from "./component/NextVideo";
import Upload from "./component/Upload";
import "./style/App.css";

//const API_KEY = `be98f7ba-186f-406d-892c-9e08cdb0dfd6`;
//const URL_Videos = `https://project-2-api.herokuapp.com/videos?api_key=${API_KEY}`;
const URL_Videos = `http://localhost:3000/videos`;

class App extends Component {
  state = {
    mainVideo: {},
    videoList: [],
    currentId: "",
  };

  componentDidMount() {
    // Get all videos
    axios.get(URL_Videos).then((response) => {
      this.setState(
        {
          videoList: response.data,
        },
        () => this.getVideoInfo(this.state.videoList[0].id)
      );
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.getVideoInfo(this.props.match.params.id);
    }
  }
  // Get info about the main video
  getVideoInfo = (videoId) => {
    console.log(videoId);
    //const URL_Main_Video = `https://project-2-api.herokuapp.com/videos/${videoId}?api_key=${API_KEY}`;
    const URL_Main_Video = `http://localhost:3000/videos/${videoId}`;
    console.log(URL_Main_Video);
    axios.get(URL_Main_Video).then((mainVideoResponse) => {
      this.setState({
        mainVideo: mainVideoResponse.data,

        currentId: mainVideoResponse.data.id,
      });
    });
  };

  render() {
    console.log(this.state.mainVideo);
    return (
      <div>
        <Header />
        <Redirect from="/" to="/videos" />
        <Route path="/upload" component={Upload} />
        <Route
          path="/videos"
          render={(props) => {
            return <MainVideo mainVideo={this.state.mainVideo} />;
          }}
        />
        <section className="section-wrapper">
          <div className="section-left">
            <Route
              path="/videos"
              render={(props) => {
                return (
                  <>
                    <MainVideoInfo mainVideo={this.state.mainVideo} />
                    <Comment mainVideo={this.state.mainVideo} />
                  </>
                );
              }}
            />
          </div>
          <aside className="section-right">
            <Route
              path="/videos"
              render={(props) => (
                <React.Fragment>
                  <h4>NEXT VIDEO</h4>
                  <NextVideo
                    videoList={this.state.videoList}
                    currentId={this.state.currentId}
                    {...props}
                  />
                </React.Fragment>
              )}
            />
          </aside>
        </section>
      </div>
    );
  }
}

export default App;
