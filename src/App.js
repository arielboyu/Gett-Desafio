import "./App.css";
import React, { useState } from "react";
import Main from "./views/main/main";
import Login from "./views/login/login";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div className="App">
      {!isAuth ? (
        <Login setIsAuth={setIsAuth} />
      ) : (
        <Main setIsAuth={setIsAuth} />
      )}
    </div>
  );
};

export default App;
