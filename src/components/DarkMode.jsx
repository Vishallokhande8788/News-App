import React, { useState, useEffect } from "react";
import { MdNightlightRound } from "react-icons/md"; // Moon icon for light mode
import { FaSun } from "react-icons/fa"; // Sun icon for dark mode

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme in localStorage to persist across page reloads
    const savedMode = localStorage.getItem("theme");
    if (savedMode) {
      setIsDarkMode(savedMode === "dark");
      document.body.style.background =
        savedMode === "dark"
          ? "linear-gradient(135deg, #1a1a1a 30%, #2e2e2e 100%)"
          : "linear-gradient(135deg, #ffffff 30%, #f0f4f8 100%)";
      document.body.style.transition = "background 0.3s ease";
      document.body.style.color = savedMode === "dark" ? "#ECF0F1" : "#2C3E50";
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);

    // Toggle dark mode background gradient
    const newMode = !isDarkMode ? "dark" : "light";
    document.body.style.background =
      newMode === "dark"
        ? "linear-gradient(135deg, #1a1a1a 30%, #2e2e2e 100%)"
        : "linear-gradient(135deg, #ffffff 30%, #f0f4f8 100%)";
    document.body.style.transition = "background 0.3s ease";
    document.body.style.color = newMode === "dark" ? "#ECF0F1" : "#2C3E50";

    // Save the mode in localStorage
    localStorage.setItem("theme", newMode);
  };

  return (
    <div className="dark-mode-toggle">
      <button
        onClick={toggleDarkMode}
        style={{
          backgroundColor: isDarkMode ? "#2C3E50" : "#ECF0F1", // Dark mode: blue, Light mode: light gray
          color: isDarkMode ? "#ECF0F1" : "#2C3E50", // Light text on dark, dark text on light
          padding: "5px 10px",
          borderRadius: "50px", // Circular button
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "22px", // Moderate font size
          border: "none",
          cursor: "pointer",
          transition: "all 0.3s ease", // Smooth transition for background, color, and transform
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Subtle shadow for better visibility
        }}
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")} // Slight zoom effect
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")} // Reset scale on mouse leave
      >
        {isDarkMode ? (
          <FaSun size={22} /> // Sun icon for dark mode
        ) : (
          <MdNightlightRound size={22} /> // Moon icon for light mode
        )}
      </button>
    </div>
  );
};

export default DarkMode;
