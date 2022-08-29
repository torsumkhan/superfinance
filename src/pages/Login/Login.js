import React, { useState } from "react";

import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submited");
  };

  return (
    <div>
      <form className="login-form" onSubmit={submitHandler}>
        <h2>Login</h2>
        <label className="login-form-label">
          <span>Email:</span>
          <input
            className="login-form-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label className="login-form-label">
          <span className="login-span">Password:</span>
          <input
            className="login-form-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className="btn">Login</button>
      </form>
    </div>
  );
}

export default Login;
