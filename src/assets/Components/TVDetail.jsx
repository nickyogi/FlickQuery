import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Loader from "./partials/Loader";
import HorizontalCards from "./partials/HorizontalCards";
import TopNav from "./partials/TopNav";
import { asyncloadtv, removetv } from "./Store/actions/tvActions";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import Search from "./partials/Search";
import PopUp from "./partials/PopUp";

function TVDetail() {
  const { id } = useParams();
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const { info } = useSelector((state) => state.tv);

  const [showPopup, setShowPopup] = useState(false);

  const handleSuccessAction = () => {
    setShowPopup(true);
  };

  const navigate = useNavigate();

  const [alreadyFavourite, setAlreadyFavourite] = useState();

  const addToFavourites = () => {
    const existing = JSON.parse(localStorage.getItem("favouriteCards")) || [];

    const alreadyFav = existing.some((i) => i.link === pathname);
    if (alreadyFav) {
      const updatedFavData = existing.filter((c, i) => {
        return !(c.link == pathname);
      });

      localStorage.setItem("favouriteCards", JSON.stringify(updatedFavData));

      setAlreadyFavourite(false);

      toast.warning("Item removed from Favorites");
      return;
    }

    const favouriteCard = {
      imgeSrc: `https://image.tmdb.org/t/p/original/${
        info.detail.backdrop_path ||
        info.detail.poster_path ||
        info.detail.profile_path
      }`,
      title: `${
        info.detail.name ||
        info.detail.title ||
        info.detail.original_name ||
        info.detail.original_title
      }`,
      overView: `${info.detail.overview}`,
      release: `${info.detail.first_air_date}`,
      mediaType: "TV",
      link: `${pathname}`,
    };

    existing.push(favouriteCard);

    localStorage.setItem("favouriteCards", JSON.stringify(existing));

    setAlreadyFavourite(true);

    toast.success("Item Added To Favorites");
  };

  useEffect(() => {
    dispatch(asyncloadtv(id));
    const existing = JSON.parse(localStorage.getItem("favouriteCards")) || [];
    const isFavourite = existing.some((i) => i.link === pathname);
    if (isFavourite) {
      setAlreadyFavourite(true);
    } else {
      setAlreadyFavourite(false);
    }

    return () => {
      dispatch(removetv());
    };
  }, [id]);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.6),rgba(0,0,0,0.8)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-screen relative "
    >
      <div
        title="search"
        className=" sm:hidden absolute bottom-[15%] right-[5vw]"
      >
        <Search />
      </div>
      {/* Part - 1 Navigation */}
      <nav className="w-full h-[8vh] flex items-center justify-between sm:px-5 pt-2">
      <div className="flex items-center gap-1 sm:gap-3">
          <span title="Back">
            <svg
              onClick={() => navigate(-1)}
              className="h-[12vw] w-[12vw] sm:h-10 sm:w-10 cursor-pointer -mr-2 text-white hover:text-[#6556CD]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
            </svg>
          </span>
          <Link title="Home" to="/">
            <svg
              className="h-[8vw] w-[8vw] sm:h-6 sm:w-6 cursor-pointer -mr-2 text-zinc-100 hover:text-[#6556CD]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20 20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20ZM11 13V19H13V13H11Z"></path>
            </svg>
          </Link>
        </div>
        <span className="lg:inline hidden">
          <TopNav />
        </span>

        <div className="text-white w-[42vw] font-semibold pr-4 sm:pr-0 flex items-center justify-end gap-[3vw] text-[1.2vw]  sm:mr-5">
          {info.detail.homepage && (
            <a
              className="flex items-center gap-1 whitespace-nowrap"
              target="_blank"
              href={info.detail.homepage}
            >
              <svg
                className="h-[6vw] w-[6vw] sm:h-[1.5vw] sm:w-[1.5vw]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M5 8V20H19V8H5ZM5 6H19V4H5V6ZM20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM7 10H11V14H7V10ZM7 16H17V18H7V16ZM13 11H17V13H13V11Z"></path>
              </svg>
              <span className="sm:inline hidden">Visit Website</span>
            </a>
          )}

          {info.externalid.imdb_id && (
            <a
              className="flex items-center gap-1"
              target="_blank"
              href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}
            >
              <svg
                className="h-[6vw] w-[6vw] sm:h-[1.5vw] sm:w-[1.5vw]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M1 5C1 4.44772 1.44772 4 2 4H22C22.5523 4 23 4.44772 23 5V19C23 19.5523 22.5523 20 22 20H2C1.44772 20 1 19.5523 1 19V5ZM9 8H7V10H9V8ZM7 13V16H9V11H6V13H7ZM13 9V11H19V9H13ZM18 13H13V15H18V13Z"></path>
              </svg>
              <span className="sm:inline hidden">Imdb</span>
            </a>
          )}

          {info.externalid.wikidata_id && (
            <a
              className="flex items-center gap-1"
              target="_blank"
              href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
            >
              <svg
                className="h-[6vw] w-[6vw] sm:h-[1.5vw] sm:w-[1.5vw]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM9.71002 19.6674C8.74743 17.6259 8.15732 15.3742 8.02731 13H4.06189C4.458 16.1765 6.71639 18.7747 9.71002 19.6674ZM10.0307 13C10.1811 15.4388 10.8778 17.7297 12 19.752C13.1222 17.7297 13.8189 15.4388 13.9693 13H10.0307ZM19.9381 13H15.9727C15.8427 15.3742 15.2526 17.6259 14.29 19.6674C17.2836 18.7747 19.542 16.1765 19.9381 13ZM4.06189 11H8.02731C8.15732 8.62577 8.74743 6.37407 9.71002 4.33256C6.71639 5.22533 4.458 7.8235 4.06189 11ZM10.0307 11H13.9693C13.8189 8.56122 13.1222 6.27025 12 4.24799C10.8778 6.27025 10.1811 8.56122 10.0307 11ZM14.29 4.33256C15.2526 6.37407 15.8427 8.62577 15.9727 11H19.9381C19.542 7.8235 17.2836 5.22533 14.29 4.33256Z"></path>
              </svg>
              <span className="sm:inline hidden">Wikipedia</span>
            </a>
          )}

          {info.externalid.instagram_id && (
            <a
              className="flex items-center gap-1"
              target="_blank"
              href={`https://www.instagram.com/${info.externalid.instagram_id}/`}
            >
              <svg
                className="h-[6vw] w-[6vw] sm:h-[1.5vw] sm:w-[1.5vw]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path>
              </svg>
              <span className="sm:inline hidden">Instagram</span>
            </a>
          )}

          {info.externalid.twitter_id && (
            <a
              className="flex items-center gap-1"
              target="_blank"
              href={`https://x.com/${info.externalid.twitter_id}?lang=en`}
            >
              <svg
                className="h-[6vw] w-[6vw] sm:h-[1.5vw] sm:w-[1.5vw]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M10.4883 14.651L15.25 21H22.25L14.3917 10.5223L20.9308 3H18.2808L13.1643 8.88578L8.75 3H1.75L9.26086 13.0145L2.31915 21H4.96917L10.4883 14.651ZM16.25 19L5.75 5H7.75L18.25 19H16.25Z"></path>
              </svg>
              <span className="sm:inline hidden">Twitter</span>
            </a>
          )}
        </div>
      </nav>

      {/* Scrollable Part */}
      <div className="w-full h-[92vh] p-2 sm:p-5 overflow-x-hidden overflow-y-auto">
        {/* Part - 2 tv Info */}
        <div className="w-full text-white px-2 sm:px-10 mt-5 sm:flex justify-end gap-10">
          {info.detail.poster_path ||
          info.detail.backdrop_path ||
          info.detail.profile_path ? (
            <img
              loading="lazy"
              className=" w-[60vw] mx-auto sm:mx-0 sm:w-[25vw]  lg:w-[18vw] object-cover rounded-xl select-none shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]"
              src={`https://image.tmdb.org/t/p/original/${
                info.detail.poster_path ||
                info.detail.backdrop_path ||
                info.detail.profile_path
              }`}
              alt="poster"
            />
          ) : (
            <img
              loading="lazy"
              className=" w-[60vw] mx-auto sm:w-[25vw]  lg:w-[18vw] object-cover rounded-xl select-none shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]"
              src="/Images/404-NoImage.jpg"
              alt="poster"
            />
          )}

          <div className="w-[92vw]">
          <h1 className="text-[8vw] md:text-[3.5vw] mt-[5vw] md:mt-0 text-center md:text-start font-bold md:flex items-end tracking-wide leading-none">
              {info.detail.name ||
                info.detail.title ||
                info.detail.original_name ||
                info.detail.original_title}

              <small className="md:inline hidden text-[1.2vw] block text-zinc-200 mx-2 mb-[5px] tracking-normal">{`(${
                info.detail.first_air_date.split("-")[0]
              })`}</small>
            </h1>

            <h2 className="text-center mb-[5vw] sm:hidden inline">
              <small className=" text-[4vw] block text-zinc-200 mx-2 mb-[5px] tracking-normal">{`(${
                info.detail.first_air_date.split("-")[0]
              })`}</small>
            </h2>

            <hr className="sm:hidden block w-full mx-auto text-zinc-400" />

            <div className="hidden md:flex items-center justify-between w-[80%]">
              <div className="flex items-center">
                <div className="h-[3.5vw] w-[3.5vw] my-3 bg-yellow-600 text-[1.2vw] font-semibold bottom-[25%] rounded-full flex items-center justify-center shadow shadow-yellow-600 ">
                  {(info.detail.vote_average * 10).toFixed()} <sup>%</sup>
                </div>
                <div className="font-semibold w-[2vw] leading-none mx-2">
                  User Score
                </div>
              </div>
              <span className="font-semibold  leading-none ">{`Release : ${info.detail.first_air_date}`}</span>
              <span className="font-semibold  leading-none ">{`Seasons : ${info.detail.seasons.length}`}</span>
            </div>

            <div className="md:hidden flex mb-10 items-center justify-between w-full">
              <div className="flex flex-col items-center">
                <div className="h-[10vw] w-[10vw] my-3 bg-yellow-600 text-[4vw] pt-1 pl-1 font-semibold bottom-[25%] rounded-full flex items-center justify-center shadow shadow-yellow-600 ">
                  {(info.detail.vote_average * 10).toFixed()} <sup>%</sup>
                </div>
                <div className="font-semibold text-sm leading-none mx-2">
                  User Score
                </div>
              </div>
              <div className="font-semibold flex-col items-center gap-10 leading-none ">
                <div className="h-[10vw] flex items-center ">
                  <h3 className="mt-6">{info.detail.first_air_date}</h3>
                </div>
                <div className="text-center font-semibold text-sm leading-none pt-6">
                  Release
                </div>
              </div>
              <div className="font-semibold flex-col items-center  leading-none ">
                <div className="h-[10vw] flex items-center justify-center">
                  <h3 className="mt-7 text-[5vw]">
                    {info.detail.seasons.length}
                  </h3>
                </div>
                <div className="text-center font-semibold text-sm leading-none pt-6">
                  Seasons
                </div>
              </div>
            </div>

            <p className="text-base text-center my-5 mb-10 sm:mb-0 sm:my-2 sm:text-start leading-sm  italic font-semibold">
              {info.detail.tagline}
            </p>

            <h1 className="text-xl font-semibold mt-1">Overview</h1>
            <p className="text-sm leading-sm w-full sm:w-[75%] py-1">
              {info.detail.overview}
            </p>

            <div className="mt-3 mb-6">
              {info.detail.genres.map((g, i) => (
                <span
                  key={i}
                  className="inline-block select-none text-sm mr-2 my-2 sm:my-0 px-3 py-1 border border-white rounded-full"
                >
                  {g.name}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center">
              <Link
                to={`${pathname}/trailer`}
                className=" select-none bg-[#6556CD] sm:mr-5 hover:text-[#6556CD] hover:bg-[#ffffff]  duration-300  font-medium mb-5 px-[35px] sm:px-2 py-2 rounded tracking-wider"
              >
                <svg
                  className="h-5 w-5 -mt-1 mr-1 inline"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM10.6219 8.41459C10.5562 8.37078 10.479 8.34741 10.4 8.34741C10.1791 8.34741 10 8.52649 10 8.74741V15.2526C10 15.3316 10.0234 15.4088 10.0672 15.4745C10.1897 15.6583 10.4381 15.708 10.6219 15.5854L15.5008 12.3328C15.5447 12.3035 15.5824 12.2658 15.6117 12.2219C15.7343 12.0381 15.6846 11.7897 15.5008 11.6672L10.6219 8.41459Z"></path>
                </svg>
                Play Trailer
              </Link>

              <span
                onClick={() => {
                  addToFavourites()
                  handleSuccessAction()
                }}
                className={`inline-block items-center flex select-none ${
                  alreadyFavourite
                    ? "bg-zinc-100 text-[#6556CD]"
                    : "bg-[#6556CD] text-zinc-100"
                } bg-[#6556CD] cursor-pointer hover:text-[#6556CD] hover:bg-[#ffffff]   duration-300  font-medium mb-5 px-2 py-2 rounded tracking-wider`}
              >
                <span className="hidden sm:inline">
                  <ToastContainer />
                </span>
                <span className=" sm:hidden">
              { alreadyFavourite ? <PopUp
               message="Added!"
               show={showPopup}
               color={false}
               onClose={() => setShowPopup(false)}
              /> : <PopUp
               message="Removed!"
               show={showPopup}
               color={true}
               onClose={() => setShowPopup(false)}
              />} 
              
              </span>
                <svg
                  className="h-5 w-5 mr-1 inline"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.0001 13.9999V16.9999H22.0001V18.9999H18.9991L19.0001 21.9999H17.0001L16.9991 18.9999H14.0001V16.9999H17.0001V13.9999H19.0001ZM20.2426 4.75736C22.4033 6.92253 22.5715 10.3141 20.7498 12.667C19.9261 12.2403 18.9911 12 18 12C14.6863 12 12 14.6863 12 18C12 19.0089 12.249 19.9596 12.6889 20.794L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736Z"></path>
                </svg>
                {alreadyFavourite ? "Favourate" : "Add TO Favourate"}
              </span>
            </div>
          </div>
        </div>

        {/* Part - 3 tv Availability */}
        <div className="w-auto sm:w-[30%] flex flex-col items-center sm:block text-zinc-100 text-sm mt-10 sm:ml-10">
          {info.watchprovider && info.watchprovider.flatrate && (
            <div className="sm:flex items-center  gap-3 my-3">
              <h1 className="w-full sm:w-[45%]">Available on Platform :</h1>
              <span className=" flex gap-[5vw] sm:gap-5 mt-2 sm:mt-0 ">
                {info.watchprovider.flatrate.map((w, i) => (
                  <img
                    key={i}
                    title={w.provider_name}
                    className="h-8 w-8 mx-auto sm:mx-0 rounded"
                    src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                    alt="logo"
                  />
                ))}
              </span>
            </div>
          )}

          {info.watchprovider && info.watchprovider.rent && (
            <div className="sm:flex items-center gap-3 my-3">
              <h1 className="w-full sm:w-[45%]">Available to Rent :</h1>
              <span className=" flex gap-[5vw] sm:gap-5 mt-2 sm:mt-0 ">
                {info.watchprovider.rent.map((w, i) => (
                  <img
                    key={i}
                    title={w.provider_name}
                    className="h-8 w-8 mx-auto sm:mx-0 rounded"
                    src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                    alt="logo"
                  />
                ))}
              </span>
            </div>
          )}

          {info.watchprovider && info.watchprovider.buy && (
            <div className="sm:flex items-center gap-3 my-3">
              <h1 className="w-full sm:w-[45%]">Available to Buy :</h1>
              <span className=" flex gap-[5vw] sm:gap-5 mt-2 sm:mt-0 ">
                {info.watchprovider.buy.map((w, i) => (
                  <img
                    key={i}
                    title={w.provider_name}
                    className="h-8 w-8 mx-auto sm:mx-0 rounded"
                    src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                    alt="logo"
                  />
                ))}
              </span>
            </div>
          )}
        </div>

        {/* TV Show Seasons */}

        {(info.detail.seasons || info.detail.seasons.length > 0) && (
          <div className="w-full py-3 px-5">
            <hr className="w-full mx-auto text-zinc-400" />
            <h1 className="text-white text-[6vw] sm:text-[3vw] py-3 font-semibold">
              Seasons
            </h1>
            <div className="flex gap-3 overflow-y-none overflow-x-auto text-white">
              {info.detail.seasons.map((data, index) => (
                <Link
                  to={`/tv/details/${data.id}`}
                  key={index}
                  className=" relative rounded-lg overflow-hidden w-[40vw] sm:w-[15vw] bg-zinc-900 h-[35vh] sm:h-[45vh] mb-5 shrink-0 cursor-pointer ]"
                >
                  {data.backdrop_path || data.poster_path ? (
                    <img
                      loading="lazy"
                      className=" w-full h-[100%] object-cover position-top select-none"
                      src={`https://image.tmdb.org/t/p/original/${
                        data.poster_path || data.backdrop_path
                      }`}
                      alt="poster"
                    />
                  ) : (
                    <img
                      loading="lazy"
                      className="w-full h-[100%] object-cover select-none"
                      src="/Images/404-NoImage.jpg"
                      alt="poster"
                    />
                  )}
                  <div className="absolute w-full h-[30%] text-white bg-zinc-900 p-2 top-[85%] shadow-[0px_-17px_38px_10px_rgba(0,0,0,.9)]">
                    <h1 className="h-[2vh] font-semibold mb-3 leading-none select-none flex items-center">
                      <svg
                        className="h-4 w-4 mr-1 text-[#EA8100]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17.9981 7L20.3075 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934C2 3.44476 2.45531 3 2.9918 3H5.99807L3.68867 7H5.99807L8.30747 3H11.9981L9.68867 7H11.9981L14.3075 3H17.9981L15.6887 7H17.9981Z"></path>
                      </svg>
                      {data.name ||
                        data.title ||
                        data.original_name ||
                        data.original_title}
                    </h1>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Part - 4 Recommendations */}
        {((info.recommendations && info.recommendations.length > 0) ||
          (info.similar && info.similar.length > 0)) && (
          <div className="w-full py-3 px-0 sm:px-5">
            <hr className="w-full mx-auto text-zinc-400" />
            <h1 className="text-white text-[6vw] sm:text-[3vw] py-3 font-semibold">
              Recommendations
            </h1>

            <HorizontalCards
              cardData={
                info.recommendations.length > 0
                  ? info.recommendations
                  : info.similar
              }
            />
          </div>
        )}
      </div>

      <Outlet />
    </div>
  ) : (
    <Loader />
  );
}

export default TVDetail;
