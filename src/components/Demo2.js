import React, { useEffect, useRef, useState } from "react";

const Demo2 = () => {
  let x = 10;
  const [y, setY] = useState(0);

  const z = useRef(0);
  //   console.log(z);

  const i = useRef(null);
  useEffect(() => {
    if (i.current) return;
    i.current = setInterval(() => {
      console.log("Namste React..." + Math.random());
    }, 1000);

    return () => {
      clearInterval(i.current);
    };
  }, []);

  return (
    <div className="m-4 p-4 w-96 h-96 border border-black ">
      <div>
        <button
          className="bg-green-100 p-2 m-4"
          onClick={() => {
            x = x + 1;
            console.log("x = " + x);
          }}
        >
          Increase X
        </button>
        <span className="font-bold text-xl">Let (Let Variable) x = {x}</span>
      </div>
      <div>
        <button
          className="bg-green-100 p-2 m-4"
          onClick={() => {
            setY(y + 1);
          }}
        >
          Increase Y
        </button>
        <span className="font-bold text-xl">Let y (State Var) = {y}</span>
      </div>
      <div>
        <button
          className="bg-green-100 p-2 m-4"
          onClick={() => {
            z.current = z.current + 1;
          }}
        >
          Increase Z
        </button>
        <span className="font-bold text-xl">
          useRef (z value) = {z.current}
        </span>
      </div>
      <button
        className="bg-red-800 w-28 p-4 m-4 text-white rounded-lg"
        onClick={() => {
          clearInterval(i.current);
        }}
      >
        Stop Interval
      </button>
    </div>
  );
};

export default Demo2;
