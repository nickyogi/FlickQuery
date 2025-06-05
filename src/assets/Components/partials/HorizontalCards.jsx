import React from "react";
import { Link, useLocation } from "react-router-dom";
import Loader from "./Loader";

function HorizontalCards({ cardData, title }) {
  const { pathname } = useLocation();
  const mediaType = pathname.includes("movie") ? "movie" : "tv";
  return (
    <div className="flex flex-wrap sm:flex-nowrap gap-3 overflow-y-none overflow-x-auto text-white">
      {cardData.map((data, index) => (
        <Link
          to={`/${data.media_type || title}/details/${data.id}`}
          key={index}
          className="relative rounded-lg mx-auto sm:mx-0 overflow-hidden sm:w-[25vw]  md:w-[20vw] w-[40vw] bg-zinc-900 sm:h-[30vw] md:h-[22vw]  h-[60vw] mb-5 shrink-0 cursor-pointer]"
        >
          {data.backdrop_path || data.poster_path ? (
            <img
              loading="lazy"
              className="w-full sm:h-[50%] h-[42%] object-cover select-none"
              src={`https://image.tmdb.org/t/p/original/${
                data.backdrop_path || data.poster_path
              }`}
              alt="poster"
            />
          ) : (
            <img
              loading="lazy"
              className="w-full sm:h-[50%] h-[42%] object-cover select-none"
              src="/Images/404-NoImage.jpg"
              alt="poster"
            />
          )}
          <div className="text-white p-2 mb-10 ">
            <h1
              style={{ lineHeight: "1", letterSpacing: "-1px" }}
              className=" font-semibold mb-3 leading-none !sm:leading-3 select-none"
            >
              <span className="hidden sm:inline">
                {data.name ||
                  data.title ||
                  data.original_name ||
                  data.original_title}
              </span>
              <span className="sm:hidden text-[4.5vw]">
                {(
                  data.name ||
                  data.title ||
                  data.original_name ||
                  data.original_title
                ).slice(0, 22)}
              </span>
            </h1>
            <p className="text-xs w-[95%] sm:h-[4.5vw] h-[13vw]  sm:mb-2 select-none overflow-x-hidden overflow-auto leading-none">
              <span className="sm:text-xs leading-none text-[2.8vw]">
                {data.overview.slice(0, 150)}
              </span>
              <span className="text-zinc-300 cursor-pointer">...more</span>
            </p>

            <p className="absolute bg-[#18181b] bottom-2 pt-2 flex sm:gap-5 gap-2 select-none">
              <span className="flex items-center sm:text-[1.5vw] md:text-[0.8vw]  text-[2.7vw]">
                <svg
                  className="h-3 w-3 mr-1 text-[#EA8100]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9V3H15V1H17V3ZM4 9V19H20V9H4ZM6 13H11V17H6V13Z"></path>
                </svg>{" "}
                {data.release_date || data.first_air_date || "No Information"}
              </span>
              <span className="flex items-center sm:text-[1.5vw] md:text-[0.8vw] text-[2.7vw]">
                <svg
                  className="h-3 w-3 mr-1 text-[#EA8100]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.9981 7L20.3075 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934C2 3.44476 2.45531 3 2.9918 3H5.99807L3.68867 7H5.99807L8.30747 3H11.9981L9.68867 7H11.9981L14.3075 3H17.9981L15.6887 7H17.9981Z"></path>
                </svg>{" "}
                {data.media_type
                  ? data.media_type.toUpperCase()
                  : title
                  ? title.toUpperCase()
                  : mediaType.toUpperCase()}
              </span>
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default HorizontalCards;
