import React from 'react';
import './destinations.css';
import Image1 from './../../img/most-visited/1.jpg';
import Image2 from './../../img/most-visited/2.jpg';
import Image3 from './../../img/most-visited/3.jpg';
import Image4 from './../../img/most-visited/4.jpg';
import Image5 from './../../img/most-visited/5.jpg';
import Image6 from './../../img/most-visited/6.jpg';

const Destinations = () => {
    return (
    <div className="destinations">
        <h3 className="title-destinations">Most Visited Destinations</h3>
        <p className="desc-destinations">Tours give you opportunity to see a lot, within a time frame. </p>

        <div className="row-destinations">
            <div className="dest-title">
                <h3>Thousand Island, Nusa Penida, Bali</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum corrupti reiciendis repellat, fuga iusto eos, hic eaque aspernatur officiis voluptatibus recusandae delectus illo iste et!, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti doloremque beatae porro praesentium iusto?</p><br/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum corrupti reiciendis repellat, fuga iusto eos, hic eaque aspernatur officiis voluptatibus recusandae delectus illo iste et!</p><br/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum corrupti reiciendis repellat, fuga iusto eos, hic eaque aspernatur officiis voluptatibus recusandae delectus illo iste et!</p>
            </div>

            <div className="dest-image">
                <img src={Image1} alt="" />
                <img src={Image2} alt="" />
            </div>
        </div>

        <div className="row-destinations row-2 reverse">
            <div className="dest-image">
                <img src={Image3} alt="" />
                <img src={Image4} alt="" />
            </div>

            <div className="dest-title">
                <h3>Klingking Beach, Nusa Penida, Bali</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum corrupti reiciendis repellat, fuga iusto eos, hic eaque aspernatur officiis voluptatibus recusandae delectus illo iste et!, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti doloremque beatae porro praesentium iusto?</p><br/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum corrupti reiciendis repellat, fuga iusto eos, hic eaque aspernatur officiis voluptatibus recusandae delectus illo iste et!</p><br/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum corrupti reiciendis repellat, fuga iusto eos, hic eaque aspernatur officiis voluptatibus recusandae delectus illo iste et!</p>
            </div>
        </div>

        <div className="row-destinations row-2">
            <div className="dest-title">
                <h3>Fuvahmulah, Maldives</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum corrupti reiciendis repellat, fuga iusto eos, hic eaque aspernatur officiis voluptatibus recusandae delectus illo iste et!, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti doloremque beatae porro praesentium iusto?</p><br/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum corrupti reiciendis repellat, fuga iusto eos, hic eaque aspernatur officiis voluptatibus recusandae delectus illo iste et!</p><br/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum corrupti reiciendis repellat, fuga iusto eos, hic eaque aspernatur officiis voluptatibus recusandae delectus illo iste et!</p>
            </div>

            <div className="dest-image">
                <img src={Image5} alt="" />
                <img src={Image6} alt="" />
            </div>
        </div>
    </div>
    )
}

export default Destinations;