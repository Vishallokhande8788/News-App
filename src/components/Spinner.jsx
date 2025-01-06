import React, { Component } from "react";

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img
          src="spinner.png"
          alt="Loading..."
          style={{ width: "100px", height: "100px" }}
        />
      </div>
    );
  }
}

export default Spinner;
