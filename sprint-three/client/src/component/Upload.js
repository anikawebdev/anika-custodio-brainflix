//import React from "react";
import React, { Component } from "react";
//import Header from "./Header";
import axios from "axios";
import UploadPreview from "./../asset/image/Upload-video-preview.jpg";
//import StateImage from "https://i.imgur.com/nGvKkjy.jpg";

class Upload extends Component {
  state = {
    title: "",
    channel: "Anika Chanel",
    description: "",
    image: `https://i.imgur.com/nGvKkjy.jpg`,
  };

  handleTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleDescription = (event) => {
    this.setState({
      description: event.target.value,
    });
  };
  handlePublish = (event) => {
    axios
      .post(`http://localhost:3000/videos`, this.state)
      .then(console.log("posted"));
  };

  render() {
    return (
      <section className="upload">
        <h2 className="upload__title">Upload Video</h2>
        <div className="upload-wrapper">
          <div className="upload__thumbnail-wrapper">
            <label className="upload__thumbnail-label">VIDEO THUMBNAIL</label>
            <img className="upload__thumbnail" src={UploadPreview} alt="" />
          </div>
          <div className="upload-form-wrapper">
            <form className="upload-form" onSubmit={this.handlePublish}>
              <label
                htmlFor="upload-form__title"
                className="upload-video__input-title"
              >
                TITLE YOUR VIDEO
              </label>
              <textarea
                id="upload-form__title"
                className="upload-form__title"
                placeholder="Add a title to your video"
                onChange={this.handleTitle}
              ></textarea>
              <label
                htmlFor="upload-form__description"
                className="upload-video__input-description"
              >
                ADD A VIDEO DESCRIPTION
              </label>
              <textarea
                id="upload-form__description"
                className="upload-form__description"
                placeholder="Add a description to your video"
                onChange={this.handleDescription}
              ></textarea>

              <div className="upload-buttons">
                <div className="upload-button-wrapper">
                  <button className="button upload-button" type="submit">
                    PUBLISH
                  </button>
                </div>
                <div className="upload-cancel-button-wrapper">
                  <button className="button upload-cancel-button" type="submit">
                    CANCEL
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Upload;
