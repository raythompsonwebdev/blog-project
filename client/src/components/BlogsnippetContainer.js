import React from "react";
import PropTypes from "prop-types";
import Blogsnippet from "./Blogsnippet";

function BlogsnippetContainer(props) {
  const { blogData } = props;
  // eslint-disable-next-line no-console
  console.log(blogData);
  const Blog = blogData
    .slice(0, 8)
    .map((item) => (
      <Blogsnippet
        key={item.id}
        author={item.author}
        username={item.username}
        blogtitle={item.blogtitle}
        blogpost={item.blogpost}
        mood={item.mood}
        submitted={item.submitted}
      />
    ));

  return <div>{Blog}</div>;
}

BlogsnippetContainer.defaultProps = {
  blogData: [],
};

BlogsnippetContainer.propTypes = {
  blogData: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      name: PropTypes.string,
      blogtitle: PropTypes.string,
      blogpost: PropTypes.string,
      mood: PropTypes.string,
      submitted: PropTypes.string,
    })
  ),
};

export default BlogsnippetContainer;
