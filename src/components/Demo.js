import React, { useState, useMemo } from "react";
import { findPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  //   console.log("Rendering...");

  const prime = useMemo(() => findPrime(text), [text]);

  return (
    <div>
      <div
        className={
          "m-4 p-4 w-96 h-96 border border-black " +
          (isDarkTheme && "bg-gray-900 text-white")
        }
      >
        <button
          className="m-10 p-2 bg-green-100"
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          Toggle
        </button>
        <div>
          <input
            className="border border-black w-72 p-2"
            type="number"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
        <div className="font-bold text-xl">nth Prime : {prime}</div>
      </div>
    </div>
  );
};

export default Demo;
