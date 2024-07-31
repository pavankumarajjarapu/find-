import React, { useState } from "react";

function EmployeeDetails() {
  let[employeDetails,setEmployeDetails]=useState([])
  let GetEmployeDetailsFromDB = async () => {
    let reqOptions = {
      method: "GET",
    };
    let JSONData = await fetch(
      "http://localhost:2387/employedetails",
      reqOptions
    );
    let JSOData = await JSONData.json();
    setEmployeDetails(JSOData)
    console.log(JSOData);
  };

  return (
    <div>
      <button type="button"
        onClick={() => {
          GetEmployeDetailsFromDB();
        }}
      >
        Get Data
      </button>
      <div>
        
        
        <thead>
          <th>S.no</th>
          <th>id</th>
          <th>Image</th>
          <th>Gender</th>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Email</th>
          <th>Department</th>
          <th>Car</th>
          <th>Country</th>
        </thead>
        <tbody>
          {employeDetails.map((ele,index)=>{
            return <tr key={index}>
            <td>{index+1}</td>
            <td>{ele.id}</td>
            <td><img src={ele.image}></img></td>
            <td>{ele.gender}</td>
            <td>{ele.first_name}</td>
            <td>{ele.last_name}</td>
            <td>{ele.email}</td>
            <td>{ele.department}</td>
            <td>{ele.cars}</td>
            <td>{ele.country}</td>
            </tr>
            
          })}
          
        </tbody>
      </div>
      
    </div>
  );
}

export default EmployeeDetails;
