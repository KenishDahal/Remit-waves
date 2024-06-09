import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Download from "./components/Download";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* <Route path="/" exact component={() => <App />} /> */}
        <Route exact path="/" element={<App />} />
        <Route exact path="/download" element={<Download />} />

        {/* <Route path="/download" exact component={() => <Download />} /> */}
      </Routes>
    </Router>
  </React.StrictMode>
);
