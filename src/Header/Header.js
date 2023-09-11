import React, { Fragment } from "react";
import classes from "../Styles/Header.module.css";
import logoAxpo from "../Logos/Axpo_logo.png";
import { Button } from "react-bootstrap";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Nav, NavItem, NavLink } from "react-bootstrap";
import {
  faHome,
  faRightFromBracket,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  const linkStyles = {
    fontSize: "18px",
    fontWeight: "bold",
  };

  return (
    <header className={classes.header}>
      <Nav
        variant="pills"
        className="flex-rows mb-1"
        defaultActiveKey="home-tab"
      >
        <NavItem>
          <NavLink
            as={Link}
            to="/home"
            active={location.pathname === "/home"}
            style={linkStyles}
          >
            <FontAwesomeIcon icon={faHome} className="mr-2" /> Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            as={Link}
            to="/AboutAxpo"
            active={location.pathname === "/AboutAxpo"}
            style={linkStyles}
          >
            <FontAwesomeIcon icon={faBriefcase} className="mr-2" /> AboutAxpo
          </NavLink>
        </NavItem>
      </Nav>
      <h1>Fullstack APP </h1>

      <img
        alt="Axpo"
        src={logoAxpo}
        width="120"
        height="60"
        className="d-inline-block align-top"
      />
    </header>
  );
}

export default Header;
