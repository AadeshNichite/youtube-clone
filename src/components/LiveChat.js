import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, generateRandomStrings } from "../utils/helper";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  //API Polling
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");

  const chatMessage = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //   console.log("API POLLING");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomStrings(20) + " 🤞",
        })
      );
    }, 1500);

    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <div>
      <div className="w-full ml-2 mt-1 h-[500px] p-2  bg-slate-100 rounded-lg border border-black overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessage.map((chat, index) => (
            <ChatMessage name={chat.name} key={index} message={chat.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 m-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Aadesh",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="px-2 w-[20em]"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-1 m-1 bg-red-600 rounded-lg text-white">
          send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
