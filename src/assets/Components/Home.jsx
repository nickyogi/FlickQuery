import React, { useEffect, useState } from "react";
import Header from "./partials/Header";
import SideNav from "./partials/SideNav";
import Nav from "./partials/Nav";
import TopNav from "./partials/TopNav";
import axios from "../Utils/axios";
import HorizontalCards from "./partials/HorizontalCards";
import DropDown from "./partials/DropDown";
import Loader from "./partials/Loader";
import { Link } from "react-router-dom";
import Favourates from "./Favourites";
import Search from "./partials/Search";

function Home() {
  document.title = "FlickQuery | Home";

  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState(null);
  const [category, setCategory] = useState("all");

  const [favourites, setFavourites] = useState(false);

  const getWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomdata =
      data.results[Math.floor(Math.random() * data.results.length) + 1];
      setWallpaper(randomdata);
    } catch (error) {
      console.log(error);
    }
  };



  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      setTrending(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    !wallpaper && getWallpaper();
    getTrending();
  }, [category]);

  return wallpaper && trending ? (
    // Full Home Component
    <div className=" h-screen w-screen flex ">
      <SideNav />

      {/* Other Half of home */}
      <div className="sm:w-[80%] w-full mx-auto h-full">
        {/* Home Top Nav */}
        <div className="flex items-center justify-between sm:px-5 px-2 h-[15vw] sm:h-[9vh]">
          <span className="hidden sm:inline">
            <Link title="Home" to="/">
              <svg
                onClick={() => setFavourites(false)}
                title="Home"
                className="h-6 w-6 cursor-pointer -mr-2 text-zinc-100 hover:text-[#6556CD]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20 20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20ZM11 13V19H13V13H11Z"></path>
              </svg>
            </Link>
          </span>
          <span className="sm:hidden inline">
            <div  className="flex items-center gap-1 ">
              <img className="h-10 w-10 -mt-1" src="./Logo.png" alt="logo" />
              <h1 className="text-white text-xl font-semibold">FlickQuery</h1>
            </div>
          </span>
          <div className="sm:pr-[20vw]">
            <span className="hidden sm:inline"> 
            <TopNav />
            </span>
            <span className="sm:hidden absolute w-full top-[3px] right-[50px] sm:top-0 sm:right-12">
              <Search />
            </span>
          </div>

          <div
            onClick={() => setFavourites((prev) => !prev)}
            className="cursor-pointer z-20 text-zinc-100 font-semibold flex items-center gap-2 m-2 sm:m-0 sm:px-3 px-1 py-1 bg-[#6556CD] rounded-full hover:text-[#6556CD] hover:bg-[#ffffff] duration-300"
          >
            <span className="sm:block hidden">Favourites</span>
            <svg
              className="w-7 h-7 sm:w-5 sm:h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3Z"></path>
            </svg>
          </div>
        </div>

        {/* Scrollable Part */}
        <div className="h-[91vh] overflow-x-hidden overflow-y-auto">
          <span className="sm:hidden"> 
          <Nav />
          </span>

          {favourites ? (
            <Favourates  setFavourites={() => setFavourites(false)} />
          ) : wallpaper && trending ? (
            <>
              <Header wallpaper={wallpaper} />
              <div className="w-full min-h-[40vh] p-5 m-0 ">
                <div className="w-full mb-5 flex items-center justify-between">
                  <h1 className="text-zinc-100 text-xl font-semibold">
                    Trending
                  </h1>
                  <DropDown
                    title="Filter"
                    options={["movie", "tv", "all"]}
                    func={(e) => setCategory(e.target.value)}
                  />
                </div>

                <HorizontalCards cardData={trending} title={["movie", "tv"]} />
              </div>{" "}
            </>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
}

export default Home;
