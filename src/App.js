import "./App.css";
import Header from "./Header/Header";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import Instagram from "./assets/instagram.png";
import Linkedin from "./assets/linkedin.png";
import Fb from "./assets/facebook.png";
import Lmw from "./LIFEMUSICWORK/LMW";
import Web from "./AddWebsiteas/Web";
import Footer from "./Footer/Footer";
function App() {
  {
    function reveal() {
      var reveals = document.querySelectorAll(".reveal");

      for (var i = 0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } 
        else {
          reveals[i].classList.remove("active");
        }
      }
    }

    window.addEventListener("scroll", reveal);
  }
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand
            href="#"
            style={{
              fontFamily: "'Brush Script MT', cursive",
              fontSize: "2rem",
            }}
          >
            Mentor Mahesh
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              {/* <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            /> */}
              {/* <Button variant="outline-success">Search</Button> */}
              <div className="icons">
                <img src={Fb} alt="" />
                <img src={Linkedin} alt="" />
                <img src={Instagram} alt="" />
              </div>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Header />
      <Lmw />
      <Web />
      <Footer />
    </div>
  );
}

export default App;
