import './New.scss';
import React, { useState } from 'react';
import Sidebar from '../Dash-Sidebar/Sidebar';
import Navbar from '../Dash-Navbar/Navbar';
import { DriveFolderUploadOutlined } from '@mui/icons-material';
import { addDoc, collection, doc, serverTimestamp, setDoc, Timestamp } from "firebase/firestore";  
import { auth, db } from '../../firebase';
import {createUserWithEmailAndPassword } from "firebase/auth";


const New = ({inputs,title}) => {
  const [file,setFile] = useState('');
  const [product, setProduct] = useState({});
  const handleInput = (e) => {
    const id = e.target.id 
    const value = e.target.value

    setProduct({...product, [id]: value});
    console.log(product)
  }
  const handleAdd = async(e) =>{
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        product.email,
        product.password
        )
      await setDoc(doc(db, "users", res.user.id), {
        ...product,
        Timestamp:serverTimestamp()
      });
      console.log(res)
      
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <div className='new'>
      <Sidebar/>
      <div className="newContainer">
          <Navbar/>
          <div className="top">
            <h1>{title}</h1>
          </div>
          <div className="bottom">
            <div className="left">
              <img src={file ? URL.createObjectURL(file):"../Image/hero.png"} alt="" />
            </div>
            <div className="right">
              <form onSubmit={handleAdd}>
              <div className="formInput">
                  <label htmlFor='file'>Image:<DriveFolderUploadOutlined className='icon'/></label>
                  <input type="file" onChange={(e)=>setFile(e.target.files[0])} id='file' style={{display:'none'}} />
                </div>
 
                {inputs.map((input)=>(
                   <div className="formInput" key={input.id}>
                   <label>{input.label}</label>
                   <input id={input.id} type={input.type} placeholder={input.placeholder} onChange={handleInput}/>
                 </div>
                ))}
                <button type='submit'>Send</button>    
              </form>
            </div>
          </div>

      </div>
    </div>
  )
}

export default New