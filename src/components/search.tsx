import Image from "next/image";
import React from "react";

const Search = () => {
  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        placeholder="Search"
        className="border-none outline-none text-4xl bg-white rounded-full text-black px-4  min-h-[55px]"
      />
      <div className="bg-white rounded-full h-[55px] w-[55px] flex items-center justify-center">
        <Image height={30} width={30} src="/assets/7.png" alt="microphone" />
      </div>
    </div>
  );
};

export default Search;
