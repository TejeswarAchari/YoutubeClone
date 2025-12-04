// chatSlice.js
import {createSlice} from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";

const chatSlice = createSlice({
  name:"chat",
  initialState:{
    messages:[]
  },  
  reducers:{
    addMessage: (state, action) => {
      state.messages.push(action.payload); // Add new message at the end
      if (state.messages.length > LIVE_CHAT_COUNT) {
        state.messages.shift(); // Remove oldest message from the front
      }
    },
    clearMessages: (state) => {
      state.messages = [];   // ✅ Reset chat when called
    }
  }
}); 

export const { addMessage, clearMessages } = chatSlice.actions; // ✅ export it
export default chatSlice.reducer;
