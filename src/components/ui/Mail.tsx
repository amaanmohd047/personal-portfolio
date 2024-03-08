import React from "react";

const Mail: React.FC = () => {
  return (
    <div className="fixed right-4 sm:right-8 left-auto bottom-0 text-xl flex flex-col space-y-6 text-slate-light z-10 after:w-[1px] after:h-[7rem] after:bg-slate-light after:my-0 after:mx-auto after:block">
      <div className="hover:text-green-regular transition-all duration-300 ease-in-expo cursor-pointer p-3 mb-5 tracking-wide hover:tracking-[0.035em] leading-5 hover:translate-y-[-2px]">
        <a
          href="mailto:amaanmohd047@gmail.com"
          className="text-sm text-vertical-lr font-mono"
          target="_blank"
        >
          amaanmohd047@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Mail;
