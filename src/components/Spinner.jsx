import React from "react";

const Spinner = () => {
  return (
    <div className="text-center">
      <img
        src="spinner.png"
        alt="Loading..."
        style={{ width: "100px", height: "100px" }}
      />
    </div>
  );
};

export default Spinner;