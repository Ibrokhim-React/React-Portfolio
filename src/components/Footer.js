import React, { useEffect} from "react";
import "./Footer.css";
import handImage from "../assets/imageHand.png";
import CopyrightIcon from "@material-ui/icons/Copyright";
import InstagramIcon from "@material-ui/icons/Instagram";
import TelegramIcon from "@material-ui/icons/Telegram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import FacebookIcon from "@material-ui/icons/Facebook";
import { gsap } from "gsap";
import logoGray from '../assets/ijgray.svg';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const iconStyle = {
    fontSize: "30",
    color: "rgb(255, 65, 65)",
  };

  useEffect(() => {
    gsap.from(".footer__handImage", {
      scrollTrigger: {
        trigger: ".footer__handImage",
        start: "-80% center",
        end: "0% center"
      },
      y: "200px",
      duration: 1.5,    
    });
})
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__textLeft">
          <div className="footer__textWrapper">
            <h4 className="footer__name">Ibrokhim Jalalov</h4>
            <h5>Central Asia</h5>
            <h4 className="footer__address">
              Uzbekistan, Namangan, Nazargah-3, 20
            </h4>
            <span>Long: 71.2611952</span> <span>Lat: 41.0036287</span>
            <p>
              <CopyrightIcon className="copyright__icon" /> Copyright for 2020
              and {new Date().getFullYear()}
            </p>
            <div className="header__nameContainerFooter">
              <img
                src={logoGray}
                alt="Minimalistic style of logo Ibrokhim Jalalov"
                className="header__logoFooter"
              />
              <span className="header__nameFooter">Self brand mark</span>
            </div>
          </div>
        </div>
        <img
          src={handImage}
          alt="Hand Sculpture"
          className="footer__handImage"
        />
        <div className="footer__textRight">
          <div className="footer__textWrapper">
            <h4>Social Connection</h4>
            <span>ijalalov69@gmail.com</span>{" "}
            <span>ibrohim123451@icloud.com</span>
            <p>Middle level React.js Developer | Frontend Developer</p>
            <span>Telphone: +998999787525</span>
            <p>Zip Code: 160101</p>
            <ul className="footer__socIcons">
              <li className="footer__iconItem">
                <a
                  target="self"
                  className="footer__iconLink"
                  href="https://www.instagram.com/ibrokhim_jalalov/"
                >
                  <InstagramIcon className="footer__icon" style={iconStyle} />
                </a>
              </li>
              <li className="footer__iconItem">
                <a
                  target="self"
                  className="footer__iconLink"
                  href="https://t.me/ibrokhim_jalalov"
                >
                  <TelegramIcon className="footer__icon" style={iconStyle} />
                </a>
              </li>
              <li className="footer__iconItem">
                <a
                  target="self"
                  className="footer__iconLink"
                  href="https://twitter.com/Ibrokhi15703106"
                >
                  <TwitterIcon className="footer__icon" style={iconStyle} />
                </a>
              </li>
              <li className="footer__iconItem">
                <a
                  target="self"
                  className="footer__iconLink"
                  href="http://linkedin.com/in/ibrokhim-jalalov-87493a202"
                >
                  <LinkedInIcon className="footer__icon" style={iconStyle} />
                </a>
              </li>
              <li className="footer__iconItem">
                <a
                  target="self"
                  className="footer__iconLink"
                  href="https://www.whatsapp.com/ibrokhim_jalalov"
                >
                  <WhatsAppIcon className="footer__icon" style={iconStyle} />
                </a>
              </li>
              <li className="footer__iconItem">
                <a
                  target="self"
                  className="footer__iconLink"
                  href="https://www.facebook.com/ibrokhim.jalalov"
                >
                  <FacebookIcon className="footer__icon" style={iconStyle} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
