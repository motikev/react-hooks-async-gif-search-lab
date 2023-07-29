// GifSearch.js
import React, { useState } from "react";

const GifSearch = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for GIFs..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default GifSearch;
