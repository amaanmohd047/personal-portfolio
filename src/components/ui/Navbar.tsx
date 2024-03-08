import { motion } from "framer-motion";
import React, { RefObject } from "react";
import NavItem from "./NavItem";

const Navbar: React.FC<{
  allRefs: RefObject<HTMLDivElement>[];
}> = ({ allRefs }) => {
  const [homeRef, aboutRef, projectsRef, experienceRef, contactRef] = allRefs;

  return (
    <nav className="z-[50] relative ">
      <motion.div
        className="fixed top-0 left-1/2 h-[3rem] w-full rounded-none border border-navy-lightest  border-opacity-40 bg-navy-lightest bg-opacity-40 shadow-lg shadow-black/[0.05] backdrop-blur-[0.5rem] sm:top-6 sm:rounded-full sm:h-[3rem] sm:w-[36rem] translate-x-[-50%] font-notosans"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.75 }}
      >
        <ul className="flex gap-2 w-full h-full flex-wrap justify-evenly items-center sm:py-3 sm:px-4 text-slate-light font-sans text-xs sm:text-sm">
          <NavItem pageRef={homeRef} route="">
            Home
          </NavItem>

          <NavItem pageRef={aboutRef} route="/about">
            About
          </NavItem>

          <NavItem pageRef={projectsRef} route="/projects">
            Projects
          </NavItem>

          <NavItem pageRef={experienceRef} route="/experience">
            Experience
          </NavItem>

          <NavItem pageRef={contactRef} route="contact">
            Contact
          </NavItem>
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
