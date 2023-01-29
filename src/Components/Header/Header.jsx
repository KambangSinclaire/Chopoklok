import React, {useRef} from "react";
import { Container } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/Images/res-logo.png";

import "../../Styles/header.css";
const nav_links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "All food Gallery",
    path: "/foods",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const menuRef = useRef(null)
  const toggleMenu = ()=> menuRef.current.classList.toggle('show_menu')
  return (
    <header className="header">
      <Container>
        <div className="nav_wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={logo} alt="logo"></img>
            <h5>ChopOklok</h5>
          </div>
          {/* ---- menu ---- */}
          <div className="navigation" ref={menuRef}  onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-4">
              {nav_links.map((item, index) => (
                <NavLink
               
                to={item.path} key={index} 
                className={navClass => navClass.isActive ? 'active__menu' : '' }
                
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

          {/* ---- nav right icons ---- */}
          <div className="nav_right d-flex align-items-center gap-4">
            <span className="cart_icon">
              <i class="ri-shopping-basket-line"></i>
              <span className="cart_badge">2</span>
            </span>

            <span className="user">
              <Link to="/login">
                <i class="ri-user-line"></i>
              </Link>
            </span>

            <span className="mobile_menu" onClick={toggleMenu} >
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
