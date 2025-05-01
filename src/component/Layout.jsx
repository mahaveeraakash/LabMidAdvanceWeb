import React from "react";
import { useLocation } from "react-router-dom";
import "../Layout.css"; // Optional: styling for header/layout

function Layout({ children }) {
  const location = useLocation();
  
  // Optionally, hide elements for certain routes if needed
  const hideElements = location.pathname === "/login" || location.pathname === "/registration";

  return (
    <div className="layout">
      {/* Header with the app name */}
      <header className="app-header">
        <h1>Money Counting</h1>
      </header>
      <div className="content">
        {/* Render the page-specific content */}
        {children}
      </div>
    </div>
  );
}

export default Layout;
