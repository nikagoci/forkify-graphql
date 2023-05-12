import { Context } from "@/context";
import { FormEvent, useContext, useState } from "react";

const SearchBar = () => {
  const { addSearchValue } = useContext(Context);
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addSearchValue(searchValue);

    setSearchValue("");
  };

  return (
    <div className="form-control">
      <form
        onSubmit={handleSubmit}
        className="transition duration-200 input-group"
      >
        <input
          type="text"
          placeholder="Search…"
          className="w-32 sm:w-64 lg:w-96 focus:outline-none input input-bordered focus:shadow-lg"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button
          type="submit"
          className="border-none btn btn-square bg-orange_to_red "
        >
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
      </form>
    </div>
  );
};

export default SearchBar;
