import React from "react";
import { Navbar,  Nav, Container } from "react-bootstrap";
import TradExpressimg from './Img/TradExpress.svg'
import { Link } from "react-router-dom";
import './Navbarr.css'

const Navbarr = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg"  className="nav">
        <Container>
          <Link to='/'><Navbar.Brand href="#home"><img src={TradExpressimg} alt="" /></Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
             <Link to='/buysell'> <Nav.Link href="#deets">Instant Buy/sell</Nav.Link></Link>
              <Nav.Link eventKey={2} href="#memes">
                Learn
              </Nav.Link>
              <Nav.Link href="#deets"><Link to='/login'><button className="button15">Login </button></Link></Nav.Link>
              <Nav.Link href="#deets"><Link to='/individual'><button className="button21">Get Started </button></Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbarr;
