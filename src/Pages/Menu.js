
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
import { Link } from "react-router-dom";
import Products from "../assets/Data/Products";
import { motion } from "framer-motion";
import "../Styles/menu.css";

import React, { useState, useEffect } from "react";
import {ToastContainer,toast} from "react-toastify";
import products from "../assets/Data/Products";



// import { Container, Row, Col} from "";

function Menu() {
  const notify  = () => toast("Sorry, you must be logged in to view this page")
  const product2 = Products;
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  const [text, setText] = useState("")
  const [fullText, setFullText] = useState(
      "Just look through and place your..."
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


  const [hotPizza, setHotPizza] = useState([]); 
  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []); 
  return (<>
    <motion.div className="main"
    
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    exit={{ Y: 0, transition: { duration: 1.5 } }}
    >
      <div className="filter">
          <h1>{text}</h1>
          <section>
          <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between color-white" onClick={notify} >
                  <Link to="/orders">Order now</Link> <i className="ri-arrow-right-s-line"></i>
                  </button>
                  </div>
          </section>
      </div>
      <div className="p-cards">
      <MDBContainer>
    <h4 className="mt-4 mb-5">
      <strong>MENU</strong>
    </h4>

    <MDBRow>
    
          {Products.map((prods,i)=>(
                    <MDBCol md="10" lg="4" className="mb-4">
                    <MDBCard key={i}>
                      <MDBRipple
                        rippleColor="light"
                        rippleTag="div"
                        className="bg-image rounded hover-zoom"
                      >
                        <MDBCardImage
                          src={prods.image01}
                          fluid
                          className="w-100"
                        />
                        <a href="#!">
                          <div className="mask">
                           
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
                          <h5 className="card-title mb-3">{prods.title}</h5>
                        </a>
                        <a href="#!" className="text-reset">
                          <p>{prods.category}</p>
                        </a>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
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
    </motion.div>
  
</>
);
}

export default Menu;

{/* 
    <motion.div
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
      </motion.div>

*/}
