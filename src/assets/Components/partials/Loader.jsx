import React from "react";

const Loader = () => {
  const loaderStyle = {
    width: "20px",
    aspectRatio: "1",
    borderRadius: "50%",
    animation: "l5 1s infinite linear alternate",
  };

  return (
    <div className="w-full h-[90vh] flex items-center justify-center">
      <style>
        {`
          @keyframes l5 {
            0%   { box-shadow: 30px 0 #6556CD, -30px 0 #6656cd34; background: #6556CD; }
            33%  { box-shadow: 30px 0 #6556CD, -30px 0 #6656cd34; background: #6656cd34; }
            66%  { box-shadow: 30px 0 #6656cd34, -30px 0 #6556CD; background: #6656cd34; }
            100% { box-shadow: 30px 0 #6656cd34, -30px 0 #6556CD; background: #6556CD; }
          }
        `}
      </style>
      <div>
        <div style={loaderStyle} className="absolute m-1"></div>
        <div style={loaderStyle} className="absolute m-1"></div>
        <div style={loaderStyle} className="absolute m-1"></div>
      </div>
    </div>
  );
};

export default Loader;
