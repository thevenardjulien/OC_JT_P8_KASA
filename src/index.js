import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import P404 from "./pages/P404";
import Header from "./layout/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<P404 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
