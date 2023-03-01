import { createSlice } from "@reduxjs/toolkit";
import { MAX_MESSAGE_LIVE_CHAT } from "./constant";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      if (state.messages.length >= MAX_MESSAGE_LIVE_CHAT) {
        state.messages.splice(0, 1);
      }

      state.messages.push(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;

export default chatSlice.reducer;
