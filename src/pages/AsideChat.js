import React from "react";
import uuid from "uuid/v4";
import user from "../img/user.svg";
const AsideChat = ({ users }) => {
  console.log(users);
  return (
    <aside className="connectedUsers">
      <ul>
        {users.map(u => (
          <li
            style={{ listStyle: "none", color: "white", textAlign: "center" }}
            key={uuid()}
          >
            <img
              src={user}
              height="30px"
              style={{ marginRight: "10px" }}
              alt=""
            />
            {u}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default AsideChat;
