import React from "react";
import TopNav from "./partials/TopNav";
import { Link, useNavigate } from "react-router-dom";


function About() {
    const navigate = useNavigate();

    document.title = "FlickQuery | About";

    return (
        <div className="text-zinc-400  flex flex-col justify-between sm:block h-screen w-full bg-[#1F1E24] overflow-x-hidden overflow-y-auto">
          <nav className="w-full h-[8vh] flex items-center justify-between  mt-[1vw] sm:px-5 pt-2">
            <div className="flex items-center gap-1 sm:gap-3">
              <span title="Back">
                <svg
                  onClick={() => navigate(-1)}
                  className="h-10 w-10 cursor-pointer -mr-2 text-white hover:text-[#6556CD]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
                </svg>
              </span>
              <Link title="Home" to="/">
                <svg
                  className="h-6 w-6 cursor-pointer -mr-2 text-zinc-100 hover:text-[#6556CD]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20ZM11 13V19H13V13H11Z"></path>
                </svg>
              </Link>
            </div>
    
            <div className="text-white w-[42vw] font-semibold flex items-center justify-end gap-10 text-sm mr-5">
              <TopNav />
            </div>
          </nav>
          <div className="px-[10vw] sm:px-[7vw]">
            <h1 className="text-[8vw]  mt-[8vw] sm:mt-0 sm:text-[3vw] font-bold text-[#6556CD] tracking-wider">
              About US
            </h1>
            <p className="text-[3vw] sm:text-[1.2vw] font-semibold w-full sm:w-full sm:leading-[1.5vw]">
            FlickQuery is a modern web application designed to be your one-stop destination for exploring movies, TV shows, and celebrities. With a sleek and intuitive interface, it offers curated sections for trending and popular content, along with smart filters based on media type and duration. Users can watch official trailers directly within the app using React Player and enjoy a seamless browsing experience thanks to infinite scrolling. Built with cutting-edge technologies like React, React Router DOM, Redux, Tailwind CSS, and React Infinite Scroll, FlickQuery delivers both performance and style in one powerful entertainment platform.
            </p>
          </div>
          <div className=" flex flex-col sm:flex-row mt-[2vw]">
            <div className="relative sm:w-[50%] w-full mt-[15vw] sm:mt-[5vw] flex flex-col">
              
              <div className="flex mx-auto border-2 border-zinc-500 rounded-lg flex-col w-[80%] gap-[5vw] sm:gap-[2vw]">
                
                <div className="w-full  mt-[12vw] sm:mt-[6vw] flex flex-col itemc-center justify-center">
                 <h1 className="text-[4vw] sm:text-[2.2vw] text-center font-bold">Neeraj Kumar Yogi</h1>
                 <p className="text-[3vw] sm:text-[1.2vw] text-center font-semibold mt-[1.5vw]  sm:mt-0 uppercase w-[80%] mx-auto sm:leading-[1.5vw]">Web Application Developer | Building Engaging Interfaces with React, Tailwind CSS, GSAP & Framer Motion | HTML, CSS, JavaScript</p>
                </div>

                <div className="mx-auto w-[90%]  sm:w-[70%] my-[1.5vw] text-[3.5vw] sm:text-[1.3vw] mb-[4vw] sm:mb-[1.5vw] flex flex-col justify-between gap-[2vw] sm:gap-[1vw]">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/neeraj-kumar-yogi"
                  className="bg-[#6556CD] flex items-center justify-center hover:bg-zinc-100 hover:text-[#6556CD] duration-300 h-[10vw] w-[70vw] sm:h-[3vw] sm:w-[25vw] text-white rounded font-semibold tracking-wider cursor-pointer"
                >
                  <svg
                    className=" h-[4vw] w-[4vw] sm:h-[1.5vw] sm:w-[1.5vw] -mt-[.8vw] sm:-mt-0  mr-[1vw] sm:mr-[0.2vw]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path>
                  </svg>{" "}
                  LinkedIn
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/nickyogi"
                  className="bg-[#6556CD]  flex items-center justify-center hover:bg-zinc-100 hover:text-[#6556CD] duration-300  h-[10vw] w-[70vw] sm:h-[3vw] sm:w-[25vw] text-white rounded font-semibold tracking-wider cursor-pointer"
                >
                  <svg
                    className=" h-[4vw] w-[4vw] sm:h-[1.5vw] sm:w-[1.5vw] -mt-[.8vw] sm:-mt-0  mr-[1vw] sm:mr-[0.2vw]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
                  </svg>{" "}
                  GitHub
                </a>
                <a
                  href="/contact"
                  className="bg-[#6556CD]  flex items-center justify-center hover:bg-zinc-100 hover:text-[#6556CD] duration-300  h-[10vw] w-[70vw] sm:h-[3vw] sm:w-[25vw] text-white rounded font-semibold tracking-wider cursor-pointer"
                >
                  <svg
                    className=" h-[4vw] w-[4vw] sm:h-[1.4vw] sm:w-[1.4vw] -mt-[.8vw] sm:-mt-0  mr-[1vw] sm:mr-[0.5vw]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path>
                  </svg>{" "}
                  E-Mail
                </a>
              </div>

              <div className="absolute bg-[#1F1E24] -top-[11vw] sm:-top-[5vw] left-[50%] -translate-x-[50%] border-2 border-zinc-400 w-[22vw] h-[22vw] sm:w-[11vw] sm:h-[11vw] rounded-full flex items-center justify-center">
              <img className=" w-[18vw] h-[18vw] sm:w-[10vw] sm:h-[10vw] rounded-full" src="/Images/picture.jpg" alt="" />
              </div>

              </div>
            </div>
            <div className="w-[90%] mx-auto flex items-end mt-[8vw] sm:mt-0 sm:mx-0 h-[55vw] sm:h-[40vw] overflow-hidden sm:w-[50%] h-full">
              <img
                className="sm:h-[32vw] -mb-[4vw] sm:-mb-[2vw]  sm:w-[45vw]"
                src="/Images/about.png"
                alt="Contact Image"
              />
            </div>
          </div>
        </div>
      );
    };

export default About