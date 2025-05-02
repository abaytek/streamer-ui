import React from "react";
import StreamType from "./streamType";
import Search from "./search";
import Profile from "./profile";

const Header = () => {
  return (
    <div className="pb-4">
      <div className="flex items-center justify-between">
        <StreamType />
        <Search />
        <Profile />
      </div>
    </div>
  );
};

export default Header;
