import { useEffect, useState } from "react";
import OurCompany from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUsComponent";
import FooterComponent from "./components/Footer";
import IndexHomePage from "./components/HomePage";
import NavbarComponent from "./components/Navbar";
import Services from "./components/Services/Index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <>
          <NavbarComponent />
          <Routes>
            <Route path="/" element={<IndexHomePage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/aboutUs" element={<OurCompany />} />
            <Route path="/contactUs" element={<ContactUs />} />
          </Routes>
          <FooterComponent />
        </>
      )}
    </Router>
  );
}

export default App;
