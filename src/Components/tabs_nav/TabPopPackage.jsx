import React, { Component } from 'react';
import { FaTags } from 'react-icons/fa';

export default function TabPopPackage() {
    return (
        <div>
            <div className="tabs-box">
                <FaTags className="tab-icon-pp"/>
                <p><strong>Packages</strong></p>
            </div>
        </div>
    )
}