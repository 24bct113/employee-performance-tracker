import React, { useState } from "react";

function AddEmployee({ addEmployee }) {

  const [name, setName] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !rating) {
      alert("Enter employee details");
      return;
    }

    addEmployee({
      name: name,
      rating: Number(rating)
    });

    setName("");
    setRating("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Employee Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />

      <button type="submit">Add Employee</button>

    </form>
  );
}

export default AddEmployee;
