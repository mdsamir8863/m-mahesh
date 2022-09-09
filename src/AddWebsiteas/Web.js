import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Mentoons from "../assets/mentoons_logo.png";
import Toonland from "../assets/Logo1.png";
import CXO from "../assets/CXO.png";
import "./Web.css";

const Web = () => {
  return (
    <>
      <Card style={{ width: "18rem", margin: "auto" }}>
        <Card.Img variant="top" src={Mentoons} className="cardimg1" />
        <Card.Body>
          <Card.Text>
            We at Mentoons are here to mentor through cartoons! Focusing on
            concepts such as social human development, social media
            de-addiction, we use psychology-based modules and cartoons to
            influence and change maladaptive behaviour in your child.
          </Card.Text>
          <Button variant="primary">Go to Website</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem", margin: "auto" }}>
        <Card.Img variant="top" src={Toonland} className="cardimg1" />
        <Card.Body>
          <Card.Text>
            After keenly observing modern technology and social media, I noticed
            the extent of their detrimental effects on our well-being. Seeing
            children and teenagers addicted to technology disheartens me.
          </Card.Text>
          <Button variant="primary">Go to Website</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem", margin: "auto" }}>
        <Card.Img variant="top" src={CXO} className="cardimg1" />
        <Card.Body>
          <Card.Text>here We are helping to reach there goal faster.</Card.Text>
          <Button variant="primary">Go to Website</Button>
        </Card.Body>
      </Card>

    </>
  );
};

export default Web;
