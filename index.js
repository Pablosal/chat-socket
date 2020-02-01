const express = require("express");
const socket = require("socket.io");

const app = express();

const users = [];
const connections = [];

const server = app.listen(3001, () => console.log("excuchadon puerto 5000"));

//SOCKET
let io = socket(server);
io.on("connection", socket => {
  console.log(socket.id);
  connections.push(socket);

  socket.on("chat", data => {
    io.emit("chat", data);
  });
  socket.on("typing", data => {
    io.emit("typing", data);
  });

  //New Usuario
  socket.on("new user", data => {
    socket.username = data.userName;
    users.push(socket.username);

    updateUsernames();

    console.log(users);
  });
  const updateUsernames = () => {
    io.sockets.emit("get users", users);
  };

  socket.on("disconnect", data => {
    if (!socket.username) return;
    users.splice(users.indexOf(socket.username), 1);
    updateUsernames();
    connections.splice(connections.indexOf(socket), 1);
  });
});
