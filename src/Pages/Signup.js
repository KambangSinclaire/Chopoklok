import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/Authcontext";
import { motion } from "framer-motion";
import "../Styles/siginup.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState("");

  const { createUser } = UserAuth();
  const navigate = useNavigate();
  const handleShow = () => {
    setShow(!show);
  };
  const passwordValidator = () => {
    const regEx = /^.{8,16}$/;
    if (regEx.test(password)) {
      setMessage("password is  valid");
    } else if (!regEx.test(password)) {
      setMessage("atleast 8 characters");
    } else {
      setMessage("");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
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
          <h2 className="contact-header">Create an Account </h2>
        </div>

        <form onSubmit={handleSubmit}>
        <div className="contact-input">
          <label>Name</label>
          <input type="text" placeholder="Name"  className="input-text" />
          </div>
          <div className="contact-input">
          <label>Email</label>
          
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              placeholder="Email"
              className="input-text"
            />
          </div>
       
          <div className="contact-input">
          <label>Password</label>
            <div className="wrap">
              <input
                onChange={(e) => setPassword(e.target.value)}
                type={show ? "text" : "password"}
                name="password" placeholder="Password"
                className="input-text"
              />
              <img
                onClick={handleShow}
                className="contact-eye"
                src="../Image/eye.png"
                alt=""
              />
            </div>
          </div>
          <div className="middle">
            <button onClick={passwordValidator} className="btn1">
              Sign Up
            </button>
          </div>
          <p className="message">{message} </p>
          <p className="contact-text">
            Already have an account?
            <Link to="/signin" className="link1">
              {" "}
              Signin
            </Link>
          </p>
          <div className="contact-social">
            <img className="contact-icon" src="../Image/facebook.png" alt="" />
            <img className="contact-icon" src="../Image/instagram.png" alt="" />
            <img className="contact-icon" src="../Image/whatsapp.png" alt="" />
          </div>
        </form>
      </div>
      <div className="contact-wrapper2" >
        <img src="../Image/tree.jpeg" alt="hero-img" className="signup-image" />
      </div>
    </motion.div>
  );
}

export default Signup;
