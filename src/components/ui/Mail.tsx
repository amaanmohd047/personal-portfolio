import React from "react";

const Mail: React.FC = () => {
  return (
    <>
      <div className="fixed hidden sm:right-2 lg:right-5 left-auto bottom-0 sm:flex flex-col space-y-4 text-slate-light z-10 after:w-[1px] after:h-[8rem] after:bg-slate-light after:my-0 after:mx-auto after:block">
        <div className="hover:text-green-regular transition-all duration-300 ease-in-expo cursor-pointer p-3 mb-5 tracking-wider hover:tracking-widest leading-5 hover:translate-y-[-2px]">
          <a
            href="mailto:amaanmohd047@gmail.com"
            className="text-sm text-vertical-lr font-mono"
            target="_blank"
          >
            amaanmohd047@gmail.com
          </a>
        </div>
      </div>
      <div className="absolute sm:hidden flex justify-center w-[50%] max-w-[80%] bottom-0 text-slate-light">
        <div className="hover:text-green-regular transition-all duration-300 ease-in-expo cursor-pointer p-3 mb-5 tracking-wider hover:tracking-widest leading-5 hover:translate-y-[-2px]">
          <a
            href="mailto:amaanmohd047@gmail.com"
            className="font-mono"
            target="_blank"
          >
            amaanmohd047@gmail.com
          </a>
        </div>
      </div>
    </>
  );
};

export default Mail;
