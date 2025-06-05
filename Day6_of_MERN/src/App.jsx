import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import BgChanger from "./pages/BgChanger";
import FetchUsers from "./pages/FetchUsers";
import ChildA from "./pages/ChildA";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bgchanger" element={<BgChanger />} />
          <Route path="/fetchusers" element={<FetchUsers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/childa" element={<ChildA />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
