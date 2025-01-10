import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, source_name, pubDate } = this.props;

    return (
      <div>
        <div className="card" style={{ width: "18rem", height: "40rem" }}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}.....</h5>
            <p className="card-text">{description}.....</p>
            <p className="card-text">
              <small className="text-muted">by {source_name} </small>
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
                display: "inline-block", // Button inline rakhne ke liye
                whiteSpace: "nowrap", // Extra wrapping avoid karne ke liye
              }}
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;