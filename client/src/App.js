import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoadingScreen, Navbar, Footer } from "./components";
import { Home, MannedShip, ShuttleShip, UnmannedShip } from "./pages";
import "swiper/css/bundle";
import { useSelector } from "react-redux";

export default function App() {
  const isLoading = useSelector((state) => state.isLoading);
  return (
    <>
      <BrowserRouter>
        {isLoading && <LoadingScreen />}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manned-ship" element={<MannedShip />} />
          <Route path="/shuttle-ship" element={<ShuttleShip />} />
          <Route path="/unmanned-ship" element={<UnmannedShip />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
