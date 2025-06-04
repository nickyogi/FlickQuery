import React from "react";
import { Link } from "react-router-dom";

function Header({ wallpaper }) {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5),rgba(0,0,0,0.8)), url(https://image.tmdb.org/t/p/original/${
          wallpaper.backdrop_path || wallpaper.profile_path
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="w-full h-[75vw] sm:h-[60vh] p-3 sm:p-8  flex flex-col justify-end items-start gap-2 text-zinc-100"
    >
      <h1 className=" font-semibold sm:text-[3vw] text-[8vw] leading-none select-none">
        {wallpaper.name ||
          wallpaper.title ||
          wallpaper.original_name ||
          wallpaper.original_title}
      </h1>
      <p className="text-xs w-[60%] select-none">
        <span className="sm:block hidden">{wallpaper.overview.slice(0, 200)}</span>
        <span className="sm:hidden text-xs leading-none">{wallpaper.overview.slice(0, 70)}</span>
        <Link
          to={`/${wallpaper.media_type}/details/${wallpaper.id}`}
          className=" text-lg text-[#6556CD]  cursor-pointer  hover:text-yellow-500 duration-300"
        >
          <span className="text-base sm:text-xl">...more</span>
        </Link>
      </p>
      <p className="flex gap-5 select-none">
        <span className="flex items-center text-xs">
          <svg
            className="sm:h-5 sm:w-5 h-4 w-4 mr-1 text-[#EA8100]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M17 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9V3H15V1H17V3ZM4 9V19H20V9H4ZM6 13H11V17H6V13Z"></path>
          </svg>{" "}
          {wallpaper.release_date || wallpaper.first_air_date ||"No Information"}
        </span>
        <span className="flex items-center text-xs">
          <svg
            className="sm:h-5 sm:w-5 h-4 mr-1 text-[#EA8100]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M17.9981 7L20.3075 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934C2 3.44476 2.45531 3 2.9918 3H5.99807L3.68867 7H5.99807L8.30747 3H11.9981L9.68867 7H11.9981L14.3075 3H17.9981L15.6887 7H17.9981Z"></path>
          </svg>{" "}
          {wallpaper.media_type.toUpperCase()}
        </span>
      </p>
      <Link
        to={`/${wallpaper.media_type}/details/${wallpaper.id}/trailer`}
        className="select-none bg-[#6556CD] font-medium sm:mb-5 text-sm sm:text-inherit px-2 py-2 rounded tracking-wider hover:text-[#6556CD] hover:bg-[#ffffff] duration-300"
      >
        Watch Trailer
      </Link>
    </div>
  );
}

export default Header;
