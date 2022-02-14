import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line func-style
function MainNav() {
  
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark" aria-label="Fourth navbar example">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Expand at md</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample04">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/blog">Blog</Link>
          </li>          
        </ul>
        <form>
          <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
        </form>
      </div>
    </div>
  </nav>
  );
}

export default MainNav;