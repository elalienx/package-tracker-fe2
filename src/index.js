// NPM packages
import React from "react";
import ReactDOM from "react-dom";

// Project files
import App from "./App";
import "./scripts/i18n";
import "./scripts/fontawesome";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
