import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/Authcontext";

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
        <img
          className="signup-image"
          src="./image/drone.jpeg"
          alt=""
        />
      </div>
    </motion.div>
  );
}

export default Signin;
