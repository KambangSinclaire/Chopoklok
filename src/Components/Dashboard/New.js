import './New.scss';
import React, { useState } from 'react';
import Sidebar from '../Dash-Sidebar/Sidebar';
import Navbar from '../Dash-Navbar/Navbar';
import { DriveFolderUploadOutlined } from '@mui/icons-material';

const New = ({inputs,title}) => {
  const [file,setFile] = useState('')
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
              <form>
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
                <button>Send</button>    
              </form>
            </div>
          </div>

      </div>
    </div>
  )
}

export default New