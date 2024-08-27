import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";

createRoot(document.getElementById("root")!).render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);
