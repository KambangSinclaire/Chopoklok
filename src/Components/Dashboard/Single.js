import './Sigle.scss';
import React from 'react';
import Sidebar from '../Dash-Sidebar/Sidebar';
import Navbar from '../Dash-Navbar/Navbar';
import Chart from '../Charts/Charts'
import Table2 from '../Table/Table';

const Single = () => {
  return (
    <div className='single'>
        <Sidebar/>
        <div className="singleContainer">
          <Navbar/>
          <div className="top">
            <div className="left">
              <div className="editButton">Edit</div>
              <h1 className="title">Information</h1>
              <div className="item">
                <img src="../Image/hero.png" alt="" className="itemImg" />
                <div className="details">
                  <h1 className="itemTitle">Zeldris Madara</h1>
                  <div className="detailItem">
                    <span className="itemKey">Email:</span>
                    <span className="itemValue">ZelMadara@gmail.com</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Phone:</span>
                    <span className="itemValue">+1 2345 12 14</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Address:</span> 
                    <span className="itemValue">Market. Mambanda. Douala</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Country</span>
                    <span className="itemValue">Cameroon</span>
                  </div> 
                </div>
              </div>
            </div>
            <div className="right">
              <Chart aspect={3/1} title='User Spending ( Last 6 Months)'/>
            </div>
          </div>
          <div className="bottom">
            <h1 className="title">Last Transactions</h1>
            <Table2/>
          </div>
        </div>

    </div>
    
  )
}

export default Single