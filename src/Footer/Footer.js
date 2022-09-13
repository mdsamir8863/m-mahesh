import React from "react";
import "./Footer.css";
import Youtube from "../assets/youtube1.png";
import FooterImg from "../assets/footerImg.png";
import Design from "../assets/design.png";
import Instagram from "../assets/instagram.png";
import Linkedin from "../assets/linkedin.png";
import Fb from "../assets/facebook.png";
import YoutubeLogo from "../assets/youtube_logo.png";
import Butterfly from '../assets/butterfly.png'
const Footer = () => {
  return (
    <>
      <div className="container reveal ytb">
        <h5>subscribe my Youtube chanel</h5>
        <img src={Youtube} alt="" className="Youtube" />
      </div>
      <footer>
        <p style={{ textAlign: "center",fontSize:"1.3rem"}}>
          If you have a project idea in mind, please don’t hesitate to get in
          touch. I’d love to hear from you, whatever you are learning
        </p>
        <address style={{textAlign:"center"}}> <a href="mentormahesh@gmail.com">mentormahesh@gmail.com</a> </address>
        <h5 style={{textAlign:"center"}}>Or,</h5>
        <div className="">
          <h4 style={{ textAlign: "center" }}>Let’s Connect!</h4>{" "}
          <div className="icons" style={{ margin: "1.3rem 0" }}>
            <img style={{ margin: "0" }} src={Fb} alt="" />
            <img style={{ margin: "0" }} src={Linkedin} alt="" />
            <img style={{margin:"0"}} src={YoutubeLogo} alt="" />
            <img style={{ margin: "0" }} src={Instagram} alt="" />
          </div>
        </div>
        <div className="foo-img">
          <p style={{fontSize:"1.7rem"}}>Thank you for visiting my site!</p>
          <img src={Butterfly} alt="" className="design" />
        </div>
        <div className="lastFooter">
          {" "}
          <p>
            doveloped by{" "}
            <a
              href="https://www.propellingstories.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              propelling stories
            </a>
          </p>
          <p>© Copyright 2022, All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
