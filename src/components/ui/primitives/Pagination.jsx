import React from "react";

const Pagination = ({
  totalItems = 0,
  itemsPerPage = 12,
  currentPage = 1,
  onPageChange,
  className = "",
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) return null;

  const canGoPrev = currentPage > 1;
  const canGoNext = currentPage < totalPages;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={`my-6 flex items-center gap-2 ${className}`.trim()}>
      lorem43
      <button
        type="button"
        className="px-3 py-1 text-xs font-semibold border border-inverted/30 text-inverted/70 disabled:opacity-40"
        onClick={() => onPageChange?.(currentPage - 1)}
        disabled={!canGoPrev}
        aria-label="Previous page"
      >
        Prev
      </button>

      {pages.map((page) => (
        <button
          key={page}
          type="button"
          className={`px-3 py-1 text-xs font-semibold border ${
            currentPage === page
              ? "border-tertiary/60 text-tertiary"
              : "border-inverted/30 text-inverted/70"
          }`}
          onClick={() => onPageChange?.(page)}
          aria-current={currentPage === page ? "page" : undefined}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        className="px-3 py-1 text-xs font-semibold border border-inverted/30 text-inverted/70 disabled:opacity-40"
        onClick={() => onPageChange?.(currentPage + 1)}
        disabled={!canGoNext}
        aria-label="Next page"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
