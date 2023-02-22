import React from "react";
import CommentsLists from "./CommentsLists";

const commentData = [
  {
    name: "Aadesh",
    comment: "This is Random data",
    replies: [
      {
        name: "Aadesh 2",
        comment: "This is Random data",
        replies: [
          {
            name: "Aadesh 3",
            comment: "This is Random data",
            replies: [],
          },
        ],
      },
      {
        name: "Aadesh 3",
        comment: "This is Random data",
        replies: [
          {
            name: "Aadesh",
            comment: "This is Random data",
            replies: [
              {
                name: "Aadesh 2",
                comment: "This is Random data",
                replies: [
                  {
                    name: "Aadesh 3",
                    comment: "This is Random data",
                    replies: [],
                  },
                ],
              },
              {
                name: "Aadesh 3",
                comment: "This is Random data",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Aadesh",
    comment: "This is Random data",
    replies: [],
  },
  {
    name: "Aadesh",
    comment: "This is Random data",
    replies: [],
  },
  {
    name: "Aadesh",
    comment: "This is Random data",
    replies: [],
  },
  {
    name: "Aadesh",
    comment: "This is Random data",
    replies: [],
  },
];
const CommentsContainer = () => {
  return (
    <div className="m-2 p-2">
      <p className="text-2xl font-bold">Comments: </p>
      <CommentsLists comments={commentData} />
    </div>
  );
};

export default CommentsContainer;
