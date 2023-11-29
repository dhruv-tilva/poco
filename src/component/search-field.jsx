import { useState } from "react";

const SearchField = ({ handleSearch, changeList }) => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="max-w-md mx-auto mt-5">
      <input
        type="text"
        id="subject"
        className="shadow-sm  border border-gray-100 placeholder:text-[#ffc222] text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-50 outline-none"
        placeholder="Search Blogs..."
        required
        value={searchValue}
        onChange={(e) => {
          handleSearch(e.target.value);
          setSearchValue(e.target.value);
          if (e.target.value.length > 0) {
            changeList(false);
          } else {
            changeList(true);
          }
        }}
      />
    </div>
  );
};

export default SearchField;
