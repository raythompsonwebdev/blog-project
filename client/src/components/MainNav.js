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
                setUserName(result.token)
            }
        }
        fetchUser()
    }, [setLoggedIn])

    // eslint-disable-next-line no-console
    console.log(message, userName)
    // eslint-disable-next-line no-console
    console.log(loggedIn)
    return (
        <nav className="py-2 bg-light border-bottom">
            <div className="container d-flex flex-wrap">
                {!loggedIn ? (
                    <ul className="nav me-auto">
                        <li className="nav-item">
                            <Link
                                to="/"
                                className="nav-link link-dark px-2 active"
                                aria-current="page"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/user"
                                className="nav-link link-dark px-2"
                            >
                                Profile
                            </Link>
                        </li>
                    </ul>
                ) : (
                    <ul className="nav me-auto">
                        <li className="nav-item">
                            <Link
                                to="/"
                                className="nav-link link-dark px-2 active"
                                aria-current="page"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/user"
                                className="nav-link link-dark px-2"
                            >
                                Profile
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/create-post"
                                className="nav-link link-dark px-2"
                            >
                                Create Blog
                            </Link>
                        </li>
                    </ul>
                )}
                {!loggedIn ? (
                    <ul className="nav">
                        <li className="nav-item">
                            <Link
                                to="/login"
                                className="nav-link link-dark px-2"
                            >
                                Login
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/register"
                                className="nav-link link-dark px-2"
                            >
                                Sign up
                            </Link>
                        </li>
                    </ul>
                ) : (
                    <ul className="nav">
                        <li className="nav-item">
                            <Link
                                to="/logout"
                                className="nav-link link-dark px-2"
                            >
                                Logout
                            </Link>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    )
}
