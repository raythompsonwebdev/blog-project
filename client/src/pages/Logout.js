import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../useContext/context'

export default function Logout() {
    const { loggedIn, setLoggedIn } = useContext(UserContext)
    const [message, setMessage] = useState('')

    useEffect(() => {
        const logoutUser = async () => {
            const response = await fetch('/logout', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
            const result = await response.json()
            setMessage(result.message)
            setLoggedIn(result.loggedIn)
        }

        logoutUser()
    }, [setLoggedIn])

    // eslint-disable-next-line no-console
    console.log(loggedIn, message)

    return (
        <main className="form-signin">
            <h1 className="h3 mb-3 fw-normal">You are Logged Out</h1>
        </main>
    )
}
