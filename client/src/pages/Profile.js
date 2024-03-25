import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../useContext/context'

export default function Profile() {
    const [message, setMessage] = useState('')
    const [userName, setUserName] = useState('')
    const { loggedIn, setLoggedIn } = useContext(UserContext)

    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch('/user', {
                method: 'GET',
                headers: {
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
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">User Profile</div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-4">
                                    {/* <img src="https://via.placeholder.com/150" alt="User Avatar" className="img-fluid rounded-circle"> */}
                                </div>
                                {!loggedIn ? (
                                    <div className="col-md-8">
                                        <h4>Logged out</h4>
                                        <p>Please login to view profile</p>

                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                        >
                                            Log In
                                        </button>
                                    </div>
                                ) : (
                                    <div className="col-md-8">
                                        <h4>Name: {userName}</h4>
                                        <p>Email: johndoe@example.com</p>
                                        <p>Location: New York, USA</p>
                                        <p>Joined: January 1, 2022</p>
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                        >
                                            Edit Profile
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">Other stuff</div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    {/* <img src="https://via.placeholder.com/150" alt="User Avatar" className="img-fluid rounded-circle"> */}
                                </div>
                                <div className="col-md-6">{}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
