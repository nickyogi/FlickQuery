import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

function Trailer() {
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytVideo = useSelector((state) => state[category].info.videos);

  const navigate = useNavigate();

  return (
    <div className="absolute z-40 backdrop-blur-sm h-screen w-full top-0 left-[0] bg-[rgba(0,0,0,0.8)] flex items-center justify-center">
      <div onClick={() => navigate(-1)} className="absolute top-3 left-5 flex items-center">
        <svg
          
          className="h-10 w-10 cursor-pointer -mr-2 text-white hover:text-[#6556CD]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
        </svg>{" "}
        <span className="text-white text-sm sm:text-xl font-semibold">Back</span>
      </div>

      {ytVideo == undefined ? (
        <img
          className="h-[45vw] w-[80vw] sm:h-[40vw] sm:w-[70vw]"
          src="/Images/404-NotFound.gif"
          alt="404 Not Found"
        />
      ) : (
        <ReactPlayer
          controls
          width={"80vw"}
          height={"45vw"}
          url={`https://www.youtube.com/watch?v=${ytVideo.key}`}
        />
      )}
    </div>
  );
}

export default Trailer;
