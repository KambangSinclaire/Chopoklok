


import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'

import Home from '../Pages/Home';
import AllFoods from '../Pages/AllFoods';
import FoodDetails from '../Pages/FoodDetails';
/* import Cart from '../Pages/Cart'; */
/* import Checkout from '../Pages/Checkout'; */
import Contact from '../Pages/Contact';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
/* import Dashboard from '../Pages/Dashboard'; */
//import Nav from '../Components/Dashboard/Dash_Nav'
import Dashboard from '../Components/Dashboard/Dashboard';
import List from '../Components/Dashboard/List';
import Single from '../Components/Dashboard/Single';
import New from '../Components/Dashboard/New';
import { productInputs, userInputs } from '../formSource';
import CartCheckout from '../Pages/Cart_checkout';
  

const Routers = () => {
  return <Routes>
    <Route path='/' element={<Navigate to='/home'/>} />
    <Route path='/home' element={< Home/>} />
    <Route path='/foods' element={<AllFoods/>} />
    <Route path='/foods/:id' element={<FoodDetails/>} />
    <Route path='/cart-checkout' element={<CartCheckout/>} />
    {/* <Route path='/checkout' element={<Checkout/>} /> */}
    <Route path='/login' element={<Login/>} />
    <Route path='/register' element={<Register/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/users'>
      <Route index element={<List/>} />
      <Route path=':userId' element={<Single/>} />
      <Route path='new' element={<New inputs = {userInputs} title='Add New User'/>} />
    </Route>

    <Route path='/products'>
      <Route index element={<List/>} />
      <Route path=':productId' element={<Single/>} />
      <Route path='new' element={<New inputs={productInputs}/>} inputs ={productInputs} title='Add New Product' />

    </Route>


  </Routes>
}

export default Routers