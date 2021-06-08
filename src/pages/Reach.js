import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Form from '../components/Form';
import './Reach.css';


function Reach() {
    useEffect(() => {
        document.title = "Ibrokhim Jalalov | Reach";
    }, [])
    return (
        <div className="reach" >
            <Header/>
            <Form/>
            <Footer/>
        </div>
    )
}

export default Reach
