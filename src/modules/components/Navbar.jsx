import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { Component, useEffect, useState } from "react";
import Orders from "../order-mgmt/Orders";
import Home from "./Home"
//import { routerConfig } from "../../router/routerConfig";

const Navbar = () => {
    return (
        <header className="bg-blue-500">
            <nav className="navbar w-full navbar-expand-lg">
                <ul className="
                navbar-nav
                mr-auto
                w-1/2
                flex justify-around 
                items-center
                ">
                    <li className="
                    nav-styles hover:bg-orange-500
                    ">
                        <a>Home</a>
                    </li>
                    <li className="
                    nav-styles hover:bg-orange-500
                    ">
                        <Link to="/Orders" className="nav-link">Orders</Link>
                    </li>
                    <li className="
                    nav-styles hover:bg-orange-500
                    ">
                        <a>About</a>
                    </li>
                    <li className="
                    nav-styles hover:bg-orange-500
                    ">
                        <a>Contact</a>
                    </li>
                </ul>
            </nav>
            <div className="container">
        <div className='divP 1'>
          <img className='pic 1' src='./logo192.png' alt='not found' />
          <div className='desc 1' >Goods description</div>
          <div className='amount 1' >Amount</div>
        </div>
        <div className='divP 2'>
          <img className='pic 2' src='./logo192.png' alt='not found' />
          <div className='desc 2' >Goods description</div>
          <div className='amount 2' >Amount</div>
        </div>
        <div className='divP 3'>
          <img className='pic 3' src='./logo192.png' alt='not found' />
          <div className='desc 3' >Goods description</div>
          <div className='amount 3' >Amount</div>
        </div>
      </div>
      Payment Methods
      <br/>
      <select >
        <option>Select an option</option>
        <option>MTN Money</option>
        <option>Orange Money</option>
        <option>Paypal</option>
        <option>Credit Card</option>
        <option>Visa</option>
      </select>

            <hr />
            <switch>
                <Route exact path="/" Component={<Home/>}  />
                <Route path="/" Component={<Orders/>} />
            </switch>
        </header>
    );
}

export default Navbar;