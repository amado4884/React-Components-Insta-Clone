// You do not need to do anything in this file
import React, { useState } from "react";

const CommentInput = (props) => {
  const [comment, updateComment] = useState("");
  return (
    <form
      className="comment-form"
      onSubmit={(e) => {
        e.preventDefault();
        props.submitComment({ username: "amado4884", text: comment });
        updateComment("");
      }}
    >
      <input
        type="text"
        value={comment}
        placeholder="Add comment... "
        onChange={(e) => updateComment(e.target.value)}
      />
    </form>
  );
};

export default CommentInput;
