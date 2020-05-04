import React from 'react';
import { FaStar, FaRegStar, FaCloudSun, FaCameraRetro, FaHiking, FaSwimmer, } from 'react-icons/fa';



const PopDestination = (props) => {
    return (
        <div>
            <div className="pd-poster">
            <img src={props.data.url} className="pd-img"/>
            </div>
            <div className="pd-details">
                <h2>Lorem ipsum dolor sit amet consectetur<br/>
                <span>Lorem ipsum dolor</span></h2>
                <div className="pd-rating">
                    <i className="pd-fa"><FaStar/></i>
                    <i className="pd-fa"><FaStar/></i>
                    <i className="pd-fa"><FaStar/></i>
                    <i className="pd-fa"><FaStar/></i>
                    <i className="pd-fa"><FaRegStar/></i>
                    <span>4/5</span>
                </div>
                <div className="pd-tags">
                    <div className="pd-tags-land"><FaCloudSun/> <FaCameraRetro/> <FaHiking/> <FaSwimmer /></div>
                </div>
                <div className="pd-info">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Excepturi ducimus quae qui iusto architecto ratione...</p>
                </div>
            </div>
        </div>
    );
}

export default PopDestination;