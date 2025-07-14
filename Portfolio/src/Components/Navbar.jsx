import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './NavbarStyle.css';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <navbar className="navbar">
            <div className="container">
                
                <div className="logo">Núria Feng Almendros González</div>

                <button
                    className="menu-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                    >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>

                <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </navbar>
    );
};


export default Navbar;