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
import Intervie2 from "../assets/intervie2.PNG";
import Loveimg from '../assets/Love.png'
import Peaceimg from '../assets/peace.png'
import Propelling from "../assets/PropellingStories.png";
import MentoonsLogo from "../assets/mentoons_logo.png";
import ToonlandLogo from "../assets/ToonlandLogo.png";
import Cxo from "../assets/cxoImg.PNG";
import Logo from "../assets/footerImg.png";
import Time from "../assets/time.png";
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
        {/* <Card.Img
          variant="top"
          src={lifeimg}
          className="cardimg1 "
          id="lifeimg"
        /> */}
        <Card.Body>
          {/* <Card.Title>Card Title</Card.Title> */}
          <Card.Img variant="top" src={Logo} className="cardimg2" />

          <Card.Text>
            I began my career in sales. Leveraging my expertise in scouting
            talent, I then shifted to the dynamic industry of Recruiting. Having
            met over 40,000 candidates and hired hundreds of them, I learnt the
            recruitment industry in and out.
          </Card.Text>
          <div className="container reveal">
            {" "}
            {/* <img style={{ width: "100%" }} src={Cxo} alt="" /> */}
            {/* <img style={{ width: "100%" }} src={Logo} alt="" /> */}
            <p>
              Having had the privilege of pitching to top CEO’s, interviewing
              multiple “C - Level “ executives, I noticed a gap… A big gap. The
              paucity of time.
            </p>
            <div className="intervieImg">
              <img src={Intervie} alt="" className="container reveal" />
            </div>
            <p>
              Hiring for top management can be tricky. Those making the hiring
              decisions don't have ample time to go through an entire resume.
              Those applying, i.e. the ultra-accomplished corporate executives,
              do not know how to correctly leverage their experience and
              achievements.
            </p>
            <div className="container reveal">
              {" "}
              <img style={{ width: "100%" }} src={Cxo} alt="" />
              {/* <img style={{ width: "100%" }} src={Cxo} alt="" />  */}
              <p>
                I decided to bridge that gap through my Venture CXO branding.
                {/* ( Personal
                Branding Image ) We also help them build a personal brand on
                LinkedIn as an additional asset that can help them get the best
                industry opportunities. */}
              </p>
              <p>
                Here my team and I collectively help these interviewees ace
                these interviews by designing and writing concise and competency
                based Cover letters, resumes and Video introductions.
              </p>
              <div className="intervie">
                <img style={{ width: "100%" }} src={Interviee} alt="" />
                <img style={{ width: "100%" }} src={Intervie2} alt="" />
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>

      <div id="work"></div>
      <Card
        className=" container reveal"
        style={{ width: "22rem", margin: "auto" }}
      >
        {/* <p style={{ width: "auto", paddingLeft: "1rem" }}>
          I have always been fascinated with people, the human psyche and
          interpersonal dynamics & my early influences to music..
        </p> */}
        {/* <Card.Img variant="top" src={Workimg} className="cardimg1" /> */}
        <Card.Body>
          {/* <Card.Title>Card Title</Card.Title> */}

          <Card.Img
            variant="top"
            src={Propelling}
            className="cardimg2"
            style={{ width: "100%" }}
          />
          <p>
            For the 20+ Youngsters, I conceptualised 'Propelling Stories', where
            we help individuals to revamp their personal / digital presence
            through websites and social media strategies. We harness the
            impeccable power of story-telling and illustrations to capture the
            ever declining attention spans and evoke powerful emotions.
          </p>

          <h5>
            However, I didn't stop here. Always wanting to maximise my impact
            through work,
          </h5>
          <div className="img-logo container reveal">
            <Card.Img
              variant="top"
              src={Time}
              className="cardimg2"
              style={{ width: "100%" }}
            />

            <p>
              After keenly observing modern technology and social media, I
              noticed the extent of their detrimental effects on our well-being.
              Seeing children and teenagers addicted to technology disheartens
              me.
            </p>
            {/* <p> I began two new ventures</p> */}
            <div className="logoImg">
              <img src={MentoonsLogo} alt="" />
            </div>

            <p>
              Thus I began <span>Mentoons</span> and <span>Tonnland</span>.
              Psychology and cartoon based platform that helps people lead
              healthy, tech-enabled and not tech dependent lives. We also mentor
              young professionals seeking career guidance.
            </p>
            <img src={ToonlandLogo} alt="" />
          </div>
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
        <div id="music"></div>
        <Card.Body>
          <Card.Img variant="top" src={Musicimg} className="cardimg2" />
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

          {/* <Card.Img variant="top" src={Musicimg} className="cardimg1" /> */}
          <h5>To listen my favorite 90's collection of music </h5>
          <Button variant="primary">click here</Button>
        </Card.Body>
      </Card>
      <div className=" container reveal "
        style={{ width: "22rem", margin: "auto" }}>
        <h5>
          My love for story-telling, illustrations and social impact are my why
          underneath everything I do.
        </h5>
        <div className="LovePeace">
          <img src={Loveimg} alt="" />
          <img src={Peaceimg} alt="" />
        </div>
      </div>
    </>
  );
};
export default Lmw;
