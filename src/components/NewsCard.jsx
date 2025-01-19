import React from "react";

const NewsCard = ({ article }) => {
  return (
    <div className="col-md-4 mb-4" key={article.link || article.title}>
      <div
        className="card"
        style={{
          width: "320px",
          height: "420px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <img
          src={article.image_url || "https://via.placeholder.com/150"}
          className="card-img-top"
          alt="news"
          style={{
            width: "100%",
            height: "250px",
            objectFit: "cover",
          }}
        />
        <div className="card-body" style={{ padding: "10px" }}>
          <h5
            className="card-title"
            style={{ fontSize: "1rem", fontWeight: "bold" }}
          >
            {article.title.slice(0, 50) + "...."}
          </h5>
          <p className="card-text">
            <small className="text-muted">
              <strong>
                By {article.source_name.slice(0, 15)} On {article.pubDate}
              </strong>
            </small>
          </p>

          <p className="card-text" style={{ fontSize: "0.85rem" }}>
            {(
              article.description ||
              "No description is available for this. Click on the 'Read More' button to read the full news in detail."
            ).slice(0, 120) + "..."}
          </p>

          <button
            className="btn btn-primary position-absolute"
            style={{ bottom: "5px", left: "5px" }}
            onClick={() => window.open(article.link, "_blank")}
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
