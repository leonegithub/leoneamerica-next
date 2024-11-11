import React, { useState } from "react";
import "./searchbar.css";

const SearchBar: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <div className="input-group flex items-center">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="searchbar"
        placeholder="Cerca..."
      />
      <div id="lens">
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default SearchBar;
