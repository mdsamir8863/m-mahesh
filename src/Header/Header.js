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
         
          <img src={MMimg} alt="" className="firstImg"/>
          <h4  className="lmw-container container reveal " >
            I have always been fascinated with people, the human psyche and
            interpersonal dynamics & my early influences to music..
          </h4>
        </div>
      </div>
    </>
  );
};

export default Header;
