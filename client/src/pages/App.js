import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogsnippetContainer from "../components/BlogsnippetContainer";

// eslint-disable-next-line func-style
function App() {
  const [blogData, setblogData] = useState([]);
  const [lastIndex, setLastIndex] = useState(0);

  useEffect(() => {
    const fetchProducts = fetch(`http://localhost:3333/posts`);
    fetchProducts
      .then((response) => {
        if (!response.ok) {
          throw new Error("no data provided");
        }
        return response.json();
      })
      .then((data) => {
        // eslint-disable-next-line no-console
        // console.log(data);

        const returnedData = data.map((blog, index) => {
          const { id } = blog;
          // eslint-disable-next-line no-param-reassign
          blog.prodId = id;
          setLastIndex(blog.prodId);
          return blog;
        });

        setblogData(returnedData);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);
      });
  }, []);

  // eslint-disable-next-line no-console
  // console.log(blogData);

  return (
    <main role="main">
      <div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
        <div className="col-md-6 px-0">
          <h1 className="display-4 font-italic">
            Title of a longer featured blog post
          </h1>
          <p className="lead my-3">
            Multiple lines of text that form the lede, informing new readers
            quickly and efficiently about what’s most interesting in this post’s
            contents.
          </p>
          <p className="lead mb-0">
            <Link to="/" className="text-white font-weight-bold">
              Continue reading...
            </Link>
          </p>
        </div>
      </div>
      <br />
      <BlogsnippetContainer blogData={blogData} lastIndex={lastIndex} />
    </main>
  );
}

export default App;
