import React from "react";
import { useDarkMode } from "./DarkModeContext"; // Import the dark mode context

const NewsItem = ({
  title,
  description,
  imageUrl,
  newsUrl,
  source_name,
  pubDate,
}) => {
  const { isDarkMode } = useDarkMode(); // Access the dark mode state

  return (
    <div>
      <div
        className="card"
        style={{
          width: "18rem",
          height: "40rem",
          backgroundColor: isDarkMode ? "#2C3E50" : "#FFFFFF", // Dark mode background
          color: isDarkMode ? "#ECF0F1" : "#2C3E50", // Text color change
          border: isDarkMode ? "1px solid #34495E" : "1px solid #BDC3C7", // Border color
        }}
      >
        <img
          src={imageUrl}
          className="card-img-top"
          alt="..."
          style={{
            width: "100%",
            height: "250px",
            objectFit: "cover",
          }}
        />
        <div className="card-body">
          <h5 className="card-title" style={{ fontWeight: "bold" }}>
            {title}
          </h5>
          <p className="card-text" style={{ fontSize: "0.9rem" }}>
            {description}.....
          </p>
          <p className="card-text">
            <small className="text-muted">by {source_name}</small>
          </p>
          <p className="card-text">
            <small className="text-muted">on {pubDate}</small>
          </p>

          <a
            href={newsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-primary"
            style={{
              display: "inline-block",
              whiteSpace: "nowrap",
              backgroundColor: isDarkMode ? "#F39C12" : "#2980B9", // Button color changes based on dark mode
              color: "#FFFFFF",
            }}
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
