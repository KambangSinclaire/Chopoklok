import '../Styles/orders.css';
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
import "../Styles/menu.css";
import { Link, useNavigate } from "react-router-dom";
import products from "../assets/Data/Products";
import React, { useState, useEffect } from "react";
import Filters from "./Filters";
import Animate from './textAnimator';
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import featureImg01 from "../assets/Images/service-01.webp";
import featureImg02 from "../assets/Images/service-02.webp";
import featureImg03 from "../assets/Images/service-03.webp";

import { StickyContainer, Sticky } from 'react-sticky';
import foodCategoryImg01 from "../assets/Images/hamburger.png";
import foodCategoryImg02 from "../assets/Images/pizza.png";
import foodCategoryImg03 from "../assets/Images/bread.png";
import foodCategoryImg04 from "../assets/Images/african_food.png";
import foodCategoryImg05 from "../assets/Images/beverages.png";
import foodCategoryImg06 from "../assets/Images/ice_cream.png";
import foodCategoryImg07 from "../assets/Images/fastfood_logo.png";
import ProductCard from '../Components/UI/Product-card/ProductCard';

import category from "../Components/UI/Category/Category";



function Orders() {



  const [text, setText] = useState("")
  const [fullText] = useState(
    "Filtering products by category."
  )
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index])
        setIndex(index + 1)
      }, 40)
    }
  }, [index])


  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  // const product2 = products;

  const [hotPizza, setHotPizza] = useState([]);
  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "BURGER") {
      const catName = "BURGER";
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "BREAD") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bread"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "AFRICA") {
      const filteredProducts = products.filter(
        (item) => item.category === "African"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "BEVERAGES") {
      const filteredProducts = products.filter(
        (item) => item.category === "Beverages"
      );

      setAllProducts(filteredProducts);
    };

    if (category === "ICE_CREAM") {
      const filteredProducts = products.filter(
        (item) => item.category === "Ice_Cream"
      );

      setAllProducts(filteredProducts);
    };

    if (category === "FAST_FOOD") {
      const filteredProducts = products.filter(
        (item) => item.category === "FastFood"
      );

      setAllProducts(filteredProducts);
    }

  }, [category]);

  

  return (
    <>

{/* <div>
  <StickyContainer>
    <Sticky>{({ style }) => (
      <header style={style}>
        This is a sticky header </header>
    )}
    </Sticky> <ul>
      {data.map((x) => {
        return (<li key={x}>{x}</li>)
      })} </ul>
  </StickyContainer>
</div> */}

      <motion.div className="main"

        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ Y: 0, transition: { duration: 1.5 } }}
      >
        
        <div className="filter">
          <h2>{text}</h2>
          <section >
            <Col lg="12">
              <div className="food__category d-block align-items-center justify-content-center mb-1">
                <button className="category__btn all__button m-0" onClick={() => setCategory('ALL')}>All</button>
                <button className="category__btn d-block align-items-center m-0" onClick={() => setCategory('BURGER')}>
                  <img src={foodCategoryImg01} alt="" />
                  Burger
                </button>
                <button className="category__btn d-block align-items-center m-0" onClick={() => setCategory('PIZZA')}>
                  <img src={foodCategoryImg02} alt="" />
                  Pizza
                </button>
                <button className="category__btn d-block align-items-center m-0" onClick={() => setCategory('BREAD')}>
                  <img src={foodCategoryImg03} alt="" />
                  Bread
                </button>
                <button className="category__btn d-block align-items-center m-0" onClick={() => setCategory('AFRICA')}>
                  <img src={foodCategoryImg04} alt="" />
                  Local Cuisine
                </button>
                <button className="category__btn d-block align-items-center m-0" onClick={() => setCategory('BEVERAGES')}>
                  <img src={foodCategoryImg05} alt="" />
                  Beverages
                </button>
                <button className="category__btn d-block align-items-center m-0" onClick={() => setCategory('ICE_CREAM')}>
                  <img src={foodCategoryImg06} alt="" />
                  Ice Cream
                </button>
                <button className="category__btn d-block align-items-center m-0" onClick={() => setCategory('FAST_FOOD')}>
                  <img src={foodCategoryImg07} alt="" />
                  Fastfood
                </button>
              </div>
            </Col>
          </section>
        </div>
        <div className="p-cards">
          <MDBContainer>
            <h4 className="mt-5 mb-0 align-items-center">
              <strong className="align-items-center">Order List</strong>
            </h4>

            <MDBRow>

              {
                allProducts.map(item => (
                  <Col lg='3' md='4' key={item.id} className="mt-5">

                    <ProductCard item={item} />

                  </Col>
                ))
              }


              {/* <MDBCol md="6" lg="4" className="mb-4">
        <MDBCard>
          <MDBRipple
            rippleColor="light"
            rippleTag="div"
            className="bg-image rounded hover-zoom"
          >
            <MDBCardImage
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp"
              fluid
              className="w-100"
            />
            <a href="#!">
              <div className="mask">
                <div className="d-flex justify-content-start align-items-end h-100">
                  <h5>
                    <span className="badge bg-success ms-2">Eco</span>
                  </h5>
                </div>
              </div>
              <div className="hover-overlay">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </div>
            </a>
          </MDBRipple>
          <MDBCardBody>
            <a href="#!" className="text-reset">
              <h5 className="card-title mb-3">Product name</h5>
            </a>
            <a href="#!" className="text-reset">
              <p>Category</p>
            </a>
            <h6 className="mb-3">$61.99</h6>
          </MDBCardBody>
        </MDBCard>
      </MDBCol> */}



              {/* <MDBCol md="6" lg="4" className="mb-4">
        <MDBCard>
          <MDBRipple
            rippleColor="light"
            rippleTag="div"
            className="bg-image rounded hover-zoom"
          >
            <MDBCardImage
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/shoes%20(3).webp"
              fluid
              className="w-100"
            />
            <a href="#!">
              <div className="mask">
                <div className="d-flex justify-content-start align-items-end h-100">
                  <h5>
                    <span className="badge bg-danger ms-2">-10%</span>
                  </h5>
                </div>
              </div>
              <div class="hover-overlay">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </div>
            </a>
          </MDBRipple>
          <MDBCardBody>
            <a href="#!" className="text-reset">
              <h5 className="card-title mb-3">Product name</h5>
            </a>
            <a href="#!" className="text-reset">
              <p>Category</p>
            </a>
            <h6 className="mb-3">
              <s>$61.99</s>
              <strong className="ms-2 text-danger">$50.99</strong>
            </h6>
          </MDBCardBody>
        </MDBCard>
      </MDBCol> */}







            </MDBRow>
          </MDBContainer>
        </div>
        {/* <section>
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
      </section> */}
      </motion.div>

    </>
  );
}
export default Orders;
{/* export default Menu; */ }

