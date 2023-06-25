// import React from 'react'
import React, { useEffect, useState } from "react";
import "./Claim_header.css";
import logo_web from "../../assets/logo.png";
import ai_logo from "../../assets/ai_footer.svg";
import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
// import Nav from "react-bootstrap/Nav";
import {
  Navbar,
  Nav,
  Form,
  Container,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import WalletModal from "../wallet_modal/WalletModal";
// import NavDropdown from "react-bootstrap";
// import Offcanvas from "react-bootstrap";

export default function Claim_header() {
  const [first, setfirst] = useState(true);
  const [selectedValue, setSelectedValue] = useState("");

  const [navbarBg, setNavbarBg] = useState(false);

  useEffect(() => {
    const changeNavbarBg = () => {
      if (window.scrollY >= 50) {
        setNavbarBg(true);
      } else {
        setNavbarBg(false);
      }
    };

    window.addEventListener("scroll", changeNavbarBg);

    return () => {
      window.removeEventListener("scroll", changeNavbarBg);
    };
  }, []);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleResize = () => {
    if (window.innerWidth < 1100) {
      setfirst(false);
    } else {
      setfirst(true);
    }
  };

  useEffect(() => {
    // window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
  });
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={
          navbarBg
            ? "navbar-bg mb-3 nav_main"
            : "navbar-transparent mb-3 nav_main"
        }
        id="navbar"
      >
        <Container>
          <Navbar.Brand href="#home" className="shfkfnwjfn">
            {/* <img
              src={logo_web}
          
              alt=""
              className="brand-logo_refrst  hhh_logog"
            /> */}
            <img
              className="d-block  respo hhh_logog"
              src={logo_web}
              alt=""
              href="#about"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-end flex-grow-1 pe-5 ps-5">
              {/* <Nav.Link href="#home" className="header_ka">
                Platform
              </Nav.Link> */}
              <Nav.Link href="/" className="header_ka">
                Home
              </Nav.Link>
              <Nav.Link
                href="https://aishiba.pro/whitepaper.pdf"
                target="_blank"
                className="header_ka"
              >
                Whitepaper
              </Nav.Link>
              <Nav.Link href="https://bscscan.com/address/0x4be2500d215103e6e4bb172558bf156f9d9fc48d"   target="_blank" className="header_ka">
                Smart contract
              </Nav.Link>
              <Nav.Link href="https://twitter.com/aishib_pro?s=21" target="_blank" className="header_ka">
                Twitter
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
