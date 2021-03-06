import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line func-style
function Header() {
  return (
    <header className="blog-header py-3">
      <div className="row flex-nowrap justify-content-between align-items-center">
        <div className="col-4 pt-1">
          <Link className="text-muted" to="/login">
            Login
          </Link>
        </div>
        <div className="col-4 text-center">
          <Link className="blog-header-logo text-dark" to="#">
            Large
          </Link>
        </div>
        <div className="col-4 d-flex justify-content-end align-items-center">
          <Link className="text-muted" to="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="mx-3"
              role="img"
              viewBox="0 0 24 24"
              focusable="false"
            >
              <title>Search</title>
              <circle cx="10.5" cy="10.5" r="7.5" />
              <path d="M21 21l-5.2-5.2" />
            </svg>
          </Link>
          <Link className="btn btn-sm btn-outline-secondary" to="/register">
            Register
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
