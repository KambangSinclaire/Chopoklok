import Category from "../Components/UI/Category/Category";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBIcon,
    MDBBtn,
    MDBRipple,
  } from "mdb-react-ui-kit";
import Products from "../assets/Data/Products";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";


const Filters = () =>{
const product2 = Products;
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(Products);

  const [hotPizza, setHotPizza] = useState([]); 
  useEffect(() => {
    const filteredPizza = Products.filter((item) => item.category === "Pizza");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []); 

  useEffect(() => {
    if (Category === "ALL") {
      setAllProducts(Products);
    } 

    if (Category === "BURGER") {
      const filteredProducts = Products.filter(
        (item) => item.category === "Burger"
      );

      setAllProducts(filteredProducts);
    }

    if (Category === "PIZZA") {
      const filteredProducts = Products.filter(
        (item) => item.category === "Pizza"
      );

      setAllProducts(filteredProducts);
    }

    if (Category === "BREAD") {
      const filteredProducts = Products.filter(
        (item) => item.category === "Bread"
      );

      setAllProducts(filteredProducts);
    }
  }, [Category]);
}

export default Filters;