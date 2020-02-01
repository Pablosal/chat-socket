import React, { useState, useContext, useEffect } from "react";
import "./Chat.css";
import uuid from "uuid/v4";
import AsideChat from "./AsideChat";
import ChatUserContext from "../context/context/ChatUserContext";

const Chat = () => {
  const context = useContext(ChatUserContext);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // setMensajes([...])
  }, [context.messages]);
  const handleChange = e => {
    setMessage(e.target.value);
  };
  const upMessage = e => {
    e.preventDefault();
    context.sendMessage(message);
    setMessage("");
  };
  console.log(context);
  return (
    <>
      <div className="comp">
        <div className="broadChat">
          <div className="chat" id="output">
            {context.messages.length < 1 ? (
              <p>No Hay Comentarios...</p>
            ) : (
              context.messages.map(m => {
                return (
                  <div
                    key={uuid()}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: "0px 0px 15px 15px",
                      backgroundColor: "#260B66",
                      width: "300px",
                      marginBottom: "15px"
                    }}
                  >
                    <div className="header">
                      {/* <img src={context.userImage} height="40px" alt="user" /> */}
                      <p style={{ color: "white" }}>{m.userName}</p>
                    </div>
                    <p className="comentaro">{m.mes}</p>
                  </div>
                );
              })
            )}
            <h3 id="feedback"></h3>
          </div>
          <div className="comment">
            <small id="handle">User</small>
            <form action="">
              <input
                id="message"
                value="message"
                onChange={handleChange}
                type="text"
                value={message}
                className="form-control"
              />
              <button id="send" onClick={upMessage} className="btn btn-danger">
                Comentar
              </button>
            </form>
          </div>
        </div>

        <AsideChat users={context.users} />
      </div>
    </>
  );
};

export default Chat;
