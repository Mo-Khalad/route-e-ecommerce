import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { TokenContext } from "../Store/TokenContext";

const Header = () => {
  let { userToken } = useContext(TokenContext);
/*
  return (
    <Navbar expand="lg" className="bg-body-tertiar n">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          {  userToken === undefined ? (
            <Nav
              className="me-4 my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink className="p-1 Nav-Link" to={"login"}>
                login
              </NavLink>
              <NavLink className="p-1 Nav-Link" to={"register"}>
                Register
              </NavLink>
            </Nav>
          ) : (
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink className={`p-1 Nav-Link `} to={"/"} end>
                Home
              </NavLink>
              <NavLink className="p-1 Nav-Link" to={"/brands"}>
                Brands
              </NavLink>
              <NavLink className="p-1 Nav-Link" to={"/categories"}>
                Categories
              </NavLink>
              <NavLink className="p-1 Nav-Link" to={"/cart"}>
                Cart
              </NavLink>
              <NavLink className="p-1 Nav-Link" to={"products"}>
                Products
              </NavLink>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  */

return(
<>
  <Navbar expand="lg" className="bg-body-tertiar n">
  <Container fluid>
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">

        <Nav
          className="me-4 my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <NavLink className="p-1 Nav-Link" to={"login"}>
            login
          </NavLink>
          <NavLink className="p-1 Nav-Link" to={"register"}>
            Register
          </NavLink>
        </Nav>
      
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <NavLink className={`p-1 Nav-Link `} to={"/"} end>
            Home
          </NavLink>
          <NavLink className="p-1 Nav-Link" to={"/brands"}>
            Brands
          </NavLink>
          <NavLink className="p-1 Nav-Link" to={"/categories"}>
            Categories
          </NavLink>
          <NavLink className="p-1 Nav-Link" to={"/cart"}>
            Cart
          </NavLink>
          <NavLink className="p-1 Nav-Link" to={"products"}>
            Products
          </NavLink>
        </Nav>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
</> 
)
};

export default Header;
