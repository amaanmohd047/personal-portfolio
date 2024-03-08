import React from "react";
import { motion } from "framer-motion";
import ButtonGroup from "./ButtonGroup";

const Home: React.FC<{ contactRef: React.RefObject<HTMLDivElement> }> = (
  contactRef
) => {
  return (
    <>
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "tween", duration: 0.7 }}
        >
          <div className="h-36 w-36 rounded-full object-cover bg-green-regular shadow-lg shadow-navy-shadow hover:shadow-[#fff3]">
            <div className="mix-blend-multiply grayscale h-36 w-36 rounded-full object-cover relative hover:mix-blend-normal hover:grayscale-0 transition-all duration-[0.25s] ease-in-out">
              <img
                src="/dp.jpg"
                alt="Amaan's Image"
                height="192"
                width="192"
                className="h-36 w-36 rounded-full object-cover scale-[0.965] hover:scale-[1] border-[1px] border-green-regular hover:border-white hover:border-[2px] transition-all duration-[0.25s] ease-in-out"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mt-3 sm:text-xl"
      >
        <div className="pt-8 pb-4 sm:text-[1.2rem] text-green-dark font-mono">
          <span className="sm:text-[2rem] ">Hi,</span> my name is
        </div>
        <div className="py-5 sm:text-[5rem] font-bold tracking-tighter	text-slate-light">
          {" "}
          Mohammed Amaan.
        </div>
        <div className="py-5 pt-8 sm:text-[3.5rem] font-semibold text-slate-regular">
          I am a software developer.
        </div>{" "}
        <div className="pt-3 sm:text-[3rem] text-slate-dark font-semibold">
          I enjoy building web apps.
        </div>
      </motion.div>
      <ButtonGroup contactRef={contactRef.contactRef} />
    </>
  );
};

export default Home;
