import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import P404 from "./pages/P404";
import Apropos from "./pages/Apropos";
import Logement from "./pages/Logement";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter basename="/OC_JT_P8_KASA">
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/logement/:title" element={<Logement />} />
      <Route path="/a-propos" element={<Apropos />} />
      <Route path="*" element={<P404 />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  /* </React.StrictMode> */
);
