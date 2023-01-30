import './list.scss';
import React from 'react';
import Sidebar from '../Dash-Sidebar/Sidebar';
import Navbar from '../Dash-Navbar/Navbar';
import Datable from '../Datatable/Datable';

const List = () => {
  return (
    <div className='list'>
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
       < Datable/>
      </div>
    </div>
  )
}

export default List