import React, { Component } from 'react';
import { FaSuitcaseRolling } from 'react-icons/fa';

export default function TabPopDestination() {
    return (
        <div>
            <div className="tabs-box">
                <FaSuitcaseRolling className="tab-icon-pd"/>
                <p><strong>Hotel</strong></p>
            </div>
        </div>
    )
}