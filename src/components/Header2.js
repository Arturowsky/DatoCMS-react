import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MojContext } from "./Context";
import small from "../assets/small.svg"
const Header2 = () => {
  const [theme, setTheme] = useContext(MojContext)
  return (
    <header className="Header-header" style={{position: "sticky", top: "0", background: "#F8F7F7", zIndex: "1", borderBottom: "1px solid #f9f9f9"}}>
    <img src={small} alt="" />
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
    <button onClick={() => setTheme(!theme)}>zmien motyw</button>
  </header>
  )
}
export default Header2;
