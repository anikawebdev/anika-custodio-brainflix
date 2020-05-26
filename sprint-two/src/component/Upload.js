import React from "react";
import Header from "./Header";
import UploadPreview from "./../asset/image/Upload-video-preview.jpg";

function Upload() {
  return (
    <section className="upload">
      <h2 className="upload__title">Upload Video</h2>
      <div className="upload-wrapper">
        <div className="upload__thumbnail-wrapper">
          <label className="upload__thumbnail-label">VIDEO THUMBNAIL</label>
          <img className="upload__thumbnail" src={UploadPreview} alt="" />
        </div>
        <div className="upload-form-wrapper">
          <form className="upload-form">
            <label
              for="upload-form__title"
              className="upload-video__input-title"
            >
              TITLE YOUR VIDEO
            </label>
            <textarea
              id="upload-form__title"
              class="upload-form__title"
              placeholder="Add a title to your video"
            ></textarea>
            <label
              for="upload-form__description"
              className="upload-video__input-description"
            >
              ADD A VIDEO DESCRIPTION
            </label>
            <textarea
              id="upload-form__description"
              class="upload-form__description"
              placeholder="Add a description to your video"
            ></textarea>
          </form>
        </div>
      </div>

      <div className="upload-buttons">
        <div class="upload-button-wrapper">
          <button class="button upload-button" type="submit">
            PUBLISH
          </button>
        </div>
        <div class="upload-cancel-button-wrapper">
          <button class="button upload-cancel-button" type="submit">
            CANCEL
          </button>
        </div>
      </div>
    </section>
  );
}

export default Upload;
