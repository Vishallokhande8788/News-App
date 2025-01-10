// Pagination.js
import React from "react";

const Pagination = ({ prevPage, nextPage, onPrevClick, onNextClick }) => {
  return (
    <div className="pagination-buttons d-flex justify-content-between mt-4">
      <button
        className="btn btn-secondary"
        onClick={onPrevClick}
        disabled={!prevPage}
      >
        &laquo; Previous
      </button>
      <button
        className="btn btn-secondary"
        onClick={onNextClick}
        disabled={!nextPage}
      >
        Next &raquo;
      </button>
    </div>
  );
};

export default Pagination;
