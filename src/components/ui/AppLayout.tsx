import { useRef, useState } from "react";
import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Experience from "../Experience/Experience";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import Logo from "./Logo";
import Mail from "./Mail";
import Navbar from "./Navbar";
import SocialLinks from "./SocialLinks";
import LogoSVG from "./LogoSVG";

const AppLayout: React.FC<{ contactRef: React.RefObject<HTMLDivElement> }> = ({
  contactRef,
}) => {
  const [displayLogo, setDisplayLogo] = useState(true);
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

  const allRefs = [homeRef, aboutRef, projectsRef, experienceRef, contactRef];

  setTimeout(() => setDisplayLogo(false), 4500);

  return (
    <div className="w-[100dvw] h-auto bg-scroll bg-gradient-to-br from-navy-regular from-45% to-navy-lightest scroll-smooth">
      {displayLogo ? (
        <>
          <LogoSVG />
        </>
      ) : (
        <div className="antialiased flex flex-col items-center relative ">
          <Logo />
          <Mail />
          <SocialLinks />
          <Navbar allRefs={allRefs} />
          <header
            ref={homeRef}
            className="mb-28 max-w-[50rem] h-[100vh] min-h-[100vh] pt-[7rem] sm:pt-[8rem]"
          >
            <Home contactRef={contactRef} />
          </header>
          <main>
            <section ref={aboutRef} className="py-[100rem]">
              <About />
            </section>
            <section ref={projectsRef} className="py-[100rem]">
              <Projects />
            </section>
            <section ref={experienceRef} className="py-[100rem]">
              <Experience />
            </section>
          </main>
          <footer ref={contactRef} className="py-[100rem]">
            <Contact />
            º⎮⎪
          </footer>
        </div>
      )}
    </div>
  );
};
export default AppLayout;
