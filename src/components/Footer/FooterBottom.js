import React from "react";

// styles
import './FooterBottom.css'

const FooterBottom = () => {
  return (
    <div className="footer-bottom w-full font-blender400">
      <div className="max-w-container mx-auto border-t-[1px] py-4">
        <span className="text-titleFont font-normal text-center flex md:items-center justify-center text-lightText duration-200 text-sm">
          <span className="text-md mr-[1px] mt-[2px] md:mt-0 text-center hidden md:inline-flex">
          </span>
          <p>
            CD PROJEKT®, Cyberpunk®, Cyberpunk 2077® are registered trademarks of CD PROJEKT S.A. © 2022 CD PROJEKT S.A. All rights reserved. All other copyrights and trademarks are the property of their respective owners.
          </p>
          <span>
            © Copyright 2022 | Cyberpunk Computers | All Rights Reserved |
            <a className="font-refinery700" href="https://react.dev/" target="_blank" rel="noreferrer">
              <span className="ml-1 font-medium group-hover:text-primeColor">
                Powered by React.dev
              </span>
            </a>
          </span>
        </span>
      </div>
    </div >
  );
};

export default FooterBottom;
