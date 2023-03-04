import React from 'react';
import dataPackages from '../../dataPackages';
import './packages.css';
import { FiMapPin } from "react-icons/fi";





const Packages = () => {
    const element = dataPackages.map(item => {
        return (
            <div className="card" key={item.id}>
                <div className="thumb-image">
                    <img src={item.img} alt="Picture" />
                </div>
                <div className="card-desc">
                    <h3>{item.name}</h3>
                    <p className="country"><FiMapPin className='icon-country' />{item.country}</p>
                    <div className="pricing">
                        <p className='culture-relax'>CULTURE<br />RELAX</p>
                        <p className='price'>{item.price}</p>
                    </div>
                    <p className='desc'>{item.desc}</p>
                    <a href="#" className='btn-details'>Details</a>
                </div>
            </div>
        )
    })

    return (
        <>
            <div className='packages'>
                <h2 className='title-packages'>Hot Vacation Packages</h2>
                <p className='desc-packages'>Book your vacations packages and holiday packages with us.</p>
                <div className="row-card">
                    {element}
                </div>
            </div>
        </>
    )
}

export default Packages;