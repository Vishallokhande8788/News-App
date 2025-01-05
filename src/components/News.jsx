import React, { Component } from "react";
import "../News.css";

class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [], // Stores the fetched news articles
      loading: false, // Indicates whether data is being loaded
      nextPage: null, // Token for the next page
      prevPage: null, // Token for the previous page
    };
  }

  // Fetch news articles from the API
  fetchNews = async (pageToken = null) => {
    this.setState({ loading: true });

    // Reset articles when a new page is fetched to show from the start
    if (pageToken) {
      this.setState({ articles: [] });
    }

    const apiKey = "pub_64335a891e0057ab7411dc8e12771e62f621e";
    const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&country=in&language=en${pageToken ? `&page=${pageToken}` : ""}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (response.ok) {
        this.setState({
          articles: data.results || [],
          nextPage: data.nextPage || null,
          prevPage: data.prevPage || null,
          loading: false,
        });
      } else {
        console.error("Error:", data);
        this.setState({ loading: false });
      }
    } catch (error) {
      console.error("Error fetching news:", error);
      this.setState({ loading: false });
    }
  };

  // Fetch news on the first load
  componentDidMount() {
    this.fetchNews();
  }

  // Handle clicking the Previous button
  handlePrevClick = () => {
    if (this.state.prevPage) {
      this.fetchNews(this.state.prevPage);
    }
  };

  // Handle clicking the Next button
  handleNextClick = () => {
    if (this.state.nextPage) {
      this.fetchNews(this.state.nextPage);
    }
  };

  // Open the full article URL
  handleReadMore = (url) => {
    window.open(url, "_blank");
  };

  render() {
    const { articles, loading, nextPage, prevPage } = this.state;

    return (
      <div className="container my-3">
        <h2 className="text-center my-4 mb-5" style={{
          fontSize: '4rem', 
          color: '#343a40', 
          textTransform: 'uppercase', 
          fontWeight: '700', 
          letterSpacing: '2px', 
          textShadow: '5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(0, 0, 0, 0.2)'
        }}>
          Newsify - Top Headlines
        </h2>

        {/* Loading Indicator */}
        {loading && <p className="text-center">Loading...</p>}

        {/* News Articles */}
        <div className="row">
          {articles.length > 0
            ? articles.map((article) => (
                <div className="col-md-4 mb-4" key={article.article_id}>
                  <div className="card" style={{ width: '320px', height: '420px', overflow: 'hidden', position: 'relative' }}>
                    <img
                      src={article.image_url || "https://via.placeholder.com/150"}
                      className="card-img-top"
                      alt="news"
                      style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                    />
                    <div className="card-body" style={{ padding: '10px' }}>
                      <h5 className="card-title" style={{ fontSize: '1rem', fontWeight: 'bold' }}>{article.title}</h5>
                      <p className="card-text" style={{ fontSize: '0.85rem' }}>{article.description}</p>
                      {/* Read More Button */}
                      <button
                        className="btn btn-primary position-absolute"
                        style={{ bottom: '5px', left: '5px' }}
                        onClick={() => this.handleReadMore(article.link)}
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              ))
            : !loading && <p className="text-center">No articles available.</p>}
        </div>

        {/* Pagination Buttons */}
        <div className="pagination-buttons d-flex justify-content-between mt-4">
          <button
            className="btn btn-secondary"
            onClick={this.handlePrevClick}
            disabled={!prevPage}
          >
            &laquo; Previous
          </button>
          <button
            className="btn btn-secondary"
            onClick={this.handleNextClick}
            disabled={!nextPage}
          >
            Next &raquo;
          </button>
        </div>

        {/* Inline Styling */}
        <style>
          {`
            .pagination-buttons .btn {
              min-width: 120px;
            }
            .card {
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            }
            .card:hover {
              box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
            }
          `}
        </style>
      </div>
    );
  }
}

export default News;