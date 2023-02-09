
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



const AboutUs = () => {
    return (
        <div>
            <section className="pt-0">
                {/*  <Category /> */}
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg="12" md="6" className="text-center w-50">
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
                                We keep trying to improve the on the positive remarks and work on the negative remarks to to 
                                catch up as soon as possible.{" "}
                            </p>
                        </Col>

                        <Col lg="6" md="6">
                            <div className="hero__img">
                                <img src={Hero3} alt="hero-img" className="w-100" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* <section className="pt-0">
                <Category />
            </section> */}
            <section>
                <Container>
                    <Row>

                        {featureData.map((item, index) => (
                            <Col lg="4" md="6" sm="6" key={index} className="mt-5">
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

            <section className="why__choose-us">
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
            </section>

        </div>
    )
}

export default AboutUs;