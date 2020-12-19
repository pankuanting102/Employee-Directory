import React  from 'react';
import '../styles/TableTitle.css';
function TableTitle () {
  return (
      <div className="container">
          <div class="table-title">Profile Image</div>
          <div class="table-title">Name</div>
          <div class="table-title">Phone Number</div>
          <div class="table-title">Email</div>
          <div class="table-title">Date of Birth</div>
      </div>
  )
}

export default TableTitle;