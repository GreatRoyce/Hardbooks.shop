import React from "react";
import CompBtn from "../primitives/CompBtn";
import { FaCartPlus } from "react-icons/fa";

const CartButton = ({
  children,
  className = "",
  variant = "primary",
  size = "small",
  onClick,
  type = "button",
  disabled = false,
  ...props
}) => {
  return (
    <CompBtn
      variant={variant}
      size={size}
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`rounded-full sm:rounded-2xl flex gap-1 ${className}`.trim()}
      {...props}
    >
      <FaCartPlus className="m-1 sm:hidden" size={20} />
      <span className="uppercase sm:text-xs hidden sm:inline-flex  justify-center items-center sm:px-2">
        <span className="flex sm:hidden">
          <FaCartPlus size={24} />
        </span>
        <p className="text-base">

        {children}
        </p>
      </span>
    </CompBtn>
  );
};

export default CartButton;
