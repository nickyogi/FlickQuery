import React from "react";
import { Link } from "react-router-dom";

function Card({ data, title }) {
  return (
    <div className="w-full  min-h-[22vw] px-5 py-2 gap-x-5 sm:gap-x-0 text-white overflow-hidden  flex flex-wrap bg-[#1F1E24]">
      {data.map((d, i) => (
        <Link
          to={`/${d.media_type || title}/details/${d.id}`}
          key={i}
          className="relative inline-block w-[38vw] sm:w-[14vw] items-start mx-auto my-5 flex flex-col gap-1 shrink-0"
        >
          <div className="min-h-[52vw] sm:min-h-[22vw]">
          <img
            loading="lazy"
            className="w-full  sm:h-[22vw] object-cover rounded-lg select-none shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]"
            src={`https://image.tmdb.org/t/p/original/${
              d.poster_path || d.backdrop_path || d.profile_path
            }`}
            alt="poster"
          />
          </div>
          <h3 className="min-h-[2vw]  sm:h-[5vh] font-semibold mb-2 sm:mb-3  select-none">
            {d.name || d.title || d.original_name || d.original_title}
          </h3>

          { d.vote_average ? ( d.vote_average !== "undefined" && d.vote_average !== null && (
            <div className="h-[10vw] w-[10vw] sm:h-[3vw] sm:w-[3vw] bg-yellow-500 text-[4vw] sm:text-[1.2vw] font-semibold absolute -right-[10%] top-[55%] rounded-full flex items-center justify-center shadow shadow-yellow-600">
              {(d.vote_average * 10).toFixed()} <sup>%</sup>
            </div>
          ) ) : " "}
        </Link>
      ))}
    </div>
  );
}

export default Card;
