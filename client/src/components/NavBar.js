import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const NP = useSelector((state) => state.handleCart);
  console.log(NP.length);
  return (
   
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" to="/">
            Ecommerce-App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainmenu"
            aria-controls="mainmenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item ">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/products">
                  products
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  about
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  contact
                </a>
              </li>

              <li className="nav-item">
                <a href="/cart" className="nav-link">
                  <i className="fa fa-shopping-cart me-1"></i>
                  Cart ({NP.length})
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
   
  );
};

export default NavBar;
