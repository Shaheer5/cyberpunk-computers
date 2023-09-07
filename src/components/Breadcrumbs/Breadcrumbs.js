import React, { useEffect, useState } from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = ({ prevLocation }) => {
  const location = useLocation();
  const [locationPath, setLocationPath] = useState("");
  useEffect(() => {
    setLocationPath(location.pathname.split("/")[1]);
  }, [location]);

  return (
    <div className="breadcrumbs w-full pl-2 lg:py-1 xs:pt-12 flex flex-col gap-3 font-blender400 -bg--white text-black">
      <p className="text-sm capitalize flex items-center">
        {prevLocation === "" ? (
          <span>Home</span>
        ) : (
          <Link to={`/${prevLocation}`} className="hover:underline cursor-pointer">
            {prevLocation}
          </Link>
        )}
        <span className="px-1">
          <HiOutlineChevronRight />
        </span>
        <span className="capitalize font-blender700">{locationPath}</span>
      </p>
    </div>
  );
};

export default Breadcrumbs;
