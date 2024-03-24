import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import convertDate from '../helpers/helper'

export default function Blog() {
    const { id } = useParams()

    const [blogInfo, setblogInfo] = useState([])

    useEffect(() => {
        async function fetchData() {
            const result = await fetch(`/posts/${id}`)
            const body = await result.json()
            setblogInfo(body)
        }

        fetchData()
    }, [id])

    const { author, blogtitle, blogpost, mood, date, image } = blogInfo

    return (
        <main role="main">
            <div className="row">
                <div className="col-md-8 blog-main">
                    <h3 className="pb-4 mb-4 font-italic border-bottom">
                        From the Firehose
                    </h3>
                    <img
                        className="card-img-right flex-auto d-none d-md-block"
                        alt="Thumbnail [200x250]"
                        src={image}
                        data-holder-rendered="true"
                        width={850}
                    />
                    <div className="blog-post">
                        <h2 className="blog-post-title">{blogtitle}</h2>
                        <p className="blog-post-meta">
                            Submitted: {convertDate(date)}
                        </p>
                        <p>
                            by : <Link to="/"> {author}</Link>
                        </p>

                        <hr />
                        <p>{blogpost}</p>
                        <hr />

                        <blockquote>
                            <p>
                                My mood is <strong>{mood}</strong>
                            </p>
                        </blockquote>
                    </div>

                    {/* <nav className="blog-pagination">
                        <Link className="btn btn-outline-primary" to="/">
                            Older
                        </Link>
                        <Link
                            className="btn btn-outline-secondary disabled"
                            to="/"
                            tabIndex="-1"
                            aria-disabled="true"
                        >
                            Newer
                        </Link>
                    </nav> */}
                </div>

                <aside className="col-md-4 blog-sidebar">
                    <div className="p-4 mb-3 bg-light rounded">
                        <h4 className="font-italic">About</h4>
                        <p className="mb-0">
                            Etiam porta <em>sem malesuada magna</em> mollis
                            euismod. Cras mattis consectetur purus sit amet
                            fermentum. Aenean lacinia bibendum nulla sed
                            consectetur.
                        </p>
                    </div>

                    <div className="p-4">
                        <h4 className="font-italic">Archives</h4>
                        <ol className="list-unstyled mb-0">
                            <li>
                                <Link to="/">March 2014</Link>
                            </li>
                            <li>
                                <Link to="/">February 2014</Link>
                            </li>
                            <li>
                                <Link to="/">January 2014</Link>
                            </li>
                            <li>
                                <Link to="/">December 2013</Link>
                            </li>
                            <li>
                                <Link to="/">November 2013</Link>
                            </li>
                            <li>
                                <Link to="/">October 2013</Link>
                            </li>
                            <li>
                                <Link to="/">September 2013</Link>
                            </li>
                            <li>
                                <Link to="/">August 2013</Link>
                            </li>
                            <li>
                                <Link to="/">July 2013</Link>
                            </li>
                            <li>
                                <Link to="/">June 2013</Link>
                            </li>
                            <li>
                                <Link to="/">May 2013</Link>
                            </li>
                            <li>
                                <Link to="/">April 2013</Link>
                            </li>
                        </ol>
                    </div>

                    <div className="p-4">
                        <h4 className="font-italic">Elsewhere</h4>
                        <ol className="list-unstyled">
                            <li>
                                <Link to="/">GitHub</Link>
                            </li>
                            <li>
                                <Link to="/">Twitter</Link>
                            </li>
                            <li>
                                <Link to="/">Facebook</Link>
                            </li>
                        </ol>
                    </div>
                </aside>
            </div>
        </main>
    )
}
