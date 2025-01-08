// Skeleton.jsx
import React from "react";
import Skeleton from "react-loading-skeleton"; // Import Skeleton component
import "react-loading-skeleton/dist/skeleton.css"; // Import styles for skeleton

const SkeletonLoader = () => {
  return (
    <div className="row">
      {Array(6)
        .fill(0)
        .map((_, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div
              className="card"
              style={{
                width: "320px",
                height: "420px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Skeleton height={250} />
              <div className="card-body" style={{ padding: "10px" }}>
                <Skeleton height={20} width="80%" />
                <Skeleton height={15} width="90%" />
                <Skeleton height={30} width="50%" />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SkeletonLoader;
