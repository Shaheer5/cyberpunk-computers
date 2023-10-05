import React from "react";
import "./Preloader.css";

const Preloader = () => {
  return (
    <>
      <div id="preloader" className="w-full flex items-center justify-center">
        <div className="bg-img">
          <div className="mx-auto w-72 relative text-center">
            <img
              src="/assets/images/Cyberpunk-2077-Logo-Transparent.png"
              alt="preloader"
              className="m-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Preloader;
