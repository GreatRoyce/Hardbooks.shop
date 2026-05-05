import React, { useState } from "react";
import hero from "../../../../assets/heroimage.jpg";
import Login from "./Login";
import Reveal from "../../../../../src/components/ui/composities/Reveal";
import Register from "./Register";

const navbarstyles = {
  base: "underline-offset-8 hover:underline textshade transition duration-300 cursor-pointer hover:text-tertiary",
};

const AuthPage = () => {
  const [login, setLogin] = useState(true);
  const [signup, setSignup] = useState(false);

  const baseStyle = navbarstyles.base;

  return (
    <div id="AuthPage">
      <div className="min-h-[70vh] sm:rounded-2xl flex flex-col lg:flex-row justify-center items-stretch mx-auto  max-w-5xl mt-14 sm:mt-20 bg-offwhite overflow-hidden">
        {/* background and text */}

        <div
          className="relative w-full lg:w-1/2 min-h-[200px] bg-cover bg-no-repeat bg-center "
          style={{ backgroundImage: `url(${hero})` }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/70 z-0"></div>
          <Reveal>
            {/* Content */}
            <div className="relative z-10 h-full p-6 sm:p-8 flex items-end lg:items-center">
              <div>
                <h1 className="text-3xl sm:text-4xl w-full sm:w-5/6 font-semibold text-offwhite/90 tracking-tighter">
                  Curating the World's Finest Ink&Paper.
                </h1>

                <p className="text-xs sm:text-sm font-medium w-full sm:w-4/5 text-offwhite/80 mt-4 tracking-wide">
                  Join the atelier and access our exclusive collection of our
                  hand-bound editions and curated literary treasures.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* auth part */}
        <div className="w-full lg:w-1/2 bg-white/80 p-6 sm:p-8 text-left">
          <p className="font-semibold text-2xl tracking-tighter">
            Welcome Back
          </p>
          <p className="font-medium textshade text-xs text-inverted/60">
            Please sign into your account
          </p>

          {/* Toggle Buttons */}
          <div className="flex justify-start items-center mt-4">
            <div className="flex justify-center items-center space-x-6 text-xs sm:text-sm font-semibold">
              <button
                onClick={() => {
                  setLogin(true);
                  setSignup(false);
                }}
                className={`text-inverted/80 ${baseStyle}`}
              >
                Login
              </button>
              <button
                onClick={() => {
                  setSignup(true);
                  setLogin(false);
                }}
                className={`text-inverted/80 ${baseStyle}`}
              >
                Signup
              </button>
            </div>
          </div>

          {/* Content Display */}
          <div className="mt-6 sm:mt-8">
            {login && (
              <div>
                <Login />
              </div>
            )}
            {signup && (
              <div>
                <Register />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
