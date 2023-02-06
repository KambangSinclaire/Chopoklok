import './New.scss';
import React, { useState } from 'react';
import Sidebar from '../Dash-Sidebar/Sidebar';
import Navbar from '../Dash-Navbar/Navbar';
import { DriveFolderUploadOutlined } from '@mui/icons-material';
import { doc, setDoc, addDoc, collection, serverTimestamp} from "firebase/firestore";  

import { db } from '../../firebase';

const New = ({inputs,title}) => {
  const [file,setFile] = useState('');
  const handleAdd = async(e) =>{
    e.preventDefault();
      try {
        const res =  await addDoc(collection(db, "products4",), {
      
          category: "Meal",
          description: "Delicious rice & stew with spaghetti and chicken sauce",
          price :"2000F",
          title :"Rice & stew",
          timeStamp: serverTimestamp()
              });
             
      } catch (error) {
        
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
                   <input type={input.type} placeholder={input.placeholder}/>
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