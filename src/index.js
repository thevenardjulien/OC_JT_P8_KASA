import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import P404 from "./pages/P404";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<P404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
