import React from "react";
import { Link } from "react-router-dom";

function Blogsnippet(props) {
  return (
    <div className="card">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card&apos; content.
        </p>
        <Link to="/posts" />
      </div>
    </div>
  );
}

export default Blogsnippet;
