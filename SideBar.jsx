import React from "react";
import { IoMailOpenOutline } from "react-icons/io5";
const SideBar = () => {
  /* const email = 'rajaimayabharathi@gmail.com'; */
  /* const emailArray = email.split(''); */

  return (
    <React.Fragment>
      <div className="flex items-center justify-end p-4 text-white bg-maindark">
        <div className="font-roboto flex items-center space-x-2 max-w-[20px] text-left inline-block transform rotate-90 space-between">
          <span className="text-left">rajaimayabharathi@gmail.com</span>
          <IoMailOpenOutline />
        </div>
      </div> 
      {/* <div className="flex flex-col items-center text-white font-roboto ">
      {emailArray.map((char, index) => (
        <span key={index} className="text-lg">
          {char}
        </span>
      ))}
    </div> */}
    </React.Fragment>
  );
};

export default SideBar;
