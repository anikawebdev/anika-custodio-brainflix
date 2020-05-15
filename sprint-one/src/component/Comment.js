import React from "react";
import { uuid } from "uuidv4";

function Comment(props) {
  const commentList = props.commentHistory.map((comment) => {
    return (
      <ul className="comment-history__item">
        <li className="comment-history__name">{comment.name}</li>
        <li className="comment-history__date">{comment.date}</li>
        <li className="comment-history__comment" key={uuid()}>
          {comment.comment}
        </li>
      </ul>
    );
  });
  console.log(commentList);
  return <section className="comment-history">{commentList}</section>;
}

export default Comment;
