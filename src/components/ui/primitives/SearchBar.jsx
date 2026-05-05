import React from "react";
import PropTypes from "prop-types";
import { FaSearch } from "react-icons/fa";

const searchbarstyles = {
  base: "flex items-center border border-gray-300 rounded-full px-2 py-1",
  // variants
  primary: "bg-off-white text-inverted",
  secondary: "bg-gray-500/30 text-white",
};

const SearchBar = ({
  onClick,
  className,
  variant = "primary",
  icon = <FaSearch />, 
  placeholder = "Search...",
  value,
  onChange,
  ...props
}) => {
  const baseStyle = searchbarstyles.base;
  const variantStyle = searchbarstyles[variant] || searchbarstyles.primary; 
  const combinedClassName =
    `${baseStyle} ${variantStyle} ${className || ""}`.trim();

  return (
    <div className={combinedClassName} onClick={onClick} {...props}>
      {icon && <button onClick={onClick} className="mr-2">{icon}</button>}
      <input
        type="text"
        className="flex-1 bg-transparent outline-none placeholder:text-sm placeholder:text-gray-400"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

SearchBar.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary"]),
  icon: PropTypes.node,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default SearchBar;
