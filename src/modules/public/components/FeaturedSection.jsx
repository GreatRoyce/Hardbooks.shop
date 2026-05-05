import React from "react";
import SideBar from "../../../components/ui/primitives/SideBar";
import libraryData from "../data/libraryData";
import Card from "../../../components/ui/primitives/Card";
import RecentlyAdded from "./RecentlyAdded";
import Pagination from "../../../components/ui/primitives/Pagination";
import { Link } from "react-router-dom";

const FeaturedSection = () => {
  const [active, setActive] = React.useState(null);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 12;

  const normalizedSearch = searchTerm.trim().toLowerCase();
  const filteredBooks = libraryData
    .filter((book) => (active ? book.category === active : true))
    .filter((book) => {
      if (!normalizedSearch) return true;
      const titleMatch = book.title?.toLowerCase().includes(normalizedSearch);
      const authorMatch = book.author?.toLowerCase().includes(normalizedSearch);
      return titleMatch || authorMatch;
    });
  const totalBooks = libraryData.length;
  const visibleCount = filteredBooks.length;
  const totalPages = Math.max(1, Math.ceil(visibleCount / itemsPerPage));

  React.useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [currentPage, totalPages]);

  const pageStart = (currentPage - 1) * itemsPerPage;
  const pageEnd = currentPage * itemsPerPage;
  const pagedBooks = filteredBooks.slice(pageStart, pageEnd);
  const rangeStart = visibleCount ? pageStart + 1 : 0;
  const rangeEnd = Math.min(pageEnd, visibleCount);

  return (
    <div>
      <div className="" id="collection">
        <div className="text-3xl font-semibold text-center mt-14 "></div>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_4fr] gap-6 mx-4 sm:mx-6">
          {/* side */}
          <div className="border lg:sticky lg:top-20 lg:self-start">
            <SideBar
              setActive={setActive}
              activeCategory={active}
              searchTerm={searchTerm}
              onSearchChange={(event) => setSearchTerm(event.target.value)}
            />
          </div>
          {/* main */}
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 pt-4 mb-2">
              <h1 className="font-semibold text-2xl">Featured Sections</h1>
              <p className="font-semibold text-[10px] sm:text-xs text-inverted/60 tracking-widest">
                SHOWING {rangeStart}-{rangeEnd} OF {totalBooks} BOOKS{" "}
              </p>
            </div>
            <hr className="border-inverted/30 border-b" />

            {/* Main Side bar Display */}
            <div className="mt-8 flex flex-wrap gap-4 justify-center sm:justify-start">
              {pagedBooks.map((book) => (
                <Link key={book.id} to={`/book/${book.id}`} className="block">
                  <Card book={book} />
                </Link>
              ))}
            </div>
            <div>
              <RecentlyAdded />
            </div>
            <div>
              <Pagination
                totalItems={visibleCount}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
