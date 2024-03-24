import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BlogsnippetContainer from '../components/BlogsnippetContainer'

// eslint-disable-next-line func-style
export default function App() {
    const [blogData, setblogData] = useState([])

    useEffect(() => {
        const fetchProducts = fetch(`/posts`)
        fetchProducts
            .then((response) => {
                if (!response.ok) {
                    throw new Error('no data provided')
                }
                return response.json()
            })
            .then((data) => {
                setblogData(data)
            })
            .catch((error) => {
                // eslint-disable-next-line no-console
                console.error(error)
            })
    }, [])

    return (
        <main role="main">
            <div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
                <div className="col-md-6 px-0">
                    <h1 className="display-4 font-italic">
                        Title of a longer featured blog post
                    </h1>
                    <p className="lead my-3">
                        Multiple lines of text that form the lede, informing new
                        readers quickly and efficiently about what’s most
                        interesting in this post’s contents.
                    </p>
                    <p className="lead mb-0">
                        <Link to="/" className="text-white font-weight-bold">
                            Continue reading...
                        </Link>
                    </p>
                </div>
            </div>
            <br />
            <div className="row">
                <BlogsnippetContainer blogData={blogData} />
            </div>
        </main>
    )
}
