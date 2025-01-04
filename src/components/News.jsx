import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [], // Initial state is an empty array
      loading: false,
    };
  }

  async componentDidMount() {
    try {
      let url = "https://newsdata.io/api/1/news?apikey=pub_64335a891e0057ab7411dc8e12771e62f621e&country=in&language=en";
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({ articles: parsedData.results }); // Corrected to use `results`
    } catch (error) {
      console.error("Error fetching news data:", error);
    }
  }

  render() {
    const { articles } = this.state;

    return (
      <div className="container my-3">
        <h2>Newsify - Top Headlines</h2>
        <div className="row">
          {Array.isArray(articles) && articles.length > 0 ? (
            articles.map((element) => (
              <div className="col-md-4 mb-5" key={element.article_id}>
                <div className="card">
                  <img
                    src={element.image_url || "https://via.placeholder.com/150"}
                    className="card-img-top"
                    alt="news"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{element.title}</h5>
                    <p className="card-text">{element.description}</p>
                    <a href={element.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No articles available.</p>
          )}
        </div>
      </div>
    );
  }
}

export default News;