import React from "react";

const Pagination = ({ onChange, page }) => {
  const currentPageClassName =
    "z-10 bg-indigo-50 border-indigo-500 text-indigo-600";
  return (
    <nav
      className="mt-14 ml-max mr-max relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
      aria-label="Pagination"
    >
      <a
        href="#"
        className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        onClick={
          page == 1 ? (e) => e.preventDefault() : (e) => onChange(e, page - 1)
        }
      >
        {/* Previous */}
        &laquo;
      </a>
      <a
        href="#"
        aria-current="page"
        className={`${
          page == 1 ? currentPageClassName : ""
        } relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
        onClick={(e) => onChange(e, 1)}
      >
        1
      </a>
      <a
        href="#"
        className={`${
          page == 2 ? currentPageClassName : ""
        } relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
        onClick={(e) => onChange(e, 2)}
      >
        2
      </a>
      <a
        href="#"
        className={`${
          page == 3 ? currentPageClassName : ""
        } relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
        onClick={(e) => onChange(e, 3)}
      >
        3
      </a>

      <a
        href="#"
        className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        onClick={
          page == 3 ? (e) => e.preventDefault() : (e) => onChange(e, page + 1)
        }
      >
        {/* Next */}
        &raquo;
      </a>
    </nav>
  );
};

export default Pagination;
