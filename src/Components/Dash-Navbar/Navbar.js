import React from 'react'
import './Navbar.scss'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import FullScreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import avatar from "../../assets/Images/res-logo.png"
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search ...' />
          <SearchOutlinedIcon/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className='icon'/>
            English
          </div>
          <div className="item">
            <DarkModeOutlined className='icon'/>
            
          </div>
          <div className="item">
            <FullScreenExitOutlinedIcon className='icon'/>
            
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className='icon'/>
            <div className="counter">1</div>
            
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className='icon'/>
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className='icon'/>
            
          </div>
          <div className="item">
            <img src={avatar} alt="" className='avatar' />
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar