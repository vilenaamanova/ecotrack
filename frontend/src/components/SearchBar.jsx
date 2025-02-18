import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() !== "") {
      onSearch(query);
    }
  };

  return (
    <div className="p-2 bg-white shadow-lg rounded-lg flex items-center max-w-md flex-shrink-0">
      <input
        type="text"
        placeholder="Введите город..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 w-48 rounded-md"
      />
      <button
        onClick={handleSearch}
        className="ml-2 bg-[#19185E] text-white px-4 py-2 rounded-md"
      >
        Найти
      </button>
    </div>
  );
};

export default SearchBar;

