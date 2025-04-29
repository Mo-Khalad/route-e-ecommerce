import React, { Fragment, useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../Store/CartContext";
import { totalCartItems } from "../Logic/Logic";

const Header = () => {
  const {items } = useContext(CartContext);
  const itemsCount = totalCartItems(items);

  return (
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
       
        <nav>
           <Link to={'../cart'} >                
              <svg
                className="cart-icon ms-5"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="9%"
                
                height="100%"
                viewBox="0 0 164.9 196.4"
                preserveAspectRatio="xMinYMax meet"
                data-hook="svg-icon-9"
              >
                  <text
                  x="84"
                  y="131"
                  dy=".35em"
                  text-anchor="middle"
                  className="text-items"
                  data-hook="items-count"
                >
                  {itemsCount}
                </text>
                <path d="M81.9 11.5c-18.8 0-34.1 16-34.1 35.7v18.1h7.8V47.2c0-15.4 11.8-27.9 26.4-27.9 14.5 0 26.4 12.5 26.4 27.9v18.1h6.6V64h1.1V47.2c-.1-19.7-15.4-35.7-34.2-35.7z"></path>
                <path d="M156.9 70.5v118H8v-118h148.9m8-8H0v134h164.9v-134z"></path>
              </svg>
            </Link>
        </nav>
            


         
          
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
