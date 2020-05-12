// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = (props) => {
  const [comments, addComments] = useState(props.comments);
  function submitComment(comment) {
    addComments([...props.comments, comment]);
  }

  return (
    <div>
      {comments.map((comment, i) => (
        <Comment comment={comment} key={i} />
      ))}
      <CommentInput submitComment={submitComment} />
    </div>
  );
};

export default CommentSection;
