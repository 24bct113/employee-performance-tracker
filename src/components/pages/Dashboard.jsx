import React, { useState } from "react";
import AddEmployee from "../components/AddEmployee.jsx";
import PerformanceCard from "../components/PerformanceCard.jsx";
import Filters from "../components/Filters.jsx";

function Dashboard({ logoutUser }) {

  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">

      <h1>Employee Performance Tracker</h1>

      <button onClick={logoutUser}>Logout</button>

      <AddEmployee addEmployee={addEmployee} />

      <Filters setSearch={setSearch} />

      <div className="card-container">
        {filteredEmployees.map((emp, index) => (
          <PerformanceCard key={index} employee={emp} />
        ))}
      </div>

    </div>
  );
}

export default Dashboard;
