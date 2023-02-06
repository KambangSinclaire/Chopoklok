import "./New.scss";
import React, { useState } from "react";
import Sidebar from "../Dash-Sidebar/Sidebar";
import Navbar from "../Dash-Navbar/Navbar";
import { ClassSharp, DriveFolderUploadOutlined } from "@mui/icons-material";
import {
  doc,
  setDoc,
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../../firebase";

const New = ({ inputs, title }) => {
  const [productData, setProductData] = useState({});
  const [file, setFile] = useState("");
  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setProductData({ ...productData, [id]: value });
    console.log(productData);
  };
  const handleAdd = async (e) => {
    e.preventDefault();

    const newProduct = await addDoc(collection(db, "ChopOklok_products"), {
      ...productData,
      timeStamp: serverTimestamp(),
    });
    console.log(newProduct);
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={file ? URL.createObjectURL(file) : "../Image/hero.png"}
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={handleAdd}>
              <div className="formInput">
                <label htmlFor="file">
                  Image:
                  <DriveFolderUploadOutlined className="icon" />
                </label>
                <input
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  id="file"
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={handleInput}
                  />
                </div>
              ))}
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
