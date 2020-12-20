import React from "react";
import "../styles/TableTitle.css";
function TableTitle() {
  return (
    <div className="wrapper">
      <div className="row">
        <div className="table-title col-1">Image</div>
        <div className="table-title col-3">Name</div>
        <div className="table-title col-3">Phone Number</div>
        <div className="table-title col-3">Email</div>
        <div className="table-title col-2">DOB</div>
      </div>
      <hr className="rule"></hr>
    </div>
  );
}

export default TableTitle;
