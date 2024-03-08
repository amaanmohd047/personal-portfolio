import React from "react";
import { Link } from "react-router-dom";
import { scrollToRef } from "../../utils/scrollToRef";

import { HiDownload, HiOutlineArrowRight } from "react-icons/hi";

const ButtonGroup: React.FC<{ contactRef: React.RefObject<HTMLDivElement> }> = (
  contactRef
) => {
  return (
    <div className="flex mx-auto flex-row space-x-6 items-center mt-14">
      <Link to="contact" onClick={() => scrollToRef(contactRef.contactRef)}>
        <div className="group text-green-regular sm:py-3 sm:px-10 border border-green-regular rounded-full hover:bg-green-regular sm:text-sm hover:text-navy-dark hover:border-navy-dark transition-all duration-200 ease-in-expo cursor-pointer font-mono hover:outline hover:outline-green-regular hover:outline-offset-1 flex items-center space-x-1">
          <span>Contact Me</span>
          <HiOutlineArrowRight className="group-hover:translate-x-1 transition scale-95 group-hover:scale-105" />
        </div>
      </Link>
      <a href="/Resume.pdf" target="_blank">
        <div className="bg-green-regular group text-navy-dark font-mono sm:py-3 sm:px-10 rounded-full sm:border border-green-regular curson-pointer hover:text-green-dark hover:bg-navy-regular transition-all duration-200 ease-in-expo hover:outline hover:outline-offset-2 hover:border-2 flex items-center space-x-1 sm:text-sm">
          <span>Get Resume</span>
          <HiDownload className="group-hover:translate-y-[0.5px] group-hover:translate-x-1 scale-95 group-hover:scale-110 transition" />
        </div>
      </a>
    </div>
  );
};

export default ButtonGroup;
