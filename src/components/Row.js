import React from 'react';
import './Row.css';
import kippt from '../assets/kippt.svg';
import amiral from '../assets/amiral.svg';
import hinge from '../assets/hinge.svg';
import national from '../assets/national.svg';
import wescale from '../assets/wescale.svg';
import algorithm from '../assets/algorithm.svg';
import jitja from '../assets/jitja.svg';
import massy from '../assets/massy.svg';
import norsan from '../assets/norsan.svg';


function Row() {
    return (
        <>
            <div className="row1">
                <img src={kippt} alt="" className="brand__images"/>
                <img src={amiral} alt="" className="brand__images"/>
                <img src={jitja} alt="" className="brand__images"/>
            </div>
            <div className="row2">
                <img src={hinge} alt="" className="brand__images"/>
                <img src={national} alt="" className="brand__images"/>
                <img src={wescale} alt="" className="brand__images"/>
            </div>
            <div className="row3">
                <img src={algorithm} alt="" className="brand__images"/>
                <img src={massy} alt="" className="brand__images"/>
                <img src={norsan} alt="" className="brand__images"/>
            </div>
        </>
    )
}

export default Row
