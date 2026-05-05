import React from "react";
import CompBtn from "../../../../components/ui/primitives/CompBtn";

const Register = () => {
  return (
    <div>
      <div>
        <form className="flex flex-col gap-4" action="">
          <p className="uppercase text-xs font-semibold text-inverted/70 tracking-wide">
            username
          </p>
          <input
            type="text"
            placeholder="username"
            className="text-xs outline-none border-b border-inverted/30 w-full"
          />
          <p className="uppercase text-xs font-semibold text-inverted/70 tracking-wide">
            email address
          </p>
          <input
            type="email"
            placeholder="useremail@mymail.com"
            className="text-xs outline-none border-b border-inverted/30 w-full"
          />
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 w-full">
            <p className="uppercase text-xs font-semibold w-full sm:w-1/3 text-inverted/70 tracking-wide">
              Phone number:
            </p>
            <p className="text-xs border px-2 py-1 inline-flex w-fit">+234</p>
            <input
              type="tel"
              placeholder="7066070465"
              className="text-xs outline-none border-b border-inverted/30 w-full"
            />
          </div>

          <div className="flex justify-between items-center  text-xs font-semibold">
            <p className="uppercase text-inverted/70 tracking-wide">password</p>
          </div>
          <input
            type="password"
            placeholder="********"
            className="text-xs outline-none border-b border-inverted/30 w-full"
          />
          <div className="flex justify-between items-center  text-xs font-semibold">
            <p className="uppercase text-inverted/70 tracking-wide">retype password</p>
          </div>
          <input
            type="password"
            placeholder="********"
            className="text-xs outline-none border-b border-inverted/30 w-full"
          />
          <CompBtn variant="primary" className="">
            Sign In
          </CompBtn>
        </form>
      </div>
    </div>
  );
};

export default Register;
