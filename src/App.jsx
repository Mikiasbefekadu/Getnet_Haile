import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home.jsx";
import AboutPage from "./pages/About.jsx";
import ContactPage from "./pages/Contact.jsx";
import PortfolioPage from "./pages/PortfolioPage.jsx";
import PortfolioDetailPage from "./pages/PortfolioDetailPage.jsx";                                  

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/portfolio/:id" element={<PortfolioDetailPage />} />

    </Routes>
  );
}

export default App;
