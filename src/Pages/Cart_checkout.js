import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../Styles/cart_checkout.css";
import { useSelector, useDispatch } from "react-redux";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { motion } from "framer-motion";
import CartItem from "../Pages/cartItem";
import ClearChopoklokCart from "../Features/Cart/CartSlice";
import { Link } from "react-router-dom";
import ClearCartModal from "../Components/Modals/ClearCartModal";

export default function CartCheckout() {
  const dispatch = useDispatch();
  const { cartItems, itemAmountInCart, totalPrice, category } = useSelector(
    (store) => store.cart
  );
  /*  if (itemAmountInCart < 1) {
    alert("Your cart is empty");
  } */
  return (
    <motion.section
      className="h-100 h-custom"
      style={{ backgroundColor: "#eee" }}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ Y: 0, transition: { duration: 1.5 } }}
    >
      <MDBContainer className="h-100 py-5">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBCard className="shopping-cart" style={{ borderRadius: "15px" }}>
              <MDBCardBody className="text-black">
                <MDBRow>
                  <MDBCol lg="7" className="px-5 py-4">
                    <MDBTypography
                      tag="h3"
                      className="mb-5 pt-2 text-center fw-bold text-uppercase"
                    >
                      Your products
                    </MDBTypography>

                    {/*  <CartItem /> */}

                    {cartItems.map((item) => {
                      return (
                        <CartItem key={item} {...item} img={item.image01} />
                      );
                    })}

                    <hr
                      className="mb-4"
                      style={{
                        height: "2px",
                        backgroundColor: "#1266f1",
                        opacity: 1,
                      }}
                    />

                    {/* <div className="d-flex justify-content-between px-x">
                      <p className="fw-bold">Discount:</p>
                      <p className="fw-bold">95$</p>
                    </div> */}
                    <div
                      className="d-flex justify-content-between p-2 mb-2"
                      style={{ backgroundColor: "#e1f5fe" }}
                    >
                      <MDBTypography tag="h5" className="fw-bold mb-0">
                        Total:
                      </MDBTypography>
                      <MDBTypography tag="h5" className="fw-bold mb-0">
                        {totalPrice.toFixed(2)} FCFA
                      </MDBTypography>
                    </div>
                  </MDBCol>

                  {/*  <MDBCol lg="5" className="px-5 py-4">
                    <MDBTypography
                      tag="h3"
                      className="mb-5 pt-2 text-center fw-bold text-uppercase"
                    >
                      Payment
                    </MDBTypography>

                    <form className="mb-5">
                      <MDBInput
                        className="mb-5"
                        label="Card number"
                        type="text"
                        size="lg"
                        defaultValue="1234 5678 9012 3457"
                      />

                      <MDBInput
                        className="mb-5"
                        label="Name on card"
                        type="text"
                        size="lg"
                        defaultValue="John Smith"
                      />

                      <MDBRow>
                        <MDBCol md="6" className="mb-5">
                          <MDBInput
                            className="mb-4"
                            label="Expiration"
                            type="text"
                            size="lg"
                            minLength="7"
                            maxLength="7"
                            defaultValue="01/22"
                            placeholder="MM/YYYY"
                          />
                        </MDBCol>
                        <MDBCol md="6" className="mb-5">
                          <MDBInput
                            className="mb-4"
                            label="Cvv"
                            type="text"
                            size="lg"
                            minLength="3"
                            maxLength="3"
                            placeholder="&#9679;&#9679;&#9679;"
                            defaultValue="&#9679;&#9679;&#9679;"
                          />
                        </MDBCol>
                      </MDBRow>

                      <p className="mb-5">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit
                        <a href="#!"> obcaecati sapiente</a>.
                      </p>

                     

                      <Link to="/sales">
                        <MDBBtn
                          block
                          size="lg"
                          onClick={() => dispatch(ClearChopoklokCart)}
                        >
                          Proceed to checkout
                        </MDBBtn>
                      </Link>

                      <MDBTypography
                        tag="h5"
                        className="fw-bold mb-5"
                        style={{ position: "absolute", bottom: "0" }}
                      >
                        <a href="#!">
                          <MDBIcon fas icon="angle-left me-2" />
                          Back to shopping
                        </a>
                      </MDBTypography>
                    </form>
                  </MDBCol> */}

                  <ClearCartModal />
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </motion.section>
  );
}
