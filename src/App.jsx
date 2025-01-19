import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import About from "./components/About"; // Import the About component
import Services from "./components/Services"; // Import the Services component
import Contact from "./components/Contact"; // Import the Contact component

const App = () => {
  const [progress, setProgress] = React.useState(0);

  const updateProgress = (newProgress) => {
    setProgress(newProgress);
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <LoadingBar color="#f11946" progress={progress} />
        <Routes>
          <Route path="/" element={<News setProgress={updateProgress} />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

      <footer
        className="text-center mt-5 py-3"
        style={{
          backgroundColor: "#34495e",
          color: "#ecf0f1",
          fontSize: "1rem",
          letterSpacing: "0.2px",
          opacity: "0.7",
        }}
      >
        <div className="container">
          <p className="m-0" style={{ fontWeight: "400", lineHeight: "1" }}>
            © 2025 Vishal Lokhande. All Rights Reserved.
          </p>
          <p className="m-0" style={{ fontWeight: "400", lineHeight: "1" }}>
            Powered by <span style={{ fontWeight: "300" }}>NewsData API</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
