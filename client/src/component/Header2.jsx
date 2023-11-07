import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

const Header2 = () => {
  return (

      <Navbar style={{backgroundColor:'#488fed'}}  variant="dark" expand="lg">
        <Container style={{marginLeft:'500px'}}>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/" style={{color:'white',textShadow:'2px 2px 5px black'}}>
                Home
              </Nav.Link>
              <NavDropdown style={{color:'white',textShadow:'2px 2px 5px black'}} title="About" id="basic-nav-dropdown"  >
                <NavDropdown.Item as={Link}  to="/about/team" >
                  Team
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/about/history">
                  History
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/about/contact">
                  Contact Us
                </NavDropdown.Item>
              </NavDropdown>
               <NavDropdown style={{color:'white',textShadow:'2px 2px 5px black'}} title="Academic" id="basic-nav-dropdown" >
                <NavDropdown.Item as={Link}  to="/Academic/team">
                  Team
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/about/history">
                  History
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/about/contact">
                  Contact Us
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown style={{color:'white',textShadow:'2px 2px 5px black'}} title="Examination" id="basic-nav-dropdown" >
                <NavDropdown.Item as={Link}  to="/Examination/team">
                  Team
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/about/history">
                  History
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/about/contact">
                  Contact Us
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown style={{color:'white',textShadow:'2px 2px 5px black'}} title="Research" id="basic-nav-dropdown" >
                <NavDropdown.Item as={Link}  to="/Research/team">
                  Team
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/about/history">
                  History
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/about/contact">
                  Contact Us
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown style={{color:'white',textShadow:'2px 2px 5px black'}} title="Admission" id="basic-nav-dropdown" >
                <NavDropdown.Item as={Link}  to="/Admission/team">
                  Team
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/about/history">
                  History
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/about/contact">
                  Contact Us
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown style={{color:'white',textShadow:'2px 2px 5px black'}} title="Download" id="basic-nav-dropdown" >
                <NavDropdown.Item as={Link}  to="/Download/team">
                  Team
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/about/history">
                  History
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/about/contact">
                  Contact Us
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/" style={{color:'white',textShadow:'2px 2px 5px black'}}>
                Career
              </Nav.Link>
              <Nav.Link as={Link} to="/erp" style={{color:'white',textShadow:'2px 2px 5px black'}}>
                ERP
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

     
    
  );
 };

 export default Header2;    