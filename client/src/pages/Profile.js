import React from 'react'

export default function Profile() {
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
                                <div className="col-md-8">
                                    <h4>Name: John Doe</h4>
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