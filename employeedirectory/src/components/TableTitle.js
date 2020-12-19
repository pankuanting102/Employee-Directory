import React  from 'react';
import '../styles/TableTitle.css';
function TableTitle () {
  return (
      <div className="container">
          <div className="table-title">Profile Image</div>
          <div className="table-title">Name</div>
          <div className="table-title">Phone Number</div>
          <div className="table-title">Email</div>
          <div className="table-title">Date of Birth</div>
          <hr></hr>
      </div>
  )
}

export default TableTitle;