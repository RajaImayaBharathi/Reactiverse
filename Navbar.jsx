import React from "react";
import "../App.css";

const NavBar = () => {
  const navItems = [
    { href: "#about", label: "About Me" },
    { href: "#experience", label: "Experience" },
    { href: "#achievements", label: "Achievements & Skills" },
    { href: "#projects", label: "My Projects" },
  ]; 


  return (
    <React.Fragment>
      <div className="navbarStyling bg-mainDark sticky top-0">
        <nav className="flex bg-SecondaryDark justify-between items-center py-2 px-8 text-white mx-4 my-4  rounded-full font-Navbar">
          <div className="">
            <img src="/iconImg.svg" alt="" />
          </div>

          <div className="flex items-center">
            <p className="text-sm">{`{/*`}&ensp;&ensp;</p>
            {/* <div className="flex space-x-8 items-center">
              <a href="#about" className="hover:border-b-2 border-highlightOne hover:transition ease-in-out rounded-sm">
                <span className="text-highlightOne">01</span>.About Me
              </a>
              <a href="#experience" className="hover:border-b-2 border-highlightOne hover:transition ease-in-out rounded-sm">
                <span className="text-highlightOne">02</span>.Experience
              </a>
              <a href="#experience" className="hover:border-b-2 border-highlightOne hover:transition ease-in-out rounded-sm">
                <span className="text-highlightOne">03</span>.Achievements & skills
              </a>
              <a href="#projects" className="hover:border-b-2 border-highlightOne hover:transition ease-in-out rounded-sm">
                <span className="text-highlightOne">04</span>.My Projects
              </a>
            </div> */}


            <div className="flex space-x-8 items-center">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="hover:border-b-2 border-highlightOne hover:transition ease-in-out rounded-sm"
                >
                  <span className="text-highlightOne">{`0${index + 1}`}</span>.
                  {item.label}
                </a>
              ))}
            </div>
            <p className="items-center text-sm">&ensp;&ensp;{`*/}`}</p>
          </div>
          <div className="button-borders">
            <button className="NavBarBtn">{`{Let's Talk}`}</button>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
