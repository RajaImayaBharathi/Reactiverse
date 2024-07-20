import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import { Link } from "react-scroll";
import gsap from "gsap";

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navItems = [
    { href: "home", label: "Home" },
    { href: "about", label: "About Me" },
    { href: "experience", label: "Experience" },
    { href: "projects", label: "Projects" },
    { href: "achievements", label: "Achievements" },
  ];

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };


  /* Animation Setup */
  const NavRef= useRef(null);
  const initialMount = useRef(true);

  useEffect(() => {
    if (initialMount.current) {
      gsap.fromTo(
        NavRef.current,
        { y: -100 ,opacity: 0},
        { y: 0, opacity: 1, duration: 1, ease: "power1.out" }
      );
      initialMount.current = false;
    }
  }, []);

  return (
    <React.Fragment>
      <div className="navbarStyling bg-mainDark fixed w-full top-0" ref={NavRef}>
      <nav className="flex lg:bg-SecondaryDark justify-between items-center py-2 px-8 text-white mx-4 my-4  rounded-full font-Navbar">
            
            <div className="cursor-pointer">
              <img src="/iconImg.svg" alt="" />
            </div>
  
            <div className="hidden lg:flex items-center">
              <p className="text-sm">{`{/*`}&ensp;&ensp;</p>
              <div className="flex space-x-8 items-center">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.href}
                    spy={true} 
                    smooth={true} 
                    offset={-120} 
                    duration={500} 
                    className="hover:border-b-2 border-highlightOne hover:transition ease-in-out rounded-sm"
                  >
                    <span className="text-highlightOne">{`0${index+1}`}</span>.
                    {item.label}
                  </Link>
                ))}
              </div>
              <p className="items-center text-sm">&ensp;&ensp;{`}`}</p>
            </div>
  
  
            <div className="hidden lg:flex button-borders">
              <button className="NavBarBtn">{`{Let's Talk}`}</button>
            </div>
  
            <div className="lg:hidden">
                <button
                  type="button"
                  className="text-white focus:outline-none"
                  onClick={toggleModal}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                  </svg>
                </button>
              </div>
          </nav>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-mainDark p-4 rounded-lg w-3/4 max-w-sm min-h-[500px]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl text-white items-center">Menu</h2>
              <button
                type="button"
                className="text-white focus:outline-none"
                onClick={toggleModal}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  spy={true} 
                  smooth={true} 
                  offset={-120} 
                  duration={500}
                  className="text-white"
                  onClick={toggleModal}
                >
                  <span className="text-highlightOne">{`0${index + 1}`}</span>.
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default NavBar;
