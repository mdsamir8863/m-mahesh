import React from "react";
import "./Header.css";
//  import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import MMimg from "../assets/mentor_mahesh.png";

import "./Header.css";
const Header = () => {
  return (
    <>
      <div className="container">
        <div className="header">
          <img src={MMimg} alt="" className="firstImg" />
          <h4 className="lmw-container container reveal ">
            I’m a dreamer, writer and storyteller, who loves to solve problems.
            I work on human behaviour, identity and relationships.
          </h4>
          {/* <h5 className="lmw-container container reveal ">
            I find unique ways to help you find your brand voice, establish your
            niche & bring clarity and elegance to your personality and help you
            achieve your career goals.
          </h5> */}
          {/* <h5 className="lmw-container container reveal ">
            I find unique ways to help you find your brand voice, establish your
            niche & bring clarity and elegance to your personality and help you
            achieve your career goals.
          </h5> */}
        </div>
      </div>
    </>
  );
};

export default Header;
