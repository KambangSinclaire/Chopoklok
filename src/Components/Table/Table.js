import React from "react";
import "./Table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import African_2 from "../../assets/Images/African_food_2_Eru_and_garri.jpeg";

const Table2 = () => {
  const rows = [
    {
      id: 17,
      product: "Eru and Garri",
      amount: 1000,
      image01: African_2,
      customer: "John Smith",
      date: "1 March",
      category: "African",
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 17,
      product: "Eru and Garri",
      amount: 1000,
      image01: African_2,
      customer: "John Smith",
      date: "1 March",
      category: "African",
      method: "Cash on Delivery",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table /* sx={{ minWidth: 650 }} */ /*  aria-label="simple table" */>
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              /* sx={{ '&:last-child td, &:last-child th': { border: 0 } }} */
            >
              <TableCell /* component="th" scope="row" */>{row.id}</TableCell>
              <TableCell
                className="table
            Cell"
              >
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Table2;
