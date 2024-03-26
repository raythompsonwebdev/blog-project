/* eslint-disable no-unused-vars */
import React from 'react'
// import PropTypes from "prop-types";
import { Link } from 'react-router-dom'
import convertDate from '../helpers/helper'

export default function Blogsnippet(props) {
    const {
        id,
        key,
        author,
        username,
        blogtitle,
        blogpost,
        mood,
        submitted,
        image,
    } = {
        ...props,
    }

    // eslint-disable-next-line no-console
    // console.log(author, username, mood, image)

    return (
        <div className="card flex-md-row mb-4 box-shadow h-md-250">
            <img
                className="card-img-right flex-auto d-none d-md-block"
                data-src="holder.js/200x250?theme=thumb"
                alt={key}
                src={image}
                data-holder-rendered="true"
                width={400}
            />
            <div className="card-body d-flex flex-column align-items-start">
                <strong className="d-inline-block mb-2 text-primary">
                    World
                </strong>
                <h3 className="mb-0">
                    <Link className="text-dark" to={`/posts/${id}`}>
                        {blogtitle}
                    </Link>
                </h3>
                <br />
                <div className="mb-1 text-muted">{convertDate(submitted)}</div>
                <p className="card-text mb-auto">{blogpost}</p>
                <br />
                <Link to={`/posts/${id}`}>Continue reading</Link>
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
    submitted: 'not found',
}
