import { React, useState } from 'react'

export default function Loginform() {
    const [email, setUserEmail] = useState('')
    const [password, setUserPassword] = useState('')
    // const [error, setError] = useState('')

    function handleUserEmail(e) {
        setUserEmail(e.target.value)
    }

    function handleuserPassword(e) {
        setUserPassword(e.target.value)
    }

    async function submit() {
        try {
            const response = await fetch('http://localhost:8000/login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ password, email }),
            })

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }
            const result = await response.json()

            // eslint-disable-next-line no-console
            console.log(result)

            // eslint-disable-next-line no-console
            // console.log(result.Error)

            // setError(result)
        } catch (err) {
            // eslint-disable-next-line no-console
            console.log(` Fecth : ${err}`)
        }
    }

    // eslint-disable-next-line no-console
    // console.log(error)

    return (
        <form id="login" onSubmit={submit}>
            <div id="errorbox">{}</div>
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
