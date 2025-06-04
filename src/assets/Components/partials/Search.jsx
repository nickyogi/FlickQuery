import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "../../Utils/axios";

function Search() {
  const { pathname } = useLocation();
  const changColor = (pathname.length > 2) ? true : false;

    

  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);

  const [searchBar, setSearchBar] = useState(false);

  const getSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearches(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSearches();
  }, [query]);

  return (
    <div className={`z-30 relative flex items-center justify-end sm:justify-start gap-3 mx-auto ${searchBar ? 'pr-2 bg-[#1F1E24]' : 'pr-2'} `}>
      <svg
        onClick={() => setSearchBar((prev) => !prev)}
        
        className={` cursor-pointer ${
          changColor ? "h-16 w-16 text-zinc-100 bg-[#6556cd] p-[3vw]  rounded-full" : "h-8 w-8 mt-[2.8vw] text-zinc-400"
        }`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
      </svg>

      { searchBar &&
      <div className="h-screen w-screen z-40 fixed select-none top-0 left-0 py-2 px-2 bg-[#1F1E24]">
       <div className="flex items-center justify-between">
       <img className="h-10 w-10 -mt-1 mr-[5vw]" src="/Logo.png" alt="logo" />
       <input
        onClick={() => setSearchBar(true)}
        className={`${
          searchBar ? "w-[75vw]" : "w-[7vw]"
        } bg-transparent px-3 py-1 text-sm outline-none border-[1px] duration-300 
          border-zinc-600 rounded-full text-zinc-100`}
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        type="text"
        placeholder="Search..."
      /> 
        <svg
          className={`h-10 w-10 ${
            changColor ? "text-zinc-100" : "text-zinc-400"
          } font-thin cursor-pointer`}
          onClick={() => {
            setQuery("")
            setSearchBar(false)
          }}

          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
        </svg>
        </div>
      
      <div className="w-full mt-3 p-0 overflow-auto rounded-md shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]">
        {searches.map((s, i) => (
          <Link
            to={`/${s.media_type}/details/${s.id}`}
            key={i}
            className="hover:bg-zinc-300 hover:text-black bg-transparent rounded-xl  text-zinc-100  w-full flex items-center justify-start gap-5 px-5 py-4 border-b border-zinc-800"
          >
            <img
              loading="lazy"
              className="sm:h-12 sm:w-12 h-10 w-10 rounded-md object-cover shadow-lg"
              src={
                s.backdrop_path || s.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      s.backdrop_path || s.profile_path
                    }`
                  : "/Images/NoImage.PNG"
              }
              alt="Image not found"
            />
            <span>
              {s.name || s.title || s.original_name || s.original_title}
            </span>
          </Link>
        ))}
      </div> 
      </div>
      }
      
    </div>
  );
}

export default Search;
