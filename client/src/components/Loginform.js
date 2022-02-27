import { React, useState } from "react";

// eslint-disable-next-line func-style
export default function Loginform() {
  const [username, setUsername] = useState(" ");
  const [password, setPassword] = useState(null);

  function handleUsername(e) {
    setUsername(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  return (
    <form id="login" action="http://localhost:3333/login" method="POST">
      <h1 className="h3 mb-3 fw-normal">Login Here </h1>

      <div className="form-group">
        <label htmlFor="username">
          Username:&#32;
          <input
            className="form-control"
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={handleUsername}
            required
          />
        </label>
      </div>

      <div className="form-group">
        <label htmlFor="password">
          Password:&#32;
          <input
            className="form-control"
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handlePassword}
            required
          />
        </label>
      </div>

      <button className="w-100 btn btn-lg btn-primary" type="submit">
        Login
      </button>
      <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
    </form>
  );
}
