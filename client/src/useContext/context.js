import React, { createContext, useState, useMemo } from 'react'
import PropTypes from 'prop-types'

const UserContext = createContext({
    loggedIn: false,
    setLoggedIn: () => {},
})

function UserProvider({ children }) {
    const [loggedIn, setLoggedIn] = useState(false)

    // useMemo to prevent the object passed as the value prop to the Context provider to change on every render.
    const contextValue = useMemo(
        () => ({
            loggedIn,
            setLoggedIn,
        }),
        [loggedIn, setLoggedIn]
    )

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )
}

// props validation for children (react element nodes)
UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export { UserContext, UserProvider }
