import { useState } from "react";

function Search({ cb = Function.prototype }) {
  const [value, setValue] = useState("");

  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleSumbit();
    }
  };

  const handleSumbit = () => {
    console.log(cb(value));
  };

  return (
    <div className="row">
      <div className="input-field col s12">
        <input
          type="search"
          name=""
          id="search-field"
          placeholder="search"
          onKeyDown={handleKey}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </div>
      <button
        className="btn"
        style={{ position: "absolute", top: "8rem", right: "3rem" }}
        onClick={handleSumbit}
      >
        Search
      </button>
    </div>
  );
}

export default Search;
