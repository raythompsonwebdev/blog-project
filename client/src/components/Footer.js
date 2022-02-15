import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line func-style
function Footer() {
  return (
    <footer className="blog-footer">
      <p>Blog template built for <a href="https://getbootstrap.com/">Bootstrap</a> by <a href="https://twitter.com/mdo">@mdo</a>.</p>
      <p>
        <Link to="/">Back to top</Link>
      </p>
    </footer>
  );
}

export default Footer;
