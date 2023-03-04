import React from 'react';
import './hero.css';
import { MdFilterListAlt } from "react-icons/md";


const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-title">
                <p>Our Packages</p>
                <h3>Search Your Holiday..</h3>
            </div>

            <div className="hero-filter">
                <div className="searching input">
                    <label htmlFor="search">Destinations</label><br />
                    <input type="text" placeholder="Search.." id="search" />
                </div>
                <div className="date input">
                    <label htmlFor="date">Date</label><br />
                    <input type="date" id="date" />
                </div>
                <div className="country input">
                    <label htmlFor="country">Country</label><br />
                    <input type="text" placeholder="Country.." id="country" />
                </div>
                <button><MdFilterListAlt /> Filters</button>
            </div>

        </div>
    )
}

export default Hero;