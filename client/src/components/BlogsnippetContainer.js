import React from 'react'
import PropTypes from 'prop-types'
import Blogsnippet from './Blogsnippet'

function BlogsnippetContainer(props) {
    const { blogData } = props
    // eslint-disable-next-line no-console
    const Blog = blogData.map((item) => (
        <Blogsnippet
            key={item.id}
            author={item.author}
            username={item.username}
            blogtitle={item.blogtitle}
            blogpost={item.blogpost}
            mood={item.mood}
            prodId={item.prodId}
            submitted={item.submitted}
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

export default BlogsnippetContainer
