import React from "react";
import logo from "../asset/logo/Logo-brainflix.svg";
import Mohan from "../asset/image/Mohan-muruge.jpg";
import UploadIcon from "../asset/icon/SVG/Icon-upload.svg";

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img className="header__logo" src={logo} alt="logo" />
      </div>
      <div className="navbar-container">
        <div className="search-bar-container">
          <form className="search-bar">
            <input
              className="search-bar-input"
              type="text"
              name="search"
              placeholder="Search.."
            />
          </form>
        </div>
        <div className="upload-profile-container">
          <button className="button button-upload">
            <span>
              <img src={UploadIcon} />
            </span>
            UPLOAD
          </button>
          <div className="profile-picture-container">
            <img className="profile-picture" src={Mohan} alt="profile pic" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
