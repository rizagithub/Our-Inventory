import React from "react";
import { Container, Navbar, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./NavbarHomepage.css";

const NavbarHomepage = () => {
  return (
    <Navbar className="fixed-top shadow-sm bg-white">
      <Container>
        <Navbar.Brand className="d-flex">
          <Link to="/">
            <Image className="navbar__img" src="/lamongan2.png" alt="logo kota lamongan" />
            {/* <Image className="navbar__img2" src="/logo_diskominfo.png" alt="logo diskominfo" /> */}
          </Link>
        </Navbar.Brand>
        
        <Navbar.Brand>
          <Link to="/login" className="btn-sign__link">
            <Button className="btn-sign d-flex align-items-center justify-content-center" type="submit">
              <Image className="login_img" src="/login.svg" alt="login icon" />
              Login
            </Button>
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavbarHomepage;


