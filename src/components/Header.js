import React, {useContext} from "react";
import { MojContext } from "./Context";
import { NavLink } from "react-router-dom";
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
// IMPORTS
import "../scss/header.scss"
import logo from "../assets/logo-nav.svg"
import menu from "../assets/menu.svg"


const Header = () => {
  const [ilosc, setIlosc] = useContext(MojContext);
  useScrollPosition(({ prevPos, currPos }) => {
    // console.log(currPos.x)
    // console.log(currPos.y)
    // const scrolY = document.body.clientHeight;
    // console.log(`document HEIGH ${scrolY}`)
    // const posY = window.pageYOffset
    // console.log(`window scrollY = ${posY}`)
    // const percentage = posY / document.body.scrollHeight
    // console.log(`percentage ${percentage}`)
    let scrollTop = window.scrollY;
  let docHeight = document.body.offsetHeight;
  let winHeight = window.innerHeight;
  let scrollPercent = scrollTop / (docHeight - winHeight);
  let scrollPercentRounded = Math.round(scrollPercent * 100);
    setIlosc(scrollPercentRounded)
    console.log(`ilosc stanu ${ilosc}`)
  })
  return (
    <header className="Header-header">
    
    <div className="progress-indicator" style={{width: `${ilosc}%`}}></div>
    <nav className="Header-nav">
      <div><img src={logo} alt="Artur Lewandowicz" /></div>
      <div><NavLink
        exact
        to="/"
        className="Header-navLink"
        activeClassName="Header-isActive"
      >
        Strona główna
      </NavLink>
      <NavLink
        to="/projekty"
        className="Header-navLink"
        activeClassName="Header-isActive"
      >
        Projekty
      </NavLink>
      <NavLink
        to="/oferta"
        className="Header-navLink open-project"
        activeClassName="Header-isActive"
      >
        Oferta
      </NavLink>
      <NavLink
        to="/o-mnie"
        className="Header-navLink"
        activeClassName="Header-isActive"
      >
        O mnie
      </NavLink>
      <NavLink
        to="/blog"
        className="Header-navLink"
        activeClassName="Header-isActive"
      >
        Blog
      </NavLink>
      <NavLink
        to="/kontakt"
        className="Header-navLink"
        activeClassName="Header-isActive"
      >
        Kontakt
      </NavLink></div>
      <div><img src={menu} alt="menu" /></div>
      
    </nav>
    <div className="sub-menu" style={{width: "500px", height: "500px", background: "pink" }}></div>
  </header>
  )
}
export default Header;
