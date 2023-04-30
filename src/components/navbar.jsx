import { Link } from "react-router-dom"
import React from "react"
import '../App.css';

export const Navbar = () => {
    return(
        <div className="navbar">
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/">Wardrobe</Link>
            </div>
        </div>
    )
}