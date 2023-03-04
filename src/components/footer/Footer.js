import React from 'react';
import './footer.css';
import { BsCaretRightFill } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";


const Footer = () => {
  return (
    <footer>
        <div className="row-input-footer">
            <div className="title-ft">
                <p>KEEP IN TOUCH</p>
                <h3>Travel with us</h3>
            </div>

            <input type="text" placeholder="your@gmail.com" />
            <button>Send</button>
        </div>

        
        <div className="footer-card">
            <div className="column-1">
                <h3>Tour.<span>ID</span>.</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores iusto minus delectus iste exercitationem tempora. Lorem ipsum dolor sit amet.</p>
                <FiFacebook className='icon-sosmed' />
                <FiTwitter className='icon-sosmed' />
                <FiInstagram className='icon-sosmed' />
                <FiYoutube className='icon-sosmed' />
            </div>

            <div className="column-2">
                <h3 className='title-footer'>Partners</h3>
                <ul>
                    <li><a href="/"><BsCaretRightFill className='icon-arrow'/>Booking</a></li>
                    <li><a href="/"><BsCaretRightFill className='icon-arrow'/>RentalCar</a></li>
                    <li><a href="/"><BsCaretRightFill className='icon-arrow'/>HostelWorld</a></li>
                    <li><a href="/"><BsCaretRightFill className='icon-arrow'/>Trivago</a></li>
                    <li><a href="/"><BsCaretRightFill className='icon-arrow'/>TripAdvisor</a></li>
                </ul>
            </div>
            <div className="column-3">
                <h3 className='title-footer'>Last Minute</h3>
                <ul>
                    <li><a href="/"><BsCaretRightFill className='icon-arrow'/>London</a></li>
                    <li><a href="/"><BsCaretRightFill className='icon-arrow'/>California</a></li>
                    <li><a href="/"><BsCaretRightFill className='icon-arrow'/>Indonesia</a></li>
                    <li><a href="/"><BsCaretRightFill className='icon-arrow'/>Europe</a></li>
                    <li><a href="/"><BsCaretRightFill className='icon-arrow'/>Oceania</a></li>
                </ul>
            </div>
        </div>
        
        <div className="footer-full">
            <p>Best Travel Wesbite Theme</p>
            <p>&copy; ANWAR 2023</p>
        </div>
    </footer>
  )
}

export default Footer;