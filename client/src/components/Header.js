import { Link } from 'react-router-dom'
import React from 'react'

export default function Header() {
    return (
        <header>
            <header className="py-3 mb-4 border-bottom">
                <div className="container d-flex flex-wrap justify-content-center">
                    <Link
                        to="/"
                        className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none"
                    >
                        <svg className="bi me-2" width="40" height="32">
                            {/* <use xlink:href="#bootstrap"></use> */}
                        </svg>
                        <span className="fs-4">Double header</span>
                    </Link>
                    <form className="col-12 col-lg-auto mb-3 mb-lg-0">
                        <input
                            type="search"
                            className="form-control"
                            placeholder="Search..."
                            aria-label="Search"
                        />
                    </form>
                </div>
            </header>
        </header>
    )
}
