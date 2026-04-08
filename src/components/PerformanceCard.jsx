import React from "react";

function PerformanceCard({ employee }) {

  let status = "";
  let color = "";

  if (employee.rating >= 8) {
    status = "Excellent";
    color = "green";
  } 
  else if (employee.rating >= 5) {
    status = "Average";
    color = "orange";
  } 
  else {
    status = "Needs Improvement";
    color = "red";
  }

  return (
    <div className="card">

      <h3>{employee.name}</h3>

      <p>Rating: {employee.rating}</p>

      <p style={{ color: color }}>{status}</p>

    </div>
  );
}

export default PerformanceCard;
