// News.js
import React, { Component } from "react";
import "../News.css";
import SkeletonLoader from "./Skeleton"; // Import SkeletonLoader component
import CategoryButtons from "./CategoryButtons";
import NewsCard from "./NewsCard";
import Pagination from "./Pagination";

class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      nextPage: null,
      prevPage: null,
      category: "politics", // Default category
    };
  }

  fetchNews = async (category = "politics", pageToken = null) => {
    this.setState({ loading: true });

    if (pageToken) {
      this.setState({ articles: [] });
    }

    const apiKey = "pub_64335a891e0057ab7411dc8e12771e62f621e";
    const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&country=in&language=en&category=${category}${
      pageToken ? `&page=${pageToken}` : ""
    }`;

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

        // Pass the pagination props to App component
        this.props.onPagination(data.nextPage, data.prevPage);
      } else {
        console.error("Error:", data);
        this.setState({ loading: false });
      }
    } catch (error) {
      console.error("Error fetching news:", error);
      this.setState({ loading: false });
    }
  };

  componentDidMount() {
    this.fetchNews(this.state.category);
  }

  handleCategoryClick = (category) => {
    this.setState({ category }, () => {
      this.fetchNews(category);
    });
  };

  handlePrevClick = () => {
    if (this.state.prevPage) {
      this.fetchNews(this.state.category, this.state.prevPage);
      window.scrollTo(0, 0);
    }
  };

  handleNextClick = () => {
    if (this.state.nextPage) {
      this.fetchNews(this.state.category, this.state.nextPage);
      window.scrollTo(0, 0);
    }
  };

  render() {
    const { articles, loading, nextPage, prevPage, category ,  } = this.state;

    return (
      <div className="container my-3">
        <h2
          className="text-center my-4 mb-5"
          style={{
            fontSize: "4rem",
            color: "#343a40",
            textTransform: "uppercase",
            fontWeight: "700",
            letterSpacing: "2px",
            textShadow:
              "5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(0, 0, 0, 0.2)",
          }}
        >
          Newsify - Top Headlines
        </h2>

        {/* Category Buttons */}
        <CategoryButtons
          category={category}
          onCategoryClick={this.handleCategoryClick}
        />

        {/* Show Skeleton loader while loading */}
        {loading ? (
          <SkeletonLoader />
        ) : (
          // Display news articles when loaded
          <div className="row">
            {articles.length > 0 ? (
              articles.map((article) => (
                <NewsCard
                  article={article}
                  key={article.link || article.title}
                />
              ))
            ) : (
              <p className="text-center">No articles available.</p>
            )}
          </div>
        )}

        {/* Pagination */}
        <Pagination
          prevPage={prevPage}
          nextPage={nextPage}
          onPrevClick={this.handlePrevClick}
          onNextClick={this.handleNextClick}
        />
      </div>
    );
  }
}

export default News;