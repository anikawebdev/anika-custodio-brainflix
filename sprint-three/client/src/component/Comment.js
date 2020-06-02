import React from "react";
import { uuid } from "uuidv4";
import Photo from "../asset/image/Mohan-muruge.jpg";

function Comment(props) {
  let commentList =
    props.mainVideo.comments &&
    props.mainVideo.comments.map((comment) => {
      //PROBLEM
      //() => this.formatDate(this.state.mainVideo.comments.timestamp);
      let name = comment.name;
      let date = formatDate(comment.timestamp);

      return (
        <li className="comment-history__item" key={uuid()}>
          <div className="grey-circle-wrapper">
            <div className="grey-circle"></div>
          </div>

          <div className="next-to-grey-circle">
            <div className="span-wrapper">
              <span className="comment-history__name">{name}</span>
              <span className="comment-history__date">{date}</span>
            </div>
            <div className="comment-history__comment">{comment.comment}</div>
          </div>
        </li>
      );
    });

  // Formats the date MM/DD/YYYY
  function formatDate(date) {
    //console.log(date);
    const d = new Date(date);
    //console.log(d);
    const formattedDate = `${
      d.getMonth() + 1
    }/${d.getDate()}/${d.getFullYear()}`;
    return formattedDate;
  }

  return (
    <section className="user-input">
      <h3>3 Comments</h3>
      <div className="comments__user-input">
        <div className="comment-photo-container">
          <img src={Photo} alt="" />
        </div>
        <div className="form-container">
          <form className="comments__form">
            <div className="form__comment-input">
              <label htmlFor="form__comment">JOIN THE CONVERSATION</label>
              <textarea
                id="form__comment"
                className="form__comment"
                placeholder="Add a new comment"
              ></textarea>
            </div>
            <div className="button-wrapper">
              <button
                id="form__button"
                className="form__button button"
                type="submit"
              >
                COMMENT
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="comment-history-wrapper">
        <ul className="comment-history__list">{commentList}</ul>
      </div>
    </section>
  );
}

export default Comment;
