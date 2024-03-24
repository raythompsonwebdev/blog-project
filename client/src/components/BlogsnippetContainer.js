/* eslint-disable import/namespace */
import React from 'react'
import PropTypes from 'prop-types'
import Blogsnippet from './Blogsnippet'

export default function BlogsnippetContainer(props) {
    const { blogData } = props

    const Blog = blogData.map((item) => (
        <Blogsnippet
            id={item.id}
            key={item.id}
            author={item.author}
            username={item.name}
            blogtitle={item.blogtitle}
            blogpost={item.blogpost}
            mood={item.mood}
            submitted={item.date}
            image={item.image}
        />
    ))

    return Blog
}

BlogsnippetContainer.defaultProps = {
    blogData: [],
}

BlogsnippetContainer.propTypes = {
    blogData: PropTypes.arrayOf(
        PropTypes.shape({
            author: PropTypes.string,
            username: PropTypes.string,
            blogtitle: PropTypes.string,
            blogpost: PropTypes.string,
            mood: PropTypes.string,
            prodId: PropTypes.string,
            submitted: PropTypes.string,
        })
    ),
}
