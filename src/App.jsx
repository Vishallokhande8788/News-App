import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

class App extends Component {
  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress });
  };

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar color="#f11946" progress={this.state.progress} />
          <News setProgress={this.setProgress} />
        </Router>
      </div>
    );
  }
}

export default App;
