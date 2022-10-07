import React from "react";
import "./Input.css";

const Input = ({ searchText, setSearchText }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search a job"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
};

export default Input;
