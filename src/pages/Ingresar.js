import React, { useState, useEffect, useContext } from "react";
import "./Ingresar.css";

import { useHistory } from "react-router-dom";
import ChatUserContext from "../context/context/ChatUserContext";

const Ingresar = () => {
  const context = useContext(ChatUserContext);
  const history = useHistory();
  const [user, setUser] = useState("");

  const handleChange = e => {
    setUser(e.target.value);
  };
  const uploadHandle = async e => {
    e.preventDefault();
    context.uploadHandle(user, "none");
    setUser("");
    history.push("/chat");
  };

  return (
    <div className="midleman">
      <form className="cuadrado" onSubmit={uploadHandle}>
        <h2>Crea tu perfil</h2>

        <div className="inputs">
          <label htmlFor="">Usuario</label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            value={user}
          />
        </div>
        <br />

        <input
          className="btn boton btn-success"
          value="Ingresar"
          type="submit"
        />
        <br />
      </form>
    </div>
  );
};

export default Ingresar;
