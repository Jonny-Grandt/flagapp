import React, { useState, useEffect } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(query);
    }, 300); // Debounce: väntar 300ms efter att användaren slutar skriva
    return () => clearTimeout(handler); // Rensar timeout vid ny input
  }, [query, onSearch]);

  return (
    <input
      type="text"
      placeholder="Sök..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="search-bar"
    />
  );
};

export default SearchBar;
