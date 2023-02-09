import React, { useState, useEffect } from "react";
import Helmet from "../Components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "../Styles/hero-section.css";
import { Link } from "react-router-dom";
import Category from "../Components/UI/Category/Category.js";

import "../Styles/home.css";
//import "../Styles/menu.css";

import featureImg01 from "../assets/Images/service-01.webp";
import featureImg02 from "../assets/Images/service-02.webp";
import featureImg03 from "../assets/Images/service-03.webp";

import { motion } from "framer-motion";
/* import ProductCard from "../Components/UI/Product-card/ProductCard.js";
 */
import whyImg from "../assets/Images/whyChop.svg";

import newHero from "../assets/Images/chopoklok_Del.svg";
import Hero3 from "../assets/Images/eating.svg";
import HomeSliderImages from "./HomeSliderImages.js";

/* import TestimonialSlider from "../Components/UI/Slider/TestimonialSlider.js"; */
const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "We know the essence of timely supply of food, hence our app name 'Chopoklok' and the facilities we've put in place to ensure its success. ",
  },

  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: "There's also provision of a well equiped air-conditioned lounge for those who want to be served at the restaurant. Eating at our lounge requires no transport fare charges and the comfortable space is at the disposal of our dine-in clients at no additional cost",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: "Picking up your commands yourself is also allowed with no additional fee. If delayed by us upon pick-up, we entertain your patience with snacks while you wait and you can't wait for long because our capable hands got you all covered",
  },
];

const Home = () => {
  const notify = () => toast("Sorry, you must be logged in to view this page")
  /*   const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  const [hotPizza, setHotPizza] = useState([]); 

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []); 

  useEffect(() => {
    if (Category === "ALL") {
      setAllProducts(products);
    } 

    if (Category === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      );

      setAllProducts(filteredProducts);
    }

    if (Category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );

      setAllProducts(filteredProducts);
    }

    if (Category === "BREAD") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bread"
      );

      setAllProducts(filteredProducts);
    }
  }, [Category]); */
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ Y: 0, transition: { duration: 1.5 } }}
    >

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content  ">
                <h5 className="mb-3">Easy way to make an order</h5>
                <h1 className="mb-4 hero__title">
                  <span>HUNGRY?</span> Sign up <br /> and have food deliverd
                </h1>

                {/*  <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                  magni delectus tenetur autem, sint veritatis!
                </p> */}

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between color-white" onClick={notify}  >
                    <Link to="/orders">Order now</Link> <i className="ri-arrow-right-s-line"></i>
                  </button>

                  <button className="all__foods-btn">
                    <Link to="/menu" >See Available Dishes</Link> <i className="ri-arrow-right-s-line"></i>
                  </button>
                </div>

                <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i className="ri-car-line"></i>
                    </span>{" "}
                    Cheap Transportation
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i className="ri-shield-check-line"></i>
                    </span>{" "}
                    100% secure checkout
                  </p>
                </div>
              </div>
              {/*   </div> */}
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                {<HomeSliderImages/>}
                <img src={newHero} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* <section className="pt-0">
        <Category />
      </section> */}
      {/* <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">What we serve</h5>
              <h2 className="feature__title">Just stay home,</h2>
              <h2 className="feature__title">
                we will <span>take care</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
                Stay home and enjoy quality food services as if you were live at the shop itself.
              </p>
              <p className="feature__text">
                Maintaining high moral standards with all clients is also one of our prioritized
                strong points. We don't joke with our customers and their remarks be it positive or negative.
                We keep trying to improve the on the positive remarks and work on the negative remarks to to catch up as soon as possible.{" "}
              </p>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={Hero3} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}
      {/* <section className="pt-0">
        <Category />
      </section> */}
      <section>
        <Container>
          <Row>
            {/* <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">What we serve</h5>
              <h2 className="feature__title">Just sit back at home</h2>
              <h2 className="feature__title">
                we will <span>take care</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolor, officiis?
              </p>
              <p className="feature__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, eius.{" "}
              </p>
            </Col> */}

            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-1">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  <h5 className=" fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

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
                    category === "ALL" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BURGER" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("BURGER")}
                >
                  <img src={foodCategoryImg01} alt="" />
                  Burger
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "PIZZA" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("PIZZA")}
                >
                  <img src={foodCategoryImg02} alt="" />
                  Pizza
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BREAD" ? "foodBtnActive" : ""
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
      </section> */}

      {/* <section className="pt-0">
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

      {/* <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="why-tasty-treat" className="w-100" />
            </Col>

            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">
                  Why <span>ChopOklok?</span>
                </h2>
                <p className="tasty__treat-desc">
                  Our 15 years of experience in the field has really 
                  made us experts in Customer Care, Food Quality 
                  Ensurance and Hygiene.
                </p>

                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose__us-title d-flex align-items-center gap-2 ">
                      <i className="ri-checkbox-circle-line"></i> Fresh and
                      tasty food.
                    </p>
                    <p className="choose__us-desc">
                      Welcome home, our professional chefs got your back. Every item required to maintain all 
                      food item's hygienic conditions are available and dishes are composed diet-wise.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i className="ri-checkbox-circle-line"></i> Quality
                      support
                    </p>
                    <p className="choose__us-desc">
                      Taking into consideration how congested our roads are, we've managed to master routes that 
                      will lead us to you just in time with our diverse delivery servicesw. We always offer our best to make sure you are satisfied.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i className="ri-checkbox-circle-line"></i>Order from any
                      location{" "}
                    </p>
                    <p className="choose__us-desc">
                      Distance used to define limits in services but with this, there is no barrier.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}

      {/*  <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial ">
                <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
                <h2 className="testimonial__title mb-4">
                  What our <span>customers</span> are saying
                </h2>
                <p className="testimonial__desc">
                  Thanks for easing things for us. This service is a milestone in modern day tech 
                  and discovering it is grace. Distance would really have been a great 
                  barrier but thanks to this online service that we could be served Fresh 
                  delicious meals just after some clicks.
                </p>

                <TestimonialSlider />
              </div>
            </Col>

            <Col lg="6" md="6">
              <img src={networkImg} alt="testimonial-img" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section> */}

      <ToastContainer />
    </motion.div>
  );
};

export default Home;
