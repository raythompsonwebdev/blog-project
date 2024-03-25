import { Link } from 'react-router-dom'
import React from 'react'

export default function Header() {
    return (
        <header className="blog-header py-3">
            <div className="row flex-nowrap justify-content-between align-items-center">
                <div className="col-4 pt-1">
                    <Link className="text-muted" to="/login">
                        Login
                    </Link>
                </div>
                <div className="col-4 text-center">
                    <Link className="blog-header-logo text-dark" to="#">
                        Large
                    </Link>
                </div>
                <div className="col-4 d-flex justify-content-end align-items-center">
                    <Link
                        className="btn btn-sm btn-outline-secondary"
                        to="/register"
                    >
                        Register
                    </Link>
                </div>
            </div>
        </header>
    )
}
