import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  // Method to handle next and prev page click
  handlePagination = (nextPage, prevPage) => {
    console.log("Next Page:", nextPage);
    console.log("Previous Page:", prevPage);
  };

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <News onPagination={this.handlePagination} />
        </Router>
      </div>
    );
  }
}

export default App;
