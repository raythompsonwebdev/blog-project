import React from 'react'
// import PropTypes from "prop-types";
import { Link } from 'react-router-dom'

function Blogsnippet(props) {
    const { author, username, blogtitle, blogpost, mood, prodId, submitted } = {
        ...props,
    }

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
                <Link to={`/posts/${prodId}`}>See Post</Link>
                <form
                    action={`http://localhost:3333/posts/${prodId}`}
                    method="POST"
                >
                    <button type="submit" name="name" value="Push">
                        &times;
                    </button>
                </form>
            </div>
        </div>
    )
}

Blogsnippet.defaultProps = {
    author: 'author not found',
    username: 'user not found ',
    blogtitle: 'not found',
    blogpost: 'not found',
    mood: 'not found',
    prodId: 1,
    submitted: 'not found',
}

export default Blogsnippet
