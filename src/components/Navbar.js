import React from "react";
import Headroom from "react-headroom";
import { NavbarBrand, Navbar, NavItem, Nav, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import NavSocial from "./NavSocial";
import SETTINGS from "../settings";
import "../assets/css/display.scss";

// eslint-disable-next-line
export default () => {
  return (
    <Headroom>
      <Navbar
        className="color-main headroom z-3"
        expand="lg"
        id="navbar-main"
      >
        <NavbarBrand to="/">
          <Link to="/">
            <img 
              alt={SETTINGS.title} 
              src="static/img/citizenfriends.webp"
              style={{width:"7vh"}}
            />
          </Link>
        </NavbarBrand>
        <button className="navbar-toggler" id="navbar_global">
          <span className="navbar-toggler-icon" />
        </button>
        <Nav className="align-items-lg-center ml-lg-auto container-fluid justify-content-end" navbar>
          <NavItem>
            <NavLink tag={Link} to="/bruxelles" className="nav-link-icon" id="navbar-bruxelles" style={{ color: "white" }}>
              <i className="ni ni-shop text-white" />
              <span className="nav-link-inner--text">Citizenfund Bruxelles</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/liege" className="nav-link-icon" id="navbar-liege" style={{ color: "white" }}>
              <i className="ni ni-building text-white" />
              <span className="nav-link-inner--text">Citizenfund Liège</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/brabant-wallon" className="nav-link-icon" id="navbar-brabant" style={{ color: "white" }}>
              <i className="ni ni-pin-3 text-white" />
              <span className="nav-link-inner--text">Citizenfund Brabant-Wallon</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="https://citizenfund.coop" className="nav-link-icon" id="navbar-brabant" style={{ color: "white" }}>
              <i className="ni ni-pin-3 text-white" />
              <span className="nav-link-inner--text">Plateforme Citizenfund</span>
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </Headroom>
  );
};
