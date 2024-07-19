import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Experience = () => {
  return (
    <React.Fragment>
      <div className="mt-20  min-h-screen-minus-100 flex flex-col "id="experience">
        <div className="About-Container1">
          <div className="text-white font-HomeSection flex items-center">
            <header className="AboutHeader text-xl">
              <span>03</span>.My Experience
            </header>
            <div className="HeaderLiner ml-4"></div>
          </div>
        </div>

        <div className="pb-3 pt-2 ml-10 socialIconsInMobile lg:hidden flex-row text-white font-Navbar">
          <a
            href="https://github.com/RajaImayaBharathi"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn&ensp;.&ensp;
          </a>
          <a
            href="https://www.linkedin.com/in/raja-imaya-bharathi"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub&ensp;.&ensp;
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            LeetCode&ensp;&ensp;
          </a>
        </div>




        {/* First card */}
        <div className="m-10 mt-36 flex flex-col space-y-5">
          <div className="space-y-5 mb-3 mr-10">
            <div className="text-highlightOne" id="title">
              <p>
              <span className="font-Navbar">01</span>. Full Stack Engineer{" "}
                <span className="text-white">
                  &ensp;.&ensp;{` ( Sep 2019 ~ May 2024)`}
                </span>
              </p>
            </div>
            <a
              className="flex text-white items-center font-bold text-3xl space-x-4 "
              href="https://metaphorhub.com/"
              target="_blank"
            >
              <img src="public/metaLogo.png" alt="logo" className="w-11 rounded-sm" />
              <div>
                <p>Metaphor Hub</p>
                <p className="text-sm font-normal">Coimbatore, India</p>
              </div>
              <GoArrowUpRight />
            </a>
            <div className="text-white max-w-[700px] companyInfo">
              <p>
                <span className="text-white">Metaphor Hub</span> is a prominant
                Custom Software development club and a club for open source{" "}
                {`contributor's`} founded in september 2019, dedicated to
                providing tailored solutions and strategic guidance to
                organizations across industries.
              </p>
            </div>
            <div className="text-white flex flex-wrap">
              <p
                className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
              >
                Java
              </p>
              <p
                className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
              >
                C
              </p>
              <p
                className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
              >
                Python
              </p>
              <p
                className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
              >
                C++
              </p>
              <p
                className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
              >
                C#
              </p>
              <p
                className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
              >
                NEXT JS
              </p>
              <p
                className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
              >
                React JS
              </p>
              <p
                className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
              >
                Node JS
              </p>
              <p
                className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
              >
                Express.js
              </p>
              <p
                className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
              >
                Restful API
              </p>
              <p
                className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
              >
                Postgres SQL
              </p>
              <p
                className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
              >
                MongoDB
              </p>
              <p
                className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
              >
                MySQL
              </p>
              <p
                className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
              >
                AWS
              </p>
              <p
                className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
              >
                Git & Github
              </p>
              <p
                className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
              >
                JSON Web Tokens
              </p>
            </div>
          </div>
          <div className="p-10 rounded-lg bg-zinc-900 text-white space-y-4 experienceInfo">
            <p>
              As a <span>Freelance full stack Engineer</span>, I developed and
              debugged cutting-edge progressive Web Applications, SaaS{" "}
              {`(Software as a Service)`}, achieving a remarkable 60% increase
              in loading speed with lightning-fast performance.
            </p>
            <p>
              In Metaphor Hub I have completed more then{" "}
              <span>10+ full stack project</span> for a real time clients all
              over india. Crafted highly interactive, creative and user-friendly
              interfaces that significatly boosted client efficiency by 40% and
              sales through bespoke, top-tire solutions.
            </p>
            <p>
              Focused on debugging and optimizing code to improve efficiency and
              readability, and colloborating with frontend and backend sector to
              implement enhancements aligned with business goals
            </p>
            <p>Some of my clients are</p>
            <div className="text-white flex flex-wrap">
              <p
                className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm "
              >
                Hyndai Motors
              </p>
              <p
                className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
              >
                KMP Speed Parcel Service
              </p>
              <p
                className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
              >
                Hindustan Travel
              </p>
            </div>
          </div>
        </div>

        {/* Second card */}
        
      </div>
    </React.Fragment>
  );
};

export default Experience;
