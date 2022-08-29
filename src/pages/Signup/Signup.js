import React, { useState } from "react";

import "./signup.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name, email, password);
  };

  return (
    <div>
      <form className="signup-form" onSubmit={submitHandler}>
        <h2>Signup</h2>
        <label className="signup-form-label">
          <span>Name:</span>
          <input
            className="signup-form-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className="signup-form-label">
          <span>Email:</span>
          <input
            className="signup-form-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label className="signup-form-label">
          <span className="signup-span">Password:</span>
          <input
            className="signup-form-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className="btn">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
