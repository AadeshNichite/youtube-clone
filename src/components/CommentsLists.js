import React from "react";
import Comment from "./Comment";

const CommentsLists = ({ comments }) => {
  return comments.map((cmt, index) => (
    <div key={index}>
      <Comment data={cmt} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsLists comments={cmt.replies} />
      </div>
    </div>
  ));
};

export default CommentsLists;
