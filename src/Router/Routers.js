


import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'

import Home from '../Pages/Home';

// import Cart from '../Pages/Cart';
// import Checkout from '../Pages/Checkout';
import Contact from '../Pages/Contact';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Notify from '../Pages/Notification';
import Cart_checkout from '../Pages/Cart_checkout';
import Menu from '../modules/components/Menu';
import ProductCard from '../Pages/ProductCard';
  

const Routers = () => {
  return <Routes>
    <Route path='/' element={<Navigate to='/home'/>} />
    <Route path='/home' element={< Home/>} />
    <Route path='/menu' element={<Menu/>} />
    <Route path='/product/:id' element={<ProductCard/>} />
    <Route path='/cart_checkout' element={<Cart_checkout/>} />
    {/* <Route path='/checkout' element={<Checkout/>} /> */}
    <Route path='/login' element={<Login/>} />
    <Route path='/register' element={<Register/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/Notification' element={<Notify/>} />


  </Routes>
}

export default Routers