import React, { useContext } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import FoodDetails from '../Pages/FoodDetails';
// import Cart from '../Pages/Cart';
// import Checkout from '../Pages/Checkout';
import Contact from '../Pages/Contact';
import Login from '../Components/Dashboard/Login'
import Register from '../Pages/Register';
import Notify from '../Pages/Notification';
import Cart_checkout from '../Pages/Cart_checkout';
import ProductCard from '../Pages/ProductCard';
import Home from "../Pages/Home";
import AllFoods from "../Pages/AllFoods";

/* import Cart from '../Pages/Cart'; */
/* import Checkout from '../Pages/Checkout'; */
// import Contact from "../Pages/Contact";
// import Login from "../Components/Dashboard/Login";
import Signup from "../Pages/Signup";
import Signin from "../Pages/Signin";
/* import Dashboard from '../Pages/Dashboard'; */
//import Nav from '../Components/Dashboard/Dash_Nav'
import Dashboard from "../Components/Dashboard/Dashboard";
import List from "../Components/Dashboard/List";
import Single from "../Components/Dashboard/Single";
import New from "../Components/Dashboard/New";
import { productInputs, userInputs } from "../formSource";
import CartCheckout from "../Pages/Cart_checkout";
import { AuthContext } from "../Components/Context/AuthContext";
import Menu from "../Pages/Menu";
import { AuthContextProvider } from "../context/Authcontext";
import ProtectedRoute from "../Pages/protectedRoute";
import { AnimatePresence } from "framer-motion";
/* import Users from "../Pages/Users"; */
import Account from "../Pages/Account";
import Checkout from "../modules/Sales/Checkout";
import Orders from "../Pages/Orders";

const Routers = () => {
  // const { currentUser } = useContext(AuthContext);
  // const RequireAuth = ({ childern }) => {
  //   console.log(currentUser);
  //   return currentUser ? childern : <Navigate to="/login" />;
  // };
  const location = useLocation();
  return (
    <AnimatePresence>
      <AuthContextProvider>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/foods/:id" element={<FoodDetails />} />
          <Route path="/cart-checkout" element={<CartCheckout />} />
          {/* <Route path='/checkout' element={<Checkout/>} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/Notification" element={<Notify/>} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/signin" element={<Signin />} />
          {/* <Route path="/users" element={<Users />}> */}
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          >
            {/*  <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={userInputs} title="Add New User" />}
            /> */}
          </Route>

          <Route path="/account" element={<Account />} />

          {/* <Route path="/users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={userInputs} title="Add New User" />}
            />
          </Route> */}

          <Route
            path="/products"
            element={<New inputs={productInputs} title="Add New Product" />}
          ></Route>
          <Route path="/orders">
            <Route index element={<List />} />
            <Route path=":orderId" element={<Single />} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </AnimatePresence>
  );
};

export default Routers;
