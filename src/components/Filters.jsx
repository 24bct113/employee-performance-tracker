import React from "react";

function Filters({ setSearch }) {

  return (
    <div>

      <input
        type="text"
        placeholder="Search Employee"
        onChange={(e) => setSearch(e.target.value)}
      />

    </div>
  );
}

export default Filters;
