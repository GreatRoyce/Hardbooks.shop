import React from "react";
import PropTypes from "prop-types";

const buttonStyles = {
  // base
  base: "inline-flex items-center justify-center rounded transition-colors duration-300 cursor-pointer focus:outline-0 focus:ring-1 focus:ring-primary/50 focus:ring-offset-2 shadow-lg",
  // variants
  primary:
    "bg-primary/90 text-offwhite font-medium hover:bg-primary/100 cursor-pointer",
  secondary:
    "bg-secondary text-inverted font-medium hover:bg-secondary/80 shadow-sm cursor-pointer",
  inverted:
    "bg-inverted text-offwhite font-medium hover:bg-inverted/80 cursor-pointer",
  tertiary:
    "bg-tertiary text-offwhite font-medium hover:bg-tertiary/80 cursor-pointer",
  outline:
    "bg-transparent border rounded-md border-white/40 text-inverted hover:bg-inverted/10 cursor-pointer",
  // sizes
  small: "py-2 px-2 text-sm",
  medium: "py-1 px-6 text-base",
  large: "py-2 px-6 text-lg",
};

const CompBtn = ({
  children,
  variant = "outline",
  className = "",
  disabled = false,
  size = "small",
  loading = false,
  onClick,
  type = "button",
  ...props
}) => {
  const baseStyle = buttonStyles.base;
  const variantStyle = buttonStyles[variant] || buttonStyles.primary;
  const sizeStyle = buttonStyles[size] || buttonStyles.medium;

  const loadingStyle = loading ? "cursor-not-allowed opacity-50" : "";
  const combinedStyles =
    `${baseStyle} ${variantStyle} ${sizeStyle} ${loadingStyle} ${className}`.trim();
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled || loading}
      className={combinedStyles}
      {...props}
    >
      {children}
    </button>
  );
};

CompBtn.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(["primary", "secondary", "tertiary", "inverted", "outline"]),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};

export default CompBtn;
