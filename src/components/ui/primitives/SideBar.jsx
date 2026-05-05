import React from "react";
import SearchBar from "./SearchBar";
import libraryData from "../../../modules/public/data/libraryData";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";

const fade = {
  base: "text-inverted/40 font-semibold text-xs tracking-widest",
};

const SideBar = ({ setActive, activeCategory, searchTerm, onSearchChange }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const categoryCount = libraryData.reduce((acc, book) => {
    acc[book.category] = (acc[book.category] || 0) + 1;
    return acc;
  }, {});
  const itemBase =
    "text-xs py-2 flex w-full justify-between text-inverted cursor-pointer hover:border-l-2 hover:border-tertiary/60 pl-4 hover:text-tertiary";
  const activeClass = "border-l-2 border-tertiary/60 text-tertiary";

  return (
    <div className="border w-full sm:w-5/6 h-fit z-10 p-4">
      <button
        type="button"
        onClick={() => setIsSidebarOpen((prev) => !prev)}
        className="sm:hidden"
        aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
      >
        {isSidebarOpen ? (
          <GoSidebarCollapse size={20} />
        ) : (
          <GoSidebarExpand size={20} />
        )}
      </button>
      <div
        className={`${
          isSidebarOpen ? "flex" : "hidden"
        } sm:flex flex-col gap-3 transition-all duration-300 ease-out`}
      >
        {/* SEARCH */}
        <h1 className={fade.base}>ARCHIVE SEARCH</h1>
        <SearchBar
          className="text-sm bg-inverted/20  w-full rounded-none"
          placeholder="Title, Author..."
          value={searchTerm}
          onChange={onSearchChange}
        />
        <button
          type="button"
          className={`${itemBase} ${activeCategory === null ? activeClass : ""}`}
          onClick={() => setActive(null)}
        >
          <span>All</span>
        </button>
        {/* CATEGORIES */}
        <h1 className={`mt-4 ${fade.base}`}>CATEGORIES</h1>

        <div>
          {Object.entries(categoryCount).map(([category, count]) => (
            <button
              type="button"
              key={category}
              className={`${itemBase} ${
                activeCategory === category ? activeClass : ""
              }`}
              onClick={() => setActive(category)}
            >
              <span>{category}</span>
              <span className="text-inverted/60 font-bold">{count}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
