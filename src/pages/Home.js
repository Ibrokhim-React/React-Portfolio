import React, {useEffect} from 'react';
import '../pages/Home.css';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Calltoact from '../components/Calltoact';
import Brand from '../components/Brands';
import Career from '../components/Career';
import Footer from '../components/Footer';
import Roll from '../components/Roll';

function Home({animation}) {
    useEffect(() => {
        document.title = "Ibrokhim Jalalov | Home";
    }, []);
    return (
        <div className="home">
            <Header/>
            <Banner/>
            <Calltoact/>
            <Brand/>
            <Career/>
            <Roll/>
            <Footer scrollAnimation={animation}/>
        </div>
    )
}

export default Home
