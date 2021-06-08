import React from 'react';
import './Preloader.css'

const Preloader = () => {
    return (
        <div className="preloader">
            <div className="eye">
                <div className="eye__left">
                    <div className="black"></div>
                </div>
                <div className="eye__right">
                    <div className="black"></div>
                </div>
            </div>
            <p>Loading...</p>
        </div>
    )
}

export default Preloader
