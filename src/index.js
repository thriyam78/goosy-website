import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import ToastProvider from "./provider/ToastProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="overflow-x-hidden">
        {/* <ToastProvider /> */}
        <App />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
