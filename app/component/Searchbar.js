import React from "react";
import { IoSearch } from "react-icons/io5";
function Searchbar() {
  return (
    <div className="mt-8 w-11/12 relative">
      <input
        type="text"
        placeholder="دنبال چی میگردی ؟ "
        className="w-full text-center font-bold py-1 rounded-md border-black border outline-none focus:ring-0 focus:bg-accent text-black placeholder-slate-900"
      />
      <button className="absolute left-1 bottom-1">
        <IoSearch className="size-6" />
      </button>
    </div>
  );
}

export default Searchbar;
