import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { CircuitProvider } from "./context/CircuitContext";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Circuits from "./pages/Circuits";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { LegalNotice, PrivacyPolicy } from "./pages/Legal";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <HashRouter>
      <LanguageProvider>
        <CircuitProvider>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/circuits" element={<Circuits />} />
            <Route path="/galerie" element={<Gallery />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<LegalNotice />} />
            <Route path="/confidentialite" element={<PrivacyPolicy />} />
          </Routes>
          <Footer />
        </CircuitProvider>
      </LanguageProvider>
    </HashRouter>
  );
}
