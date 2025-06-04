import axios from "../Utils/axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./partials/Card";
import DropDown from "./partials/DropDown";
import TopNav from "./partials/TopNav";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./partials/Loader";
import Search from "./partials/Search";

function TV() {
  const [tv, setTV] = useState([]);
  const [category, setCategory] = useState("airing_today");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  document.title = "TV Shows | " + category.toUpperCase();

  const navigate = useNavigate();

  const getTV = async () => {
    try {
      const { data } = await axios.get(`tv/${category}?page=${page}`);
      // setTV(data.results);
      if (data.results.length > 0) {
        setPage(page + 1);
        setTV((prev) => [...prev, ...data.results]);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const refreshHandler = () => {
    if (tv.length === 0) {
      getTV();
    } else {
      setPage(1);
      setTV([]);
      getTV();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return (
    <div className="w-full">
      <div title="search" className=" sm:hidden absolute bottom-[15%] right-[5vw]">
        <Search />
      </div>
      <div className="w-full sm:px-5 py-2 sm:py-0 flex items-center justify-between">
        <div onClick={() => navigate(-1)} className="flex items-center w-[32%] text-zinc-100 text-xl font-semibold">
          <svg
            className="h-10 w-10 cursor-pointer -mr-1 sm:-mr-2 hover:text-[#6556CD]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
          </svg>
          <h1 className="text-lg sm:text-xl">
            TV Shows
            <span className="sm:inline hidden">
              <small className="ml-2 text-xs text-zinc-500">({category})</small>
            </span>
          </h1>
        </div>

        <div className="w-[60%] sm:w-[80%] flex items-center justify-end">
          <span className="sm:inline hidden">
            <TopNav />
          </span>
          <div className="w-auto flex items-center justify-end pr-5 gap-5">
            <DropDown
              title="Category"
              options={["popular", "upcoming", "top_rated", "now_playing"]}
              func={(e) => setCategory(e.target.value)}
            />
          </div>
        </div>
      </div>
      {tv.length > 0 ? (
        <div className="w-full h-[calc(100vh - 10vh )] overflow-hidden">
          <InfiniteScroll
            dataLength={tv.length}
            next={getTV}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            height="calc(100vh - 10vh)"
          >
            <Card data={tv} title="tv" />
          </InfiniteScroll>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default TV;
