import React, { useState } from "react";
import "./login.css";
const Login = ({ setIsAuth }) => {
  const [inputs, setInputs] = useState({
    user: "",
    password: "",
  });

  const { user, password } = inputs;

  const checkLogin = (e) => {
    e.preventDefault();
    if (user === "admin" && password === "1234") {
      setIsAuth(true);
    }
  };

  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  return (
    <div className="box-container">
      <form onSubmit={checkLogin} className="form">
        <img
          alt="logo"
          className="logo"
          src="https://gett.mobi/wp-content/uploads/2021/11/logo_gett_pymes.png"
        ></img>
        <input
          name="user"
          value={user}
          type="text"
          placeholder="usuario"
          onChange={(e) => onChange(e)}
        ></input>
        <input
          name="password"
          value={password}
          type="password"
          placeholder="password"
          onChange={(e) => onChange(e)}
        ></input>
        <div className="button-box">
          <button>Ingresar</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
