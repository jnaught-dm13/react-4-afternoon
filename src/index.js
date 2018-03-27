import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import "./main.css";
import App from "./App";

ReactDOM.render(
  <Router>
    <App />
  </Router>,

  document.getElementById("root")
);
