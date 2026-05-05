import React from "react";
import { FaAt, FaCopyright, FaGlobeAfrica, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const fa = {
    base: "hover:text-primary/80 duration-200 transition-all cursor-pointer tracking-wide",
  };
  const footlinks = {
    base: "hover:text-primary/80 duration-200 transition-all cursor-pointer hover:scale-125",
  };

  return (
    <div className="bg-inverted">
      <div className="w-full sm:w-3/4 lg:w-1/2 text-center uppercase space-y-4 mx-auto px-4 sm:px-6 py-8">
        <h1 className="font-semibold text-yellow-600/90 py-4">
          HARDBOOKS.SHOP
        </h1>
        <ul className="flex flex-wrap gap-4 text-xs font-semibold text-offwhite/60 justify-center items-center">
          <Link to="/privacy" className={`${fa.base}`}>
            privacy policy
          </Link>
          <Link to="/terms" className={`${fa.base}`}>
            terms of service
          </Link>
          <Link to="/shipping" className={`${fa.base}`}>
            shipping
          </Link>
          <Link to="/returns" className={`${fa.base}`}>
            returns
          </Link>
        </ul>
        <hr className="w-full sm:w-2/3 mx-auto pb-10 opacity-20" />
        <div className="mx-auto flex space-x-6 text-offwhite/60 text-xl items-center justify-center">
          <FaGlobeAfrica className={`${footlinks.base}`} />
          <FaAt className={`${footlinks.base}`} />
          <FaShareAlt className={`${footlinks.base}`} />
        </div>
        <div className="uppercase tracking-widest flex flex-wrap gap-2 justify-center items-center text-[10px] sm:text-xs text-offwhite/60">
          <FaCopyright /> 2026 Hardbooks.shop. All rights reserved.
        </div>
        <p className="italic text-[6px] opacity-40">Built by Great Royce</p>
      </div>
    </div>
  );
};

export default Footer;
