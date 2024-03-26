import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './sass/style.scss'
import Header from './components/Header'
import Footer from './components/Footer'
import MainNav from './components/MainNav'
import App from './pages/App'
import Blog from './pages/Blog'
import Createblog from './pages/Createblog'
import Login from './pages/Login'
import Logout from './pages/Logout'
import Register from './pages/Register'
import Profile from './pages/Profile'
import { UserProvider } from './useContext/context'

const root = createRoot(document.getElementById('root'))

root.render(
    <UserProvider>
        <React.StrictMode>
            <BrowserRouter>
                <div className="container">
                    <Header />
                    <MainNav />
                    <Routes>
                        <Route path="/" exact element={<App />} />
                        <Route path="/posts/:id" exact element={<Blog />} />
                        <Route
                            path="/create-post"
                            exact
                            element={<Createblog />}
                        />
                        <Route path="/login" exact element={<Login />} />
                        <Route path="/logout" exact element={<Logout />} />
                        <Route path="/register" exact element={<Register />} />
                        <Route path="/user" exact element={<Profile />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                    <Footer />
                </div>
            </BrowserRouter>
        </React.StrictMode>
    </UserProvider>
)
