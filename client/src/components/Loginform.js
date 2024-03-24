import { React, useState } from 'react'

export default function Loginform() {
    const [email, setUserEmail] = useState('')
    const [password, setUserPassword] = useState('')
    const [errorMessage, setError] = useState()
    const [passError, setPassError] = useState()

    function handleUserEmail(e) {
        setUserEmail(e.target.value)
    }

    function handleuserPassword(e) {
        setUserPassword(e.target.value)
    }

    const submit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('http://localhost:8000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ password, email }),
            })
            if (!response.ok) {
                throw new Error(
                    `Network response was not ok - ${response.status}`
                )
            }

            // Assuming the server returns some data about the created user
            const data = await response.json()
            setPassError(data?.passwordError)
            setError(data?.error)
        } catch (err) {
            // eslint-disable-next-line no-console
            console.log(err)
        }
    }

    // eslint-disable-next-line no-console
    console.log(errorMessage, passError)

    return (
        <form id="login" onSubmit={submit}>
            <div className="error_message">{errorMessage}</div>
            <div className="error_message">{passError}</div>
            <div className="form-group">
                <label htmlFor="email">
                    Email:&#32;
                    <input
                        className="form-control"
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={handleUserEmail}
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
                        onChange={handleuserPassword}
                        required
                    />
                </label>
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit">
                Login
            </button>
            <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
        </form>
    )
}
