import React, { Component } from 'react';
import { FaUmbrellaBeach } from 'react-icons/fa';

export default function TabPopLandmark() {
    return (
        <div>
            <div className="tabs-box">
                <FaUmbrellaBeach className="tab-icon-pl"/>
                <p><strong>Landmarks</strong></p>
            </div>
        </div>
    )
}