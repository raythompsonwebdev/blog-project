import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Blogsnippet(props) {
  const { key, author, username, blogtitle, blogpost, mood, submitted } = {
    ...props,
  };
  // eslint-disable-next-line no-console
  // console.log(author);
  return (
    <div className="card">
      {/* <img src="..." className="card-img-top" alt="..." /> */}
      <div className="card-body">
        <h1>{blogtitle}</h1>
        <h2>Author : {author} </h2>
        <h2>User : {username} </h2>
        <h3>Submitted : {submitted}</h3>
        <p className="card-text">{blogpost}</p>
        <p>Mood: {mood}</p>
        <Link to={`/post/${key}`}>See Post</Link>
      </div>
    </div>
  );
}
Blogsnippet.defaultProps = {
  key: 0,
  author: "author not found",
  username: "user not found ",
  blogtitle: "not found",
  blogpost: "not found",
  mood: "not found",
  submitted: "not found",
};

// Blogsnippet.propTypes = {
//   author: PropTypes.string,
//   name: PropTypes.string,
//   blogtitle: PropTypes.string,
//   blogpost: PropTypes.string,
//   mood: PropTypes.string,
//   submitted: PropTypes.string,
// };

export default Blogsnippet;
