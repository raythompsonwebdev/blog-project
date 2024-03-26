/* eslint-disable jsx-a11y/label-has-associated-control */
import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// eslint-disable-next-line func-style
export default function Registerform() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    // set todays date
    const currDate = new Date().toISOString().slice(0, 10)
    const [dateSubmitted, setDate] = useState(currDate)
    const [emailError, setEmailError] = useState('')
    const [userError, setUserError] = useState('')
    const navigate = useNavigate()

    function handleUsername(e) {
        setUsername(e.target.value)
    }

    function handleEmail(e) {
        setEmail(e.target.value)
    }

    function handlePassword(e) {
        setPassword(e.target.value)
    }

    function handleDate(e) {
        setDate(e.target.value)
    }

    // eslint-disable-next-line func-style

    const submit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(
                'http://localhost:8000/register_user',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username,
                        email,
                        password,
                        dateSubmitted,
                    }),
                }
            )

            if (!response.ok) {
                throw new Error(
                    `Network response was not ok - ${response.status}`
                )
            }

            const result = await response.json()

            if (result) {
                setEmailError(result.emailError)
                setUserError(result.userError)
            }
        } catch (err) {
            // eslint-disable-next-line no-console
            console.error('Fetch Error : ', err.message)
            // throw new Error(err.message);
        }
        navigate('/')
    }

    return (
        <form id="login" onSubmit={submit}>
            <div
                className="error_message"
                style={{ color: 'red', height: '25px', lineHeight: '25px' }}
            >
                {emailError}
            </div>
            <div
                className="error_message"
                style={{ color: 'red', height: '25px', lineHieght: '25px' }}
            >
                {userError}
            </div>
            <br />
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
                <label htmlFor="email">
                    Email:&#32;
                    <input
                        className="form-control"
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={handleEmail}
                        required
                    />
                </label>
            </div>

            <div className="form-group">
                <label htmlFor="password">
                    Password:&#32;
                    <input
                        className="form-control"
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={handlePassword}
                        required
                    />
                </label>
            </div>

            <div className="form-group">
                <label htmlFor="submitted">
                    <input
                        className="form-control"
                        type="hidden"
                        id="submitted"
                        name="submitted"
                        onChange={handleDate}
                        value={dateSubmitted}
                    />
                </label>
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit">
                Register
            </button>
            <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
        </form>
    )
}
