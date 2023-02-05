import React, { useState } from "react";
import { Container } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/Images/res-logo.png";
import { useSelector } from "react-redux";
import { MDBIcon } from "mdb-react-ui-kit";

import "../../Styles/header.css";
const nav_links = [
  {
    display: "Home",
    path: "/home",
    icon: <MDBIcon fas icon="home" size="sm" />,
    className: "nav_links",
  },
  {
    display: "Menu",
    path: "/menu",
    icon: <MDBIcon fas icon="store" size="sm" />,
    className: "nav_links",
  },
  {
    display: "Cart",
    path: "/cart",
    icon: <MDBIcon fas icon="shopping-cart" size="sm" />,
    className: "nav_links",
  },
  {
    display: "Contact",
    path: "/contact",
    icon: <MDBIcon fas icon="user-cog" size="sm" />,
    className: "nav_links",
  },
  {
    display: "Signup",
    path: "/signup",
    icon: <MDBIcon fas icon="user-plus" size="sm" />,
    className: "nav_links",
  },
];

const Header = () => {
  /* const [showHamburger, setShowHamburger] = useState(false);
  const handleHamburgerState = () => {
    setShowHamburger((ShowHamburger) => {
      if (ShowHamburger === false) {
        return true;
      } else {
        return false;
      }
    });
    console.log(showHamburger);
  }; */
  /* Access data from our Slice(store)
  1- Pick component
  2- Use useSelector hook and pass in the function
  3- As a parameter get the entire store and return or get what we want.
*/
  console.log(useSelector((store) => console.log(store)));
  const amount = useSelector((store) => store.cart.itemAmountInCart);
  //const menuRef = useRef(null);
  //const toggleMenu = () => menuRef.current.classList.toggle("show_menu");
  return (
    <header className="header">
      <Container>
        <div className="nav_wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={logo} alt="logo"></img>
            <h5>ChopOklok</h5>
          </div>
          {/*         ---- menu ---- <span>{item.icon}</span> */}
          <div className="navigation">
            <div className="menu d-flex align-items-center gap-4">
              {nav_links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {item.display}
                  {/*   <span>{item.icon}</span> */}
                </NavLink>
              ))}
            </div>
          </div>
          {/*   ---- nav right icons ---- */}
          <div className="nav_right d-flex align-items-center gap-4">
            <span className="cart_icon">
              <i className="ri-shopping-basket-line"></i>
              <span className="cart_badge">{amount}</span>
            </span>

            <span className="user">
              <Link to="/login">
                <i className="ri-user-line"></i>
              </Link>
            </span>

            <span className="mobile_menu">
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;

/* <nav className="NavbarItems">
      <h1 className="logo">
        {" "}
        My logo <i className="logoIcon"></i>
      </h1>
      <div className="menu-icons">
        <i
          className={showHamburger ? "fas fa-times" : "fas fa-bars"}
          onClick={handleHamburgerState}
        ></i>
      </div>
      <ul className="nav-menu">
        {nav_links.map((i, index) => {
          return (
            <li key={index} className>
              <Link to={i.path} className={i.className}>
                <i>{i.icon}</i>
                {i.display}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav> */
