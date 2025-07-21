import React, { useContext, useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink, useParams } from "react-router-dom";
import { CartContext } from "../Store/CartContext";
import { totalCartItems } from "../Logic/Logic";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../images/logo.png";
import { WishlistContext } from "../Store/WishlistContext";
import { useFetch } from "../Hooks/useFetch";
import Dropdown from "react-bootstrap/Dropdown";

import Search from "./Search";

const Header = () => {
  const ref = useRef(0);

  const { items, token, setToken } = useContext(CartContext);
  const { responsive } = useContext(WishlistContext);
  const itemsCount = totalCartItems(items);
  const [change, setChange] = useState(true);
  const { data } = useFetch({ method: "get", type: "api/v1/products" });
  const [searchResults, setSearchResults] = useState([]);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY <= ref.current.clientHeight) {
        setChange(true);
      } else setChange(false);
    };
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const id = useParams().id;

  const search = (event) => {
    if (event.target.value !== "") {
      const search = data?.data?.data.filter((data) =>
        data.description.includes(event.target.value)
      );
      setSearchResults(search);
    } else setSearchResults([]);
  };

  window.addEventListener("click", (e) => {
    e.target.name === "search" ? setShow(true) : setShow(false);
  });

  return (
    <>
      <Navbar
        ref={ref}
        expand={"md"}
        className={change ? "navbar w-100" : "active_Nav position-fixed w-100"}
      >
        <Container fluid>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"md"}`} />

          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${"md"}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${"md"}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                <img src={logo} alt="logo" />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="align-items-center justify-content-between flex-grow-1 pe-3">
                <Nav className="w-50">
                  <Navbar.Brand className="brand pointer mx-3">
                    <NavLink className={`Nav-Link pointer`} to={"/"} end>
                      <img src={logo} alt="logo" width={125} />
                    </NavLink>
                  </Navbar.Brand>
                  <NavLink className={`p-1 Nav-Link mt-2`} to={"/"} end>
                    Home
                  </NavLink>

                  <NavLink
                    className="p-1 Nav-Link mt-2 mx-3"
                    to={"/categories"}
                  >
                    Categories
                  </NavLink>

                  <NavLink className="p-1 Nav-Link mt-2" to={"/brands"}>
                    Brands
                  </NavLink>

                  <NavLink
                    className={`${
                      id === undefined ? "Nav-Link" : "sub-color"
                    } mt-2 p-1 mx-3`}
                    to={"/products"}
                  >
                    Products
                  </NavLink>
                </Nav>

                <Nav>
                  {token === null ? (
                    <NavLink
                      className="Nav-Link login py-1 px-3 mt-2 me-5"
                      to={"login"}
                    >
                      Login
                    </NavLink>
                  ) : (
                    <Link
                      to={"../"}
                      className={`p-1 mt-1 me-5 link `}
                      onClick={() => {
                        setToken(null);
                        localStorage.removeItem("token");
                      }}
                    >
                      <button className="logOut py-1 px-3 border-0">
                        {" "}
                        Logout{" "}
                      </button>
                    </Link>
                  )}

                  <Link to={"../cart"} className={"text-center"}>
                    <svg
                      className={`cart`}
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      viewBox="0 0 164.9 196.4"
                      preserveAspectRatio="xMinYMax meet"
                      data-hook="svg-icon-9"
                      fill={`${items.length !== 0 ? "#07b6da" : "#f5f5f5"}`}
                    >
                      <text
                        x="84"
                        y="131"
                        dy=".35em"
                        textAnchor="middle"
                        className="text-items p-4"
                        data-hook="items-count"
                      >
                        {itemsCount}
                      </text>
                      <path d="M81.9 11.5c-18.8 0-34.1 16-34.1 35.7v18.1h7.8V47.2c0-15.4 11.8-27.9 26.4-27.9 14.5 0 26.4 12.5 26.4 27.9v18.1h6.6V64h1.1V47.2c-.1-19.7-15.4-35.7-34.2-35.7z"></path>
                      <path d="M156.9 70.5v118H8v-118h148.9m8-8H0v134h164.9v-134z"></path>
                    </svg>
                  </Link>

                

                  <Link to={"../wishlist"} className={"text-center"}>
                    <i className="wishlist m-2 ms-3 p-1 fs-3 text-light fa-regular fa-heart">
                      <p className="wishlist-product-count">
                        {responsive?.data?.data.length !== undefined
                          ? responsive?.data?.data.length
                          : 0}
                      </p>
                    </i>
                  </Link>
                </Nav>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      {searchResults.length !== 0 ? (
        <Dropdown.Menu
          className={`${change ? "" : "position-fixed"}`}
          show={show}
        >
          {searchResults.map((item) => {
            return (
              <Link
                className={"search-text"}
                key={item.id}
                to={`${
                  id === undefined ? `/products/${item.id}` : `/products/${item.id}`
                }`}
              >
                {item.description}
              </Link>
            );
          })}
        </Dropdown.Menu>
      ) : (
        ""
      )}
    </>
  );
};

export default Header;
//<Search change={change} product={searchResults} toggle={toggle}/>
/*
  <input
                    className="search"
                    id="search"
                    name="search"
                    type="text"
                    onChange={search}
                  />
                  */