import React from 'react';
import { FaHome } from 'react-icons/fa';



const PopHotel = (props) => {
    return (
            <div className="hobox">
                <img className="hofoto" src={props.data.url} />
                <div className="hoicon">
                    <h2 className="hotitle">{props.data.title}</h2>
                </div>
                <div className="hocontent">
                    <p className="hotxt">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Magni earum sequi, vel officia veniam nesciunt dolorum.</p>
                </div>
            </div>
    );
}

export default PopHotel;