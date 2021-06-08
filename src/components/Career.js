import React, { useState, useEffect } from "react";
import "./Career.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Career() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const willGo = () => {
      if (count < 40) {
        setTimeout(() => {
          setCount((count) => count + 1);
        }, 50);
      } else if (count >= 40 && count < 52) {
        setTimeout(() => {
          setCount((count) => count + 1);
        }, 80);
      } else if (count >= 52 && count < 57) {
        setTimeout(() => {
          setCount((count) => count + 1);
        }, 130);
      }
      else if (count >= 57 && count < 62) {
        setTimeout(() => {
          setCount((count) => count + 1);
        }, 180);
      }
      else if (count >= 62 && count < 64) {
        setTimeout(() => {
          setCount((count) => count + 1);
        }, 200);
      }
      else if (count >= 64 && count < 65) {
        setTimeout(() => {
          setCount((count) => count + 1);
        }, 500);
      }
    };
    const endWord = () => {
      console.log("End");
    };
    ScrollTrigger.create({
      trigger: ".counter__big",
      start: "50% 80%",
      onEnter: willGo,
      onLeave: endWord,
      once: true,
    });
  }, [count]);
  return (
    <div className="career">
      <div className="counter">
        <span className="counter__big">{count}</span>
        <span className="counter__small">*</span>
      </div>
      <div className="career__info">
          <ul className="career__skills">
              <li><span><sup>5</sup>Advanced Frontend</span></li>
              <li><span><sup>e</sup>Clean Code</span></li>
              <li><span><sup>4</sup>Responsive Web</span></li>
              <li><span><sup>8</sup>Cross Platform</span></li>
          </ul>
          <ul className="career__skills">
              <li><span><sup>6</sup>Animations</span></li>
              <li><span><sup>8</sup>Beautiful Design</span></li>
              <li><span><sup>4</sup>Cross Platform</span></li>
              <li><span><sup>8</sup>Attractions</span></li>
          </ul>
          <ul className="career__skills">
              <li><span> <sup>9</sup> High ranked service</span></li>
              <li><span> <sup>3</sup> DNS service</span></li>
              <li><span> <sup>6</sup> High chance of clients</span></li>
              <li><span> <sup>4</sup> Backend Services</span></li>
          </ul>
      </div>
    </div>
  );
}

export default Career;
