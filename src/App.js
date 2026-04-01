// src/App.js
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import About from "./About";
import Careers from "./Careers";
import Services from "./Services";
import Contact from "./Contact";
import Foodeez from "./Foodeez";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        {/* Home - Exact UI from your screenshot */}
        <Route path="/" element={<Main />} />

        {/* Placeholder pages (you can expand later) */}
        <Route
          path="/About"
          element={<About />}
          
        />
        <Route path="/services" element={<Services />} />
        <Route path="/foodeez" element={<Foodeez />} />
        <Route path="/industries" element={<Navigate to="/foodeez" replace />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

function FeatureItem({ title }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-100 p-4 md:p-5 shadow-sm hover:shadow-lg transition-shadow duration-300">
      <p className="text-base md:text-lg font-semibold text-slate-800">{title}</p>
    </div>
  );
}

export default App;