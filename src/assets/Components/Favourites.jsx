import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Favourates({setFavourites}) {
  const [cardData, setCardData] = useState(
    JSON.parse(localStorage.getItem("favouriteCards")) || []
  );

  const removeFavourite = (link) => {
    toast.warning("Item removed from Favorites");

    const updatedCardData = cardData.filter((c, i) => {
      return !(c.link == link);
    });

    setCardData(updatedCardData);

    localStorage.setItem("favouriteCards", JSON.stringify(updatedCardData));
  };

  return (
    <div className="relative flex flex-wrap gap-3 sm:gap-[5vw] px-2 sm:px-5 overflow-y-none overflow-x-auto text-white">
      <div className="absolute sm:w-[77vw] w-[92vw] pb-10  flex items-center justify-between">
        <div onClick={setFavourites} className="flex items-center text-zinc-100 text-xl font-semibold">
          <svg
           
            className="h-8 w-8 sm:h-10 sm:w-10 cursor-pointer -mr-1 sm:-mr-2 hover:text-[#6556CD]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
          </svg>
          <h1 className="text-base sm:text-xl">Back</h1>
        </div>
        <div
          onClick={() => {
            localStorage.removeItem('favouriteCards')
            setCardData([]);
          }}
          title="Remove"
          className="cursor-pointer bg-red-600 rounded-full text-xs sm:text-base px-2 py-1 flex items-center justify-center"
        >
          Delete All
          <svg
            className="sm:h-5 sm:w-5 ml-2 mr-1 h-4 w-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z"></path>
          </svg>
        </div>
      </div>
      <div className=" w-full mb-10">
        <ToastContainer />
      </div>
      

      {cardData.length > 0 ? (
        cardData.map((data, index) => 
          <div key={index} className="relative">
            <Link
              to={data.link}
              
              className="relative block rounded-lg sm:mx-0 mx-auto overflow-hidden sm:w-[15vw] w-[44vw] bg-zinc-900 sm:h-[45vh] h-[60vw] mb-5 shrink-0 cursor-pointer]"
            >
              {data.imgeSrc ? (
                <img
                  loading="lazy"
                  className="w-full sm:h-[53%] h-[45%] object-cover select-none"
                  src={data.imgeSrc}
                  alt="poster"
                />
              ) : (
                <img
                  loading="lazy"
                  className="w-full sm:h-[53%] h-[45%] object-cover select-none"
                  src="/Images/404-NoImage.jpg"
                  alt="poster"
                />
              )}
              <div className="text-white p-2 mb-10 ">
                <h1 className=" font-semibold mb-3 leading-none select-none">
                  <span className="hidden sm:inline">{data.title}</span>
                  <span className="sm:hidden text-[4.5vw]">
                    {data.title.slice(0, 22)}
                  </span>
                </h1>
                <p className="text-xs w-[95%] sm:h-[4.2vw] h-[13vw]  sm:mb-2 select-none overflow-x-hidden overflow-y-auto leading-none">
                  <span className="sm:text-xs leading-none text-[2.8vw]">
                    {data.overView.slice(0, 150)}
                  </span>
                  <span className="text-zinc-300 cursor-pointer">...more</span>
                </p>

                <p className="absolute bottom-2 flex sm:gap-5 gap-2 select-none">
                  <span className="flex items-center sm:text-[0.8vw]  text-[2.7vw]">
                    <svg
                      className="h-3 w-3 mr-1 text-[#EA8100]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9V3H15V1H17V3ZM4 9V19H20V9H4ZM6 13H11V17H6V13Z"></path>
                    </svg>{" "}
                    {data.release || "No Information"}
                  </span>
                  <span className="flex items-center sm:text-[0.8vw] text-[2.7vw]">
                    <svg
                      className="h-3 w-3 mr-1 text-[#EA8100]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.9981 7L20.3075 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934C2 3.44476 2.45531 3 2.9918 3H5.99807L3.68867 7H5.99807L8.30747 3H11.9981L9.68867 7H11.9981L14.3075 3H17.9981L15.6887 7H17.9981Z"></path>
                    </svg>{" "}
                    {data.mediaType}
                  </span>
                </p>
              </div>
            </Link>

            <div
              onClick={() => removeFavourite(data.link)}
              title="Remove"
              className="absolute cursor-pointer bg-red-600 sm:top-[43%] top-[35%] sm:-right-4 -right-4 rounded-full sm:h-10 sm:w-10 h-10 w-10 flex items-center justify-center"
            >
              <svg
                className="sm:h-5 sm:w-5  h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z"></path>
              </svg>
            </div>
          </div>
        )
      ) : (
        <div className="sm:text-[5vw] select-none text-[10vw] sm:pt-0 pt-[20vw] p-5 font-bold mx-auto text-zinc-700">
          <img src="/Images/404-NotFound.gif" alt="" />
          <h1 className="text-center">No Favourites</h1>
        </div>
      )}
    </div>
  );
}

export default Favourates;
