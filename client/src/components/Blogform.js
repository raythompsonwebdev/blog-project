import { React, useState } from "react";

// eslint-disable-next-line func-style
export default function Blogform() {
  const { author, setAuthor } = useState(" ");
  const { posttitle, setPosttitle } = useState(" ");
  const { post, setPost } = useState(" ");
  const { date, setDate } = useState(" ");

  function handleAuthor(e) {
    setAuthor(e.target.value);
  }

  function handlePosttitle(e) {
    setPosttitle(e.target.value);
  }

  function handlePost(e) {
    setPost(e.target.value);
  }

  function handleDate(e) {
    setDate(e.target.value);
  }

  function submit(e) {
    // eslint-disable-next-line no-console
    console.log(
      `You have entered Author:${author}, Post Title: ${posttitle} & This Post: ${post}. Date : ${date}`
    );
    e.preventDefault();
  }

  return (
    <form id="form" onSubmit={submit}>
      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

      <div className="form-floating">
        <label htmlFor="author">
          Author:&#32;
          <input
            type="text"
            name="author"
            id="author"
            value={author}
            onChange={handleAuthor}
            required
          />
        </label>
      </div>

      <div className="form-floating">
        <label htmlFor="posttitle">
          Post Title:&#32;
          <input
            type="posttitle"
            name="posttitlel"
            id="posttitlel"
            value={posttitle}
            onChange={handlePosttitle}
            required
          />
        </label>
      </div>

      <div className="form-floating">
        <label htmlFor="post">
          Message:&#32;
          <textarea
            value={post}
            onChange={handlePost}
            name="post"
            id="post"
            cols="35"
            rows="10"
          />
        </label>
      </div>

      <div className="form-floating">
        <label htmlFor="date">
          <input type="date" id="date" name="date" onChange={handleDate} />
        </label>
      </div>

      <div className="checkbox mb-3">
        <label htmlFor="remember">
          <input type="checkbox" value="remember-me" id="remember" /> Remember
          me
        </label>
      </div>
      <button className="w-100 btn btn-lg btn-primary" type="submit">
        Sign in
      </button>
      <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
    </form>
  );
}
