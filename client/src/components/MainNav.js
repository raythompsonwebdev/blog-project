import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line func-style
function MainNav() {
  return (
    <nav
      className="navbar navbar-expand-md navbar-light bg-light"
      aria-label="Fourth navbar example"
    >
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarsExample04">
          <ul className="navbar-nav me-auto ">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create-blog">
                Create Blog
              </Link>
            </li>
          </ul>
          <form>
            <input
              className="form-control"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    </nav>
  );
}

export default MainNav;
