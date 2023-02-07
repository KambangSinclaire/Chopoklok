import React from "react";
import "./Dashboard.scss";
import Sidebar from "../Dash-Sidebar/Sidebar";
import Navbar from "../Dash-Navbar/Navbar";
import Widgets from "../Widgets/Widgets";
import Featured from "../ Featured/Featured";
import Charts from "../Charts/Charts";
import Table from "../Table/Table";
const Dashboard = () => {
  return (
    <div className="dash_home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widgets type="user" />
          <Widgets type="order" />
          <Widgets type="earnings" />
          <Widgets type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Charts aspect={3 / 1} title="Last 6 Months Revenue" />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
