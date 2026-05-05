import React from "react";
import CompBtn from "../../../../components/ui/primitives/CompBtn";

const Login = () => {
  return (
    <div>
      <form className="flex flex-col gap-6" action="">
        <p className="uppercase text-xs font-semibold text-inverted/70 tracking-wide">
          email address
        </p>
        <input
          type="email"
          placeholder="useremail@mymail.com"
          className="text-xs outline-none border-b border-inverted/30 w-full"
        />
        <div className="flex justify-between items-center  text-xs font-semibold">
          <p className="uppercase text-inverted/70 tracking-wide">password</p>
          <a
            href="#forgotpassword"
            className="text-primary hover:text-primary/70"
          >
            Forgot Password?
          </a>
        </div>
        <input
          type="password"
          placeholder="********"
          className="text-xs outline-none border-b border-inverted/30 w-full"
        />
        <div className="flex items-center gap-2 w-full sm:w-1/2">
          <input type="checkbox" className="w-4 h-4" />
          <p className="text-xs">Remember me</p>
        </div>

        <CompBtn variant="primary" className="mt-8">
          Sign In
        </CompBtn>
      </form>
    </div>
  );
};

export default Login;
