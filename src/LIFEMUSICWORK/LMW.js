import React from "react";
import "./LMW.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Card from "react-bootstrap/Card";
import PlayingGuitar from "../assets/music1.png";
import lifeimg from "../assets/life.png";
import Musicimg from "../assets/music.png";
import Workimg from "../assets/work.png";
import Working from "../assets/workk.png";
import Intervie from "../assets/intervie1.png";
import Interviee from "../assets/intervie.png";
import Propelling from "../assets/propelling.png";
const Lmw = () => {
  return (
    <>
      <div
        className="lmw-container container reveal "
        style={{ width: "22rem", margin: "auto" }}
      >
        <div className="lmw-img">
          <ButtonGroup size="lg" className="mb-2">
            <Button>
              <a href="#lifeimg">
                <img src={lifeimg} alt="" />
              </a>
            </Button>
            <Button>
              <a href="#music">
                <img src={Musicimg} alt="" />
              </a>
            </Button>
            <Button>
              <a href="#work">
                <img src={Workimg} alt="" />
              </a>
            </Button>
          </ButtonGroup>
        </div>
      </div>
      <Card
        className=" container reveal "
        style={{ width: "22rem", margin: "auto" }}
      >
        <p style={{ width: "auto", paddingLeft: "1rem" }}>
          I have always been fascinated with people, the human psyche and
          interpersonal dynamics & my early influences to music..
        </p>
        <Card.Img
          variant="top"
          src={lifeimg}
          className="cardimg1 "
          id="lifeimg"
        />
        <Card.Body>
          {/* <Card.Title>Card Title</Card.Title> */}
          <Card.Text>
            I began my career in sales. Leveraging my expertise in scouting
            talent, I then shifted to the dynamic industry of Recruiting. Having
            met over 40,000 candidates and hired hundreds of them, I learnt the
            recruitment industry in and out.
          </Card.Text>
          <h5>to know more about me </h5>
          <p>read my biography</p>
          <Button variant="primary">click here</Button>
        </Card.Body>
      </Card>
      <Card
        className=" container reveal "
        style={{ width: "22rem", margin: "auto" }}
      >
        {/* <p style={{ width: "auto", paddingLeft: "1rem" }}>
          I have always been fascinated with people, the human psyche and
          interpersonal dynamics & my early influences to music..
        </p> */}
        <Card.Body>
          <Card.Img variant="top" src={PlayingGuitar} className="cardimg2" />
          {/* <Card.Title>Card Title</Card.Title> */}
          <Card.Text>
            I've always been someone who derives my grit and inspiration from
            music, especially Metal music and Rock music from the 70’s, 80s and
            90s. With my ventures right now, I am trying to pass on the same to
            everyone between the ages of 5 to 55 through stories and
            illustrations.
          </Card.Text>
          {/* <img src={PlayingGuitar} alt="" className="cardimg2" /> */}

          <Card.Img
            variant="top"
            src={Musicimg}
            className="cardimg1"
            id="music"
          />
          <h5>to listen my favorite 90's collection of music </h5>
          <Button variant="primary">click here</Button>
        </Card.Body>
      </Card>
      <Card
        className=" container reveal" id="work"
        style={{ width: "22rem", margin: "auto" }}
      >
        {/* <p style={{ width: "auto", paddingLeft: "1rem" }}>
          I have always been fascinated with people, the human psyche and
          interpersonal dynamics & my early influences to music..
        </p> */}
        <Card.Img variant="top" src={Workimg} className="cardimg1" />
        <Card.Body>
          <Card.Img variant="top" src={Working} className="cardimg2" />
          <Card.Body></Card.Body>
          {/* <Card.Title>Card Title</Card.Title> */}
          <Card.Text>
            I began my career in sales. Leveraging my expertise in scouting
            talent, I then shifted to the dynamic industry of Recruiting. Having
            met over 40,000 candidates and hired hundreds of them, I learnt the
            recruitment industry in and out.
          </Card.Text>
          <Card.Img variant="top" src={Intervie} className="cardimg2" />

          {/* <img src={PlayingGuitar} alt="" className="cardimg2" /> */}
          <h5>
            I will help you to choose a better career field to get a perfect job
          </h5>
          <Card.Img variant="top" src={Propelling} className="cardimg2" />
          <p>
            For the 20+ Youngsters, I conceptualised 'Propelling Stories', where
            we help individuals to revamp their personal / digital presence
            through websites and social media strategies. We harness the
            impeccable power of story-telling and illustrations to capture the
            ever declining attention spans and evoke powerful emotions.
          </p>
          <h5>
            Come to my official{" "}
            <a
              href="https://www.propellingstories.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Propelling stories
            </a>{" "}
            website
          </h5>
          <p>
            there my team and I collectively help these interviewees ace these
            interviews by designing and writing concise and competency based
            Cover letters, resumes and Video introductions. ( Image of Linkedin
            growth, flower to influencer image )
          </p>
          <p>
            We also help them build a personal brand on LinkedIn as an
            additional asset that can help them get the best industry
            opportunities.
          </p>

          <Button variant="primary">click here</Button>
        </Card.Body>
      </Card>
    </>
  );
};
export default Lmw;
