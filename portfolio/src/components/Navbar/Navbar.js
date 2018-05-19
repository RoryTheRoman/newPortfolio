import React from "react";
import "./Navbar.css";

const Navbar = () => {


return (
    <div className="container navbar-container">
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="navbar-brand" >michael mcdaniel</div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="/">WORKS <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/about">ABOUT</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/links">CONTACT</a>
                </li>
            </ul>
  </div>
</nav>
</div>

        )
    }


export default Navbar;