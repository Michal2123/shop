import React from "react";
import "../styles/Navigation.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const Navigation = props => {
  let cartElems = 0;
  for (let index = 0; index < props.cart.length; index++) {
    cartElems += props.cart[index].count;
  }
  return (
    <Navbar expand="lg" className="Navigation">
      <Navbar.Brand className="Brand" style={{ color: "white" }}>
        Shop
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="light-navbar-nav"
        style={{ color: "white" }}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="NavigationLink">
          <NavLink exact to="/">
            Home
          </NavLink>

          <NavLink to="/products">Products</NavLink>

          <NavLink to="/contact">Contact</NavLink>

          <NavLink to="/cart">
            Cart
            <span style={{ fontFamily: "Nirmalagraphics", fontSize: "44px" }}>
              : {cartElems}
            </span>
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
