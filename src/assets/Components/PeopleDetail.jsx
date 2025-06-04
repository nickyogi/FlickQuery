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
import { asyncloadperson, removeperson } from "./Store/actions/personActions";
import DropDown from "./partials/DropDown";
import { useState } from "react";

function PeopleDetail() {
  const { id } = useParams();
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const [category, setCategory] = useState("movie");

  const { info } = useSelector((state) => state.person);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(asyncloadperson(id));
    return () => {
      dispatch(removeperson());
    };
  }, [id]);

  return info ? (
    <div className="w-full h-screen relative">
      {/* Part - 1 Navigation */}
      <nav className="w-full h-[8vh] flex items-center justify-between sm:px-5 pt-2">
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

      {/* Scrollable Part */}
      <div className="w-full h-[92vh] flex sm:flex-row flex-col gap-10 p-5 px-[5%] overflow-x-hidden overflow-y-auto">
        <div className=" w-full sm:w-[18%]">
          {info.detail.poster_path ||
          info.detail.backdrop_path ||
          info.detail.profile_path ? (
            <img
              loading="lazy"
              className="w-[60vw] mx-auto  sm:h-[50vh] sm:w-[100%] object-cover rounded-xl select-none shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]"
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
              className="w-[60vw] mx-auto  sm:h-[50vh] sm:w-[100%] object-cover rounded-xl select-none shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]"
              src="/Images/404-NoImage.jpg"
              alt="poster"
            />
          )}
            <h1 className="sm:hidden text-center text-[8vw] text-zinc-400 font-bold my-4 leading-none">
            {info.detail.name}
          </h1>
          <div className="w-[80vw] sm:w-full mx-auto">
            <hr className="w-full mx-auto my-5 text-zinc-400" />

            <div className="flex items-center justify-between  text-zinc-100">
              {info.externalid.wikidata_id && (
                <a
                  title="Wikipedia"
                  className="flex items-center gap-1"
                  target="_blank"
                  href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
                >
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM9.71002 19.6674C8.74743 17.6259 8.15732 15.3742 8.02731 13H4.06189C4.458 16.1765 6.71639 18.7747 9.71002 19.6674ZM10.0307 13C10.1811 15.4388 10.8778 17.7297 12 19.752C13.1222 17.7297 13.8189 15.4388 13.9693 13H10.0307ZM19.9381 13H15.9727C15.8427 15.3742 15.2526 17.6259 14.29 19.6674C17.2836 18.7747 19.542 16.1765 19.9381 13ZM4.06189 11H8.02731C8.15732 8.62577 8.74743 6.37407 9.71002 4.33256C6.71639 5.22533 4.458 7.8235 4.06189 11ZM10.0307 11H13.9693C13.8189 8.56122 13.1222 6.27025 12 4.24799C10.8778 6.27025 10.1811 8.56122 10.0307 11ZM14.29 4.33256C15.2526 6.37407 15.8427 8.62577 15.9727 11H19.9381C19.542 7.8235 17.2836 5.22533 14.29 4.33256Z"></path>
                  </svg>
                </a>
              )}

              {info.externalid.imdb_id && (
                <a
                  title="IMDB"
                  className="flex items-center gap-1"
                  target="_blank"
                  href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}
                >
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M1 5C1 4.44772 1.44772 4 2 4H22C22.5523 4 23 4.44772 23 5V19C23 19.5523 22.5523 20 22 20H2C1.44772 20 1 19.5523 1 19V5ZM9 8H7V10H9V8ZM7 13V16H9V11H6V13H7ZM13 9V11H19V9H13ZM18 13H13V15H18V13Z"></path>
                  </svg>
                </a>
              )}

              {info.externalid.instagram_id && (
                <a
                  title="Facebook"
                  className="flex items-center gap-1"
                  target="_blank"
                  href={`https://www.facebook.com/${info.externalid.facebook_id}/`}
                >
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z"></path>
                  </svg>
                </a>
              )}

              {info.externalid.instagram_id && (
                <a
                  title="Instagram"
                  className="flex items-center gap-1"
                  target="_blank"
                  href={`https://www.instagram.com/${info.externalid.instagram_id}/`}
                >
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path>
                  </svg>
                </a>
              )}

              {info.externalid.twitter_id && (
                <a
                  title="Twitter"
                  className="flex items-center gap-1"
                  target="_blank"
                  href={`https://x.com/${info.externalid.twitter_id}?lang=en`}
                >
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M10.4883 14.651L15.25 21H22.25L14.3917 10.5223L20.9308 3H18.2808L13.1643 8.88578L8.75 3H1.75L9.26086 13.0145L2.31915 21H4.96917L10.4883 14.651ZM16.25 19L5.75 5H7.75L18.25 19H16.25Z"></path>
                  </svg>
                </a>
              )}
            </div>

            <div className="mt-8 mb-5">
              <h1 className="text-2xl text-zinc-100 sm:text-zinc-400 font-bold mb-4">
                Person Info
              </h1>

              <h2 className="text-lg text-zinc-400 font-bold mt-3">
                Known For
              </h2>
              <h4 className="text-base text-zinc-400 font-semibold">
                {info.detail.known_for_department}
              </h4>

              <h2 className="text-lg text-zinc-400 font-bold mt-3">Gender</h2>
              <h4 className="text-base text-zinc-400 font-semibold">
                {info.detail.gender == 1 ? "Female" : "Male"}
              </h4>

              <h2 className="text-lg text-zinc-400 font-bold mt-3">Birthday</h2>
              <h4 className="text-base text-zinc-400 font-semibold">
                {info.detail.birthday}
              </h4>

              <h2 className="text-lg text-zinc-400 font-bold mt-3">Deathday</h2>
              <h4 className="text-base text-zinc-400 font-semibold">
                {info.detail.deathday == null
                  ? "Still Alive"
                  : info.detail.deathday}
              </h4>

              <h2 className="text-lg text-zinc-400 font-bold mt-3">Birth Place</h2>
              <h4 className="text-base text-zinc-400 font-semibold">
                {info.detail.place_of_birth}
              </h4>

              <h2 className="text-lg text-zinc-400 font-bold mt-3">
                Also Known As
              </h2>
              <h4 className="text-base text-zinc-400 font-semibold">
                {info.detail.also_known_as.length > 0
                  ? info.detail.also_known_as.join(", ")
                  : info.detail.name}
              </h4>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-[80%]">

        <div className="sm:hidden flex justify-between items-center">
            <h2 className="text-lg text-zinc-400 font-bold ">
              Acting
            </h2>
            <DropDown
              title={"Category"}
              options={["movie", "tv"]}
              func={(e) => setCategory(e.target.value)}
            />
          </div>

        <div className="sm:hidden list-disc w-full h-[50vh] mt-5 shadow-lg shadow-[rgba(255,255,255,0.1)] text-zinc-400 overflow-x-hidden overflow-y-auto border-2 border-zinc-700 ">
            {info[category + "Credits"].cast.map((c, i) => (
              <li
                key={i}
                className="hover:text-zinc-100 hover:bg-zinc-900 m-2 p-3 rounded-lg duration-300 cursor-pointer"
              >
                <Link to={`/${category}/details/${c.id}`}>
                  <span>
                    {c.name || c.title || c.original_name || c.original_title}
                  </span>
                  <span className="block ml-5">
                    {c.character && `Character Name : ${c.character}`}
                  </span>
                </Link>
              </li>
            ))}
          </div>

          

          <h1 className="hidden sm:block text-[5vw] text-zinc-400 font-bold mb-4 leading-none">
            {info.detail.name}
          </h1>
          
          <h2 className="text-lg text-zinc-400 font-bold sm:my-0 my-5 mt-10 sm:mt-3">Biography</h2>

          <p className=" hidden sm:block text-base pr-2 text-zinc-400 font-semibold">
            {info.detail.biography}
          </p>

          <div className="overflow-y-auto overflow-x-hidden h-[50vh] ">
          <p className="text-base pr-2 text-zinc-400 font-semibold">
            {info.detail.biography}
          </p>
          </div>

          <h2 className=" text-lg text-zinc-400 font-bold mt-6 mb-2">
            Known For
          </h2>
          
          <HorizontalCards cardData={info.combinedCredits.cast} />
      

          <div className="hidden sm:block flex justify-between items-center">
            <h2 className="text-lg text-zinc-400 font-bold mt-6 mb-2">
              Acting
            </h2>
            <DropDown
              title={"Category"}
              options={["movie", "tv"]}
              func={(e) => setCategory(e.target.value)}
            />
          </div>

          <div className="hidden sm:block list-disc w-full h-[50vh] mt-5 shadow-lg shadow-[rgba(255,255,255,0.1)] text-zinc-400 overflow-x-hidden overflow-y-auto border-2 border-zinc-700 ">
            {info[category + "Credits"].cast.map((c, i) => (
              <li
                key={i}
                className="hover:text-zinc-100 hover:bg-zinc-900 m-2 p-3 rounded-lg duration-300 cursor-pointer"
              >
                <Link to={`/${category}/details/${c.id}`}>
                  <span>
                    {c.name || c.title || c.original_name || c.original_title}
                  </span>
                  <span className="block ml-5">
                    {c.character && `Character Name : ${c.character}`}
                  </span>
                </Link>
              </li>
            ))}
          </div>

          <div className="w-full h-[10vh]"></div>
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
}

export default PeopleDetail;
