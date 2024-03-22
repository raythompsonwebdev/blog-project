import { React, useState } from 'react'

export default function Blogform() {
    const [author, setAuthor] = useState(' ')
    const [username, setUsername] = useState(' ')
    const [blogtitle, setPosttitle] = useState(' ')
    const [blogpost, setPost] = useState(' ')
    const [mood, setMood] = useState(' ')

    const currDate = new Date().toISOString().slice(0, 10)
    const [submitted, setDate] = useState(currDate)

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
    function submit() {
        try {
            fetch('http://localhost:8000/create_post', {
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
                .then((response) => {
                    if (!response.ok) {
                        // error processing
                        throw new Error(
                            `Database Error : ${response.status}: ${response.statusText}`
                        )
                    }
                    return response.json()
                })
                .then((response) => {
                    // eslint-disable-next-line no-console
                    console.log(response)
                })
        } catch (err) {
            // eslint-disable-next-line no-console
            console.error('Fetch Error : ', err.message)
            // throw new Error(err.message);
        }
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
                        id="submittedr"
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
