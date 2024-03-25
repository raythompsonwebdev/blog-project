import { Link } from 'react-router-dom'
import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../useContext/context'

export default function MainNav() {
    const [message, setMessage] = useState('')
    const [userName, setUserName] = useState('')
    const { loggedIn, setLoggedIn } = useContext(UserContext)

    // const loggedIn = false

    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch('/user', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
            const result = await response.json()

            if (result) {
                setLoggedIn(result.loggedIn)
                setMessage(result.message)
                setUserName(result.token?.username)
            }
        }
        fetchUser()
    }, [setLoggedIn])

    // eslint-disable-next-line no-console
    console.log(message, userName)
    // eslint-disable-next-line no-console
    console.log(loggedIn)
    return (
        <nav
            className="navbar navbar-expand-md navbar-light bg-light"
            aria-label="Fourth navbar example"
        >
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarsExample04">
                    {!loggedIn ? (
                        <ul className="navbar-nav me-auto ">
                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/profile"
                                >
                                    Profile
                                </Link>
                            </li>
                        </ul>
                    ) : (
                        <ul className="navbar-nav me-auto ">
                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/create-post">
                                    Create Blog
                                </Link>
                            </li>
                        </ul>
                    )}
                    <form>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Search"
                            aria-label="Search"
                        />
                    </form>
                </div>
            </div>
        </nav>
    )
}
