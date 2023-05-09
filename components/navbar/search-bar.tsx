import React from "react";

const SearchBar = () => {
  return (
    <div className="form-control">
      <div className="transition duration-200 input-group">
        <input
          type="text"
          placeholder="Search…"
          className="focus:outline-none input input-bordered focus:shadow-lg"
        />
        <button className="border-none btn btn-square bg-orange_to_red ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
