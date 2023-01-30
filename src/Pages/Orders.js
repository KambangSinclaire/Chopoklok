//import './Orders.css';
import ProductCard from "../Components/UI/Product-card/ProductCard";
import hotPizza from "../";

import React, {useState, useEffect} from 'react';
 import Helmet from '../Components/Helmet/Helmet.js';
 import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
 
 import '../Styles/hero-section.css';
 import {Link} from 'react-router-dom';
 import Category from "../Components/UI/Category/Category.js";

import '../Styles/home.css';

import featureImg01 from "../assets/Images/service-01.webp";
import featureImg02 from "../assets/Images/service-02.webp";
import featureImg03 from "../assets/Images/service-03.webp";

import products from "../assets/Data/Products.js";

import foodCategoryImg01 from "../assets/Images/hamburger.png";
import foodCategoryImg02 from "../assets/Images/pizza.png";
import foodCategoryImg03 from "../assets/Images/bread.png";

/* import ProductCard from "../Components/UI/Product-card/ProductCard.js";
 */
import whyImg from "../assets/Images/location.png";

import networkImg from "../assets/Images/network.png";

function Orders() {
  return (
    <>
    {/* <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Just make a choice from the list below</h2>
            </Col>

            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`all__btn  ${
                    Category === "ALL" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    Category === "BURGER" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("BURGER")}
                >
                  <img src={foodCategoryImg01} alt="" />
                  Burger
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    Category === "PIZZA" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("PIZZA")}
                >
                  <img src={foodCategoryImg02} alt="" />
                  Pizza
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    Category === "BREAD" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("BREAD")}
                >
                  <img src={foodCategoryImg03} alt="" />
                  Bread
                </button>
              </div>
            </Col>



            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6"  key={item.id}  className="mt-5">
                 {<ProductCard item={item} />} 
              </Col>
            ))}



          </Row>
        </Container>
      </section>




      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5 ">
              <h2>Hot Pizza</h2>
            </Col>

            {hotPizza.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id}>
                 <ProductCard item={item} /> 
              </Col>
            ))}
          </Row>
        </Container>
      </section> */}
      
      <section>
      <div className="container d-flex d-inline-flex">
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
      Payment Methods<input type="radio" />
      <br/>
      Payment Methods
      <select>
        <option>Select an option</option>
        <option>MTN Money</option>
        <option>Orange Money</option>
        <option>Paypal</option>
        <option>Credit Card</option>
        <option>Visa</option>
      </select>
      </section>
    </>
  )
}

export default Orders;
