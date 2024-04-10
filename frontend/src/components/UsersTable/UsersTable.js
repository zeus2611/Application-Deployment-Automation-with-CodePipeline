import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./UsersTable.scss";
import { Link } from "react-router-dom";
// import ModalDelete from "../ModalDelete/ModalDelete";
import Pagination from "@mui/material/Pagination";
import { getStudents } from "../../services/Student";
import moment from "moment";

const BasicTable = props => {
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    getStudents().then(res => {
      if (res.status === "success") {
        setStudentData(res.data);
      }
    });
  }, []);

  return (
    <>
      {/* user-heading-block */}
      <div className="user-heading-block">
        <div className="title">Students</div>
        <Link className="btn btn-user" to="/add-student">
          <i className="icon icon-pluse"></i>
          <span>Add Student</span>
        </Link>
      </div>
      {/* table-content */}
      <TableContainer component={Paper} className="table-content">
        <Table className="user-table">
          <TableHead>
            <TableRow>
              <TableCell align="center">S.No</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Email Address</TableCell>
              <TableCell align="left">Branch Name</TableCell>
              <TableCell align="center">Created Date(UTC)</TableCell>
            </TableRow>
          </TableHead>
          {studentData.length > 0 ? (
            <TableBody>
              {studentData?.map((row, i) => (
                <TableRow key={i}>
                  <TableCell className="table_body_txt" align="left">
                    {i + 1}
                  </TableCell>
                  <TableCell className="table_body_txt" align="left">
                    {row.firstname} {row.lastname}
                  </TableCell>
                  <TableCell className="table_body_txt">{row.email}</TableCell>
                  <TableCell className="table_body_txt">{row.branch_name}</TableCell>
                  {/* <TableCell className="table_body_txt">{row.created_at}</TableCell> */}
                  <TableCell className="table_body_txt">{moment(row.created_at).format("DD-MM-YYYY hh:mm:ss")}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          ) : (
            <TableRow>
              <TableCell style={{ textAlign: "center", fontWeight: "500" }} colSpan={6}>
                No Result Found.
              </TableCell>
            </TableRow>
          )}
        </Table>
      </TableContainer>
    </>
  );
};
export default BasicTable;
