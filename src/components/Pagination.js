import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex justify-center mt-4">
    <button
      disabled={currentPage === 1}
      onClick={() => onPageChange(currentPage - 1)}
      className="px-4 py-2 bg-gray-300 rounded"
    >
      Prev
    </button>
    <div className="px-4 py-2">{currentPage} of {totalPages}</div>
    <button
      disabled={currentPage === totalPages}
      onClick={() => onPageChange(currentPage + 1)}
      className="px-4 py-2 bg-gray-300 rounded"
    >
      Next
    </button>
  </div>
);

export default Pagination;
