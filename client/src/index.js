import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MainNav from "./components/MainNav";
import App from "./pages/App";
import Blog from "./pages/Blog";
import Createblog from "./pages/Createblog";
import "./sass/style.scss";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <div className="container">
    <React.StrictMode>
      <BrowserRouter>
        <Header />
        <MainNav />
        <Routes>
          <Route path="/" exact element={<App />} />
          <Route path="/blog" exact element={<Blog />} />
          <Route path="/create-blog" exact element={<Createblog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  </div>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
