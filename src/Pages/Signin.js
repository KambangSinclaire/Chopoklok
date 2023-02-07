import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/Authcontext";
import { motion } from "framer-motion";
import "../Styles/siginup.css";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { logIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/account");
    } catch (e) {
      setError(e.message);
      alert(e.message);
    }
  };

  return (
    <motion.div
      className="contact-container "
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ Y: 0, transition: { duration: 1.5 } }}
    >
      <div className="contact-wrapper1">
        <div>
          <h2 className="contact-header">Sign Into Account</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="contact-input">
            <label>Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              className="input-text"
            />
          </div>
          <div className="contact-input">
            <label>Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="email"
              className="input-text"
            />
          </div>
          <div className="btnres">
            <div className="middle">
              <button className="btn1">Sign In</button>
            </div>
          </div>
          <p className="message"></p>
          <p className="contact-text">
            Dont have an account?
            <Link className="link" to="/signup">
              {" "}
              Signup
            </Link>
          </p>
        </form>
        <div className="contact-social">
          <img className="contact-icon" src="../Image/facebook.png" alt="" />
          <img className="contact-icon" src="../Image/instagram.png" alt="" />
          <img className="contact-icon" src="../Image/whatsapp.png" alt="" />
        </div>
      </div>
      <div>
        <img className="signup-image" src="../Image/drone.jpeg" alt="" />
      </div>
    </motion.div>
  );
}

export default Signin;

/* 
import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import "../Styles/Signin.css";
import Avatar from "../assets/Images/signin.svg";

const Signin = () => {
  return (
    <div className="mainContainer">
      <MDBContainer fluid className="my-5">
        <MDBRow className="g-0 align-items-center ">
          <MDBCol col="6" className="inputBox" size="md">
            <MDBCard
              className="my-5 cascading-right"
              style={{
                background: "hsla(0, 0%, 100%, 0.55)",
                backdropFilter: "blur(30px)",
              }}
            >
              <MDBCardBody className="p-5 shadow-5 text-center">
                <h2 className="fw-bold mb-5">Sign up now</h2>

                <MDBRow>
                  <MDBCol col="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="First name"
                      id="form1"
                      type="text"
                    />
                  </MDBCol>

                  <MDBCol col="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Last name"
                      id="form2"
                      type="text"
                    />
                  </MDBCol>
                </MDBRow>

                <MDBInput
                  wrapperClass="mb-4"
                  label="Email"
                  id="form3"
                  type="email"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="form4"
                  type="password"
                />

                <div className="d-flex justify-content-center mb-4">
                  <MDBCheckbox
                    name="flexCheck"
                    value=""
                    id="flexCheckDefault"
                    label="Subscribe to our newsletter"
                  />
                </div>

                <MDBBtn className="w-100 mb-4" size="md">
                  sign up
                </MDBBtn>

                <div className="text-center">
                  <p>or sign up with:</p>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="facebook-f" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="twitter" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="google" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="github" size="sm" />
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol col="6" style={{ height: "inherit" }}>
            <img
              src={Avatar}
              className="w-100 rounded-4 shadow-4 avatar"
              alt=""
              fluid
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Signin;
 */
