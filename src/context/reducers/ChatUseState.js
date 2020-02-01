import React, { useReducer, useEffect } from "react";
import ChatUserContext from "../context/ChatUserContext";
import io from "socket.io-client";
import ChatUserReducer from "./ChatUserReducer";
import { ADD_USER, ADD_MESSAGE, ADD_USERS } from "../actions/types";
let socket;
const ChatUserState = props => {
  const initialState = {
    userName: "Mario",
    userImage: "",
    messages: [],
    users: []
  };
  const [state, dispatch] = useReducer(ChatUserReducer, initialState);
  useEffect(() => {
    socket = io("http://localhost:3001");
    socket.on("chat", data => dispatch({ type: ADD_MESSAGE, payload: data }));
    socket.on("get users", data =>
      dispatch({ type: ADD_USERS, payload: data })
    );
    socket.on("new user", data => console.log(data));
  }, []);

  const sendMessage = mes => {
    socket.emit("chat", {
      mes,
      userImage: state.userImage,
      userName: state.userName
    });
  };

  const uploadHandle = (userName, userImage) => {
    dispatch({
      type: ADD_USER,
      payload: { userName: userName, userImage: userImage }
    });
    socket.emit("new user", { userName, userImage });
  };
  return (
    <ChatUserContext.Provider
      value={{
        useName: state.userName,
        userImage: state.userImage,
        messages: state.messages,
        users: state.users,

        uploadHandle,
        sendMessage
      }}
    >
      {props.children}
    </ChatUserContext.Provider>
  );
};

export default ChatUserState;
