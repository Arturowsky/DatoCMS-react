import React from "react";
import { NavLink } from "react-router-dom";
import Image from 'next/image'
import small from "../assets/small.svg"
export default () => (
  <header className="Header-header">
    <h1 className="Header-h1">I know my kitChen - blogaaa</h1>
    
    <nav className="Header-nav">
      <NavLink
        exact
        to="/"
        className="Header-navLink"
        activeClassName="Header-isActive"
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className="Header-navLink"
        activeClassName="Header-isActive"
      >
        About
      </NavLink>
      <NavLink
        to="/blog"
        className="Header-navLink"
        activeClassName="Header-isActive"
      >
        Blog
      </NavLink>
    </nav>
  </header>
);
