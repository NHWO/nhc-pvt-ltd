import React from "react";
import "./Navbar.css";
import {NavLink} from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import logo from "../hospitalImages/NHC.png";
import { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <> 
    <div className="nav">
      <Navbar color="#fff" light expand="md" className="navBar">
        <div>
        <NavbarBrand href="/" style={{marginLeft:"10px"}}><img src={logo} alt="logo" height="50px" width="60px"/>
        <span className="headText" style={{color:"#118574",fontSize:"1.6rem",marginTop:"20px",marginLeft:"10px",marginRight:"220px",fontWeight:"bold"}}>
          NARESH HEALTHCARE</span>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} style={{border:"none",outline:"none"}}/>
        </div>
        <div>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="navitems" navbar>
            <NavItem style={{marginTop:"9px"}}>
              <NavLink  style={{color:"#118574",textDecoration:"none"}}  className="links" to="/" style={{color:"#118574",textDecoration:"none"}}>Home</NavLink>
            </NavItem>
            <NavItem style={{marginTop:"9px"}}>
              <NavLink  style={{color:"gray",textDecoration:"none"}} className="links" to="/appointment">Appointments</NavLink>
            </NavItem>
            <NavItem style={{marginTop:"9px"}}>
              <NavLink  style={{color:"gray",textDecoration:"none"}} className="links" to="/events">Events</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle style={{color:"gray",textDecoration:"none"}}  nav caret>
               About Us
              </DropdownToggle>
              <DropdownMenu bottom>
                <DropdownItem style={{marginTop:"10px"}}>
                  <NavLink style={{color:"gray",textDecoration:"none"}}  to="/about-us">About Hospitals</NavLink>
                </DropdownItem>
                <DropdownItem style={{marginTop:"10px"}}>
                  <NavLink  style={{color:"gray",textDecoration:"none"}} to="/vision-mission">Vision and Mission</NavLink>
                </DropdownItem>
                <DropdownItem style={{marginTop:"10px"}}>
                  <NavLink  style={{color:"gray",textDecoration:"none"}} to="/doctors">Meet our Doctors</NavLink>
                </DropdownItem>
                <DropdownItem style={{marginTop:"10px"}}>
                  <NavLink  style={{color:"gray",textDecoration:"none"}} to="/faq">FAQ's</NavLink>
                </DropdownItem>
                <DropdownItem style={{marginTop:"10px"}}>
                 <NavLink  style={{color:"gray",textDecoration:"none"}} to="/departments">Departments</NavLink>
                </DropdownItem>
                <DropdownItem style={{marginTop:"10px"}}>
                  <NavLink  style={{color:"gray",textDecoration:"none"}} to="/testimonials">Testimonials</NavLink>
                </DropdownItem>
                <DropdownItem style={{marginTop:"10px"}}>
                 <NavLink  style={{color:"gray",textDecoration:"none"}} to="/documents">Documents</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem style={{marginTop:"9px"}}>
              <NavLink  style={{color:"gray",textDecoration:"none"}} className="links" to="/gallery">Gallery</NavLink>
            </NavItem>
            <NavItem style={{marginTop:"9px"}}>
              <NavLink style={{color:"gray",textDecoration:"none"}} className="links" to="/hiring">Vacancies</NavLink>
            </NavItem>
            <NavItem style={{marginTop:"9px"}}>
              <NavLink  style={{color:"gray",textDecoration:"none"}} className="links" to="/contact-us">Contact Us</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        </div>
      </Navbar>
    </div>
    </>
  );
}

export default NavBar;
