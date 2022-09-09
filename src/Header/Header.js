import React from "react";
import "./Header.css";
//  import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Maneger from "../assets/Manager.png";

import "./Header.css";
const Header = () => {
  return (
    <>
      <div className="container">
        <div className="header">
          <h1>
            Hy! <span>I am mahesh</span>
          </h1>
          <h3>I manage CXO Branding, Propelling Stories and MenToons.</h3>
          <img src={Maneger} alt="" />
          <h4>
            My mission is to make sure that you have all the necessary and state
            of the art self marketing tools to help you manage your career more
            effectively.
          </h4>
        </div>
      </div>
    </>
  );
};

export default Header;
