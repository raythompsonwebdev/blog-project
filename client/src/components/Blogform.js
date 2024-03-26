import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Blogform() {
    const [author, setAuthor] = useState('')
    const [username, setUsername] = useState('')
    const [blogtitle, setPosttitle] = useState('')
    const [blogpost, setPost] = useState('')
    const [mood, setMood] = useState('')

    const currDate = new Date().toISOString().slice(0, 10)
    const [submitted, setDate] = useState(currDate)
    const navigate = useNavigate()

    function handleUsername(e) {
        setUsername(e.target.value)
    }

    function handleAuthor(e) {
        setAuthor(e.target.value)
    }

    function handlePosttitle(e) {
        setPosttitle(e.target.value)
    }

    function handlePost(e) {
        setPost(e.target.value)
    }

    function handleMood(e) {
        setMood(e.target.value)
    }

    function handleDate(e) {
        setDate(e.target.value)
    }

    // eslint-disable-next-line func-style
    const submit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('/create_post', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    author,
                    username,
                    blogtitle,
                    blogpost,
                    mood,
                    submitted,
                }),
            })

            if (!response.ok) {
                throw new Error(
                    `Network response was not ok - ${response.status}`
                )
            }

            const result = await response.json()
            // eslint-disable-next-line no-console
            console.log('Success:', result)
        } catch (err) {
            // eslint-disable-next-line no-console
            console.error('Fetch Error : ', err.message)
        }
        navigate('/')
    }

    return (
        <form id="create-post" onSubmit={submit}>
            <h1 className="h3 mb-3 fw-normal">Create a Blog</h1>
            <hr />
            <div className="form-group">
                <label htmlFor="author">
                    Author:&#32;
                    <input
                        className="form-control"
                        type="text"
                        name="author"
                        id="author"
                        value={author}
                        onChange={handleAuthor}
                        required
                    />
                </label>
            </div>

            <div className="form-group">
                <label htmlFor="username">
                    Username:&#32;
                    <input
                        className="form-control"
                        type="text"
                        name="username"
                        id="username"
                        value={username}
                        onChange={handleUsername}
                        required
                    />
                </label>
            </div>

            <div className="form-group">
                <label htmlFor="blogtitle">
                    Post Title:&#32;
                    <input
                        className="form-control"
                        type="text"
                        name="blogtitle"
                        id="blogtitle"
                        value={blogtitle}
                        onChange={handlePosttitle}
                        required
                    />
                </label>
            </div>

            <div className="form-group">
                <label htmlFor="blogpost">
                    <span>Post:&#32;</span>
                    <textarea
                        value={blogpost}
                        onChange={handlePost}
                        name="blogpost"
                        id="blogpost"
                        rows="10"
                    />
                </label>
            </div>

            <div className="form-group">
                <label htmlFor="mood">
                    Mood:&#32;
                    <input
                        className="form-control"
                        type="text"
                        name="mood"
                        id="mood"
                        value={mood}
                        onChange={handleMood}
                        required
                    />
                </label>
            </div>

            <div className="form-group">
                <label htmlFor="submitted">
                    Date :
                    <input
                        className="form-control"
                        type="date"
                        id="submitted"
                        name="submitted"
                        onChange={handleDate}
                        value={submitted}
                    />
                </label>
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit">
                Sign in
            </button>
            <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
        </form>
    )
}
