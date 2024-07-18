'use client'
import React, { useState, useContext} from 'react';
import Link from 'next/link';
import SearchBar from './SearchBar';
//import BlogPostModal from './BlogPostModal'; 
import { UserContext } from "@/app/utils/userContext";

const SubNavbar = () => {

  const [isOpen, setIsOpen] = useState(false); 
  const { user } = useContext(UserContext);

  const openModal = () => setIsOpen(true); 
  const onClose = () => setIsOpen(false); 

  return (
    <>
      <nav className="bg-[--lightish-purple-ridlley] text-[--white-text-ridlley] h-[40px] w-full">
        <div className="flex items-center justify-between h-full px-2 md:px-4 lg:px-8">
          <div className="flex relative items-center justify-around pl-8 w-8/12 lg:w-[80%] md:w-[80%]">
            <div className="hidden sm:flex items-center w-full sm:w-auto md:w-8/12">
              <SearchBar className="w-80% sm:w-[150px] sm:flex-1" /> 
            </div>
          </div>
          <div className="flex items-center">
            <button onClick={openModal} className="bg-[#4C277D] px-4 py-1 rounded-md text-[12px] hover:bg-yellow-400 hover:text-slate-800">Book Appointment</button>
          </div>
        </div>
      </nav>

      {/* <BlogPostModal isOpen={isOpen} onClose={onClose} user={user} /> */}
    </>
  );
};

export default SubNavbar;
