import React, { useEffect } from "react";
import Header from "../components/Header";
import "./Showcase.css";
import phoneMock from '../videos/Phone.mp4'

function Showcase() {
  useEffect(() => {
    document.title = "Ibrokhim Jalalov | Showcase";
  }, []);
  let videoStat = true

  if(videoStat === true){
    const videoMock = document.querySelector('.phone__img');
    videoMock?.play();
  }

  return (
    <div className="showcase">
      <Header />
      <div className="phone__mockup">
        <video src={phoneMock} autoPlay loop alt="" className="phone__img"/>
      </div>
    </div>
  );
}

export default Showcase;