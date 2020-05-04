import React from 'react';
import { FaMapMarkerAlt, FaCloudSun, FaCameraRetro, FaHiking, FaSwimmer, } from 'react-icons/fa';



const PopLandmark = (props) => {
    return (
        <div>
            <div className="pl-box">
                <div className="pl-imgBox">
                    <img className="pl-foto" src={props.data.url} />
                </div>
                    <div class="pl-content">
                        <h3 className="pl-title">Lorem ipsum, dolor sit amet</h3>
                        <h4 className="pl-subtitle"><FaMapMarkerAlt /> Lorem ipsum dolor</h4>
                        <p className="pl-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iste,
                                                similique nesciunt in corrupti amet beatae quae tempora</p>
                        <div className="pl-tags-land"><FaCloudSun/> <FaCameraRetro/> <FaHiking/> <FaSwimmer /></div>
                </div>
            </div>
        </div>
    );
}

export default PopLandmark;