import React, { useState } from "react";

function Search() {
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);
  const [results, setResults] = useState("");
  return <div>
    <form onSubmit={() => {}}>
        <input type="text" value={search} onChange={() => {}} />
        <button type="submit">Submit</button>
    </form>
  </div>;
}

export default Search;
