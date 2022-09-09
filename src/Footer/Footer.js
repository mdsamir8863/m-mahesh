import React from "react";
import "./Footer.css";
import Youtube from "../assets/youtube1.png";
const Footer = () => {
  return (
    <>
      <div className="ytb">
        <h5>subscribe my Youtube chanel</h5>
        <img src={Youtube} alt="" className="Youtube" />
      </div>
      <footer>

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
    
      </footer>
    </>
  );
};

export default Footer;
