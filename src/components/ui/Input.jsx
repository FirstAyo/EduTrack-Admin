import React from "react";
import searchIcon from "../../assets/icons/search.svg";

export default function Input() {
  return (
    <div className="flex items-center w-full">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search here..."
        className="px-4 py-2 w-[60%] 2xl:w-[40%] border-[#dae0ec] border focus:outline-0 bg-[#f4f6fc]"
      />
      <button className="bg-blue-200 p-3 border border-[#dae0ec] cursor-pointer rounded-r-sm">
        <img src={searchIcon} alt="search icon" className="w-4 h-4" />
      </button>
    </div>
  );
}
