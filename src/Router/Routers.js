import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../Pages/Home";
import AllFoods from "../Pages/AllFoods";
import FoodDetails from "../Pages/FoodDetails";
/* import Cart from '../Pages/Cart'; */
/* import Checkout from '../Pages/Checkout'; */
import Contact from "../Pages/Contact";
import Login from "../Components/Dashboard/Login";
import Register from "../Pages/Register";
/* import Dashboard from '../Pages/Dashboard'; */
//import Nav from '../Components/Dashboard/Dash_Nav'
import Dashboard from "../Components/Dashboard/Dashboard";
import List from "../Components/Dashboard/List";
import Single from "../Components/Dashboard/Single";
import New from "../Components/Dashboard/New";
import { productInputs, userInputs } from "../formSource";
import CartCheckout from "../Pages/Cart_checkout";
import { AuthContext } from "../Components/Context/AuthContext";

const Routers = () => {
  
  const {currentUser} = useContext(AuthContext)
  const RequireAuth = ({ childern }) => {
    return currentUser ? childern : <Navigate to="/login" />;
  };
console.log(currentUser)
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/foods" element={<AllFoods />} />
      <Route path="/foods/:id" element={<FoodDetails />} />
      <Route path="/cart-checkout" element={<CartCheckout />} />
      {/* <Route path='/checkout' element={<Checkout/>} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
      <Route
        path="/dashboard"
        element={
          <RequireAuth>
        
            <Dashboard />
          </RequireAuth>
        }
      />
      <Route path="/users">
        <Route
          index
          element={
            
              <List />
          }
        />
        <Route
          path=":userId"
          element={
            
              <Single />
          }
        />
        <Route
          path="new"
          element={
            
              <New inputs={userInputs} title="Add New User" />
          
          }
        />
      </Route>

      <Route path="/products">
        <Route
          index
          element={
    
              <List />
          }
        />
        <Route
          path=":productId"
          element={
          
              
              <Single />
           
          }
        />
        <Route
          path="new"
          element={
           
              <New inputs={productInputs} title="Add New Product" />
            
          }
        />
      </Route>
    </Routes>
  );
};

export default Routers;