{/* <motion.div
        className="main"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ Y: 0, transition: { duration: 1.5 } }}
      >
        <div className="filter">
          <h1>Filtered Products</h1>
        </div>
        <div className="p-cards">
          <MDBContainer fluid className="my-5 text-center">
            <h4 className="mt-4 mb-5">
              <strong>Menu</strong>
            </h4>

            <MDBRow>
              <MDBCol md="12" lg="4" className="mb-4">
                <MDBCard>
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image rounded hover-zoom"
                  >
                    <MDBCardImage
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/belt.webp"
                      fluid
                      className="w-100"
                    />
                    <a href="#!">
                      <div className="mask">
                        <div className="d-flex justify-content-start align-items-end h-100">
                          <h5>
                            <span className="badge bg-primary ms-2">New</span>
                          </h5>
                        </div>
                      </div>
                      <div className="hover-overlay">
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.15)",
                          }}
                        ></div>
                      </div>
                    </a>
                  </MDBRipple>
                  <MDBCardBody>
                    <a href="#!" className="text-reset">
                      <h5 className="card-title mb-3">Product name</h5>
                    </a>
                    <a href="#!" className="text-reset">
                      <p>Category</p>
                    </a>
                    <h6 className="mb-3">$61.99</h6>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="6" lg="4" className="mb-4">
                <MDBCard>
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image rounded hover-zoom"
                  >
                    <MDBCardImage
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp"
                      fluid
                      className="w-100"
                    />
                    <a href="#!">
                      <div className="mask">
                        <div className="d-flex justify-content-start align-items-end h-100">
                          <h5>
                            <span className="badge bg-success ms-2">Eco</span>
                          </h5>
                        </div>
                      </div>
                      <div className="hover-overlay">
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.15)",
                          }}
                        ></div>
                      </div>
                    </a>
                  </MDBRipple>
                  <MDBCardBody>
                    <a href="#!" className="text-reset">
                      <h5 className="card-title mb-3">Product name</h5>
                    </a>
                    <a href="#!" className="text-reset">
                      <p>Category</p>
                    </a>
                    <h6 className="mb-3">$61.99</h6>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="6" lg="4" className="mb-4">
                <MDBCard>
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image rounded hover-zoom"
                  >
                    <MDBCardImage
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/shoes%20(3).webp"
                      fluid
                      className="w-100"
                    />
                    <a href="#!">
                      <div className="mask">
                        <div className="d-flex justify-content-start align-items-end h-100">
                          <h5>
                            <span className="badge bg-danger ms-2">-10%</span>
                          </h5>
                        </div>
                      </div>
                      <div class="hover-overlay">
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.15)",
                          }}
                        ></div>
                      </div>
                    </a>
                  </MDBRipple>
                  <MDBCardBody>
                    <a href="#!" className="text-reset">
                      <h5 className="card-title mb-3">Product name</h5>
                    </a>
                    <a href="#!" className="text-reset">
                      <p>Category</p>
                    </a>
                    <h6 className="mb-3">
                      <s>$61.99</s>
                      <strong className="ms-2 text-danger">$50.99</strong>
                    </h6>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="12" lg="4" className="mb-4">
                <MDBCard>
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image rounded hover-zoom"
                  >
                    <MDBCardImage
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(23).webp"
                      fluid
                      className="w-100"
                    />
                    <a href="#!">
                      <div className="mask">
                        <div className="d-flex justify-content-start align-items-end h-100">
                          <h5>
                            <span className="badge bg-success ms-2">Eco</span>
                            <span className="badge bg-danger ms-2">-10%</span>
                          </h5>
                        </div>
                      </div>
                      <div className="hover-overlay">
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.15)",
                          }}
                        ></div>
                      </div>
                    </a>
                  </MDBRipple>
                  <MDBCardBody>
                    <a href="#!" className="text-reset">
                      <h5 className="card-title mb-3">Product name</h5>
                    </a>
                    <a href="#!" className="text-reset">
                      <p>Category</p>
                    </a>
                    <h6 className="mb-3">
                      <s>$61.99</s>
                      <strong className="ms-2 text-danger">$50.99</strong>
                    </h6>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="6" lg="4" className="mb-4">
                <MDBCard>
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image rounded hover-zoom"
                  >
                    <MDBCardImage
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(17).webp"
                      fluid
                      className="w-100"
                    />
                    <a href="#!">
                      <div className="mask">
                        <div class="d-flex justify-content-start align-items-end h-100"></div>
                      </div>
                      <div className="hover-overlay">
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.15)",
                          }}
                        ></div>
                      </div>
                    </a>
                  </MDBRipple>
                  <MDBCardBody>
                    <a href="#!" className="text-reset">
                      <h5 className="card-title mb-3">Product name</h5>
                    </a>
                    <a href="#!" className="text-reset">
                      <p>Category</p>
                    </a>
                    <h6 className="mb-3">$61.99</h6>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="6" lg="4" className="mb-4">
                <MDBCard>
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image rounded hover-zoom"
                  >
                    <MDBCardImage
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(30).webp"
                      fluid
                      className="w-100"
                    />
                    <a href="#!">
                      <div className="mask">
                        <div class="d-flex justify-content-start align-items-end h-100">
                          <h5>
                            <span className="badge bg-primary ms-2">New</span>
                            <span className="badge bg-success ms-2">Eco</span>
                            <span className="badge bg-danger ms-2">-10%</span>
                          </h5>
                        </div>
                      </div>
                      <div className="hover-overlay">
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.15)",
                          }}
                        ></div>
                      </div>
                    </a>
                  </MDBRipple>
                  <MDBCardBody>
                    <a href="#!" className="text-reset">
                      <h5 className="card-title mb-3">Product name</h5>
                    </a>
                    <a href="#!" className="text-reset">
                      <p>Category</p>
                    </a>
                    <h6 className="mb-3">
                      <s>$61.99</s>
                      <strong className="ms-2 text-danger">$50.99</strong>
                    </h6>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </motion.div> */}




{/* <Section>
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
      </Section> */}




{/* export default Orders; */ }
