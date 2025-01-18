import React from "react";

const Pagination = ({
  prevPage,
  nextPage,
  onPrevClick,
  onNextClick,
  setProgress,
}) => {
  const handlePrevClick = () => {
    setProgress(30); // Start loading
    onPrevClick();
    setProgress(100); // Finish loading
  };

  const handleNextClick = () => {
    setProgress(30); // Start loading
    onNextClick();
    setProgress(100); // Finish loading
  };

  return (
    <div className="pagination-buttons d-flex justify-content-between mt-4">
      <button
        className="btn btn-secondary"
        onClick={handlePrevClick}
        disabled={!prevPage}
      >
        &laquo; Previous
      </button>
      <button
        className="btn btn-secondary"
        onClick={handleNextClick}
        disabled={!nextPage}
      >
        Next &raquo;
      </button>
    </div>
  );
};

export default Pagination;
