import React from 'react';
import './navbar.css';
import { NavLink, Outlet } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { SiStrava } from "react-icons/si";
import Footer from './../../components/footer/Footer';



const Navbar = () => {
    const [toggle, setToggle] = React.useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }
    
    return (
        <>
            <nav>
                <div className="nav-title">
                    <NavLink to="/"><SiStrava />Tour.<span>ID</span>.</NavLink>
                </div>

                <div className="nav-menu" id={toggle ? "toggle-active" : ""} >
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="packages">Packages</NavLink>
                    <NavLink to="about">About</NavLink>
                    <NavLink to="contact">Contact</NavLink>
                    <NavLink to="packages" className="btn-book">Book Now</NavLink>
                </div>

                <div className="toggle-burgers" onClick={handleToggle}>
                    {toggle ?  <FiX /> : <FiMenu /> }
                </div>
            </nav>
            
            <Outlet />

            <Footer />
        </>
    )
}

export default Navbar;