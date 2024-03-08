import React from "react";
import { FiInstagram, FiLinkedin, FiGithub } from "react-icons/fi";

const SocialLinks: React.FC = () => {
  return (
    <div className="fixed left-10 bottom-0 text-xl flex flex-col space-y-3 text-slate-regular  after:w-[1px] after:h-[9rem] after:bg-slate-light after:my-0 after:mx-auto after:block">
      <div className="hover:text-green-regular transition-all w-auto h-auto duration-150 ease-in-expo font-mono hover:translate-y-[-2px] cursor-pointer py-3">
        <a href="https://github.com/amaanmohd047" target="_blank">
          <FiGithub />
        </a>
      </div>
      <div className="hover:text-green-regular transition-all w-auto h-auto  duration-150 ease-in-expo font-mono hover:translate-y-[-2px] py-3 cursor-pointer">
        <a href="https://www.linkedin.com/in/amaanmohd047/" target="_blank">
          <FiLinkedin />
        </a>
      </div>
      <div className="pb-9 hover:text-green-regular transition-all w-auto h-auto  duration-150 ease-in-expo hover:translate-y-[-2px] cursor-pointer py-3 font-mono">
        <a href="https://www.instagram.com/amaan_mohammed_047/" target="_blank">
          <FiInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
