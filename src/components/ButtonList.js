import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttons = [
    "All",
    "Music",
    "Sports",
    "Coocking",
    "All",
    "Music",
    "Sports",
    "Coocking",
    "All",
    "Music",
  ];
  return (
    <div className="flex flex-wrap">
      {buttons.map((btn, index) => (
        <Button key={index} name={btn} />
      ))}
    </div>
  );
};

export default ButtonList;
