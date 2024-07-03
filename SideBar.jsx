import React from "react";
import { IoMailOpenOutline } from "react-icons/io5";
const SideBar = () => {
  return (
    <React.Fragment>
      <div className="flex items-center justify-end p-4 bg-gray-800 text-white ">
        <div className="font-roboto flex items-center space-x-2 max-w-[20px]">
          <span className="text-left">rajaimayabharathi@gmail.com</span>
          <IoMailOpenOutline />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SideBar;
