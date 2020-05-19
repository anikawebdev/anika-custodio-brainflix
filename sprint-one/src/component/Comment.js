import React from "react";
import { uuid } from "uuidv4";

function Comment(props) {
  const commentList = props.commentHistory.map((comment) => {
    return (
      <li className="comment-history__item" key={uuid()}>
        <div className="grey-circle-wrapper">
          <div className="grey-circle"></div>
        </div>

        <div className="next-to-grey-circle">
          <div className="span-wrapper">
            <span className="comment-history__name">{comment.name}</span>
            <span className="comment-history__date">{comment.date}</span>
          </div>
          <div className="comment-history__comment">{comment.comment}</div>
        </div>
      </li>
    );
  });
  return <ul className="comment-history__list">{commentList}</ul>;
}

export default Comment;
