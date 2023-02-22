import React from "react";

const Comment = ({ data }) => {
  const { name, comment, replies } = data;

  return (
    <div className="flex flex-row p-2 shadow-sm bg-gray-100 rounded-lg my-3">
      <img
        className="w-11 h-11"
        alt="user"
        src="https://toppng.com/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png"
      />
      <div className="px-3">
        <div>{name}</div>
        <div>{comment}</div>
      </div>
    </div>
  );
};

export default Comment;
