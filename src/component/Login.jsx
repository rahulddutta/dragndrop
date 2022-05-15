import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [error, setError] = useState(false);
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")

  return (
    <div className="login">
      <form className="box">
        <input type="text" placeholder="username" value={username} onChange={e=>setUsername(e.target.value)}/>
        <input type="password" placeholder="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button disabled={!username || !password}>Login</button>
        <span
          data-testid="error"
          style={{ visibility: error ? "visible" : "hidden" }}
        >
          Something went wrong
        </span>
      </form>
    </div>
  );
};

export default Login;
