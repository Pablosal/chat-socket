import React from "react";

import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Ingresar from "./pages/Ingresar";
import Chat from "./pages/Chat";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Ingresar />
        </Route>
        <Route exact path="/chat">
          <Chat />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
