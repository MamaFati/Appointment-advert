import AboutUs from "./pages/MoreAboutUs";
import NavBar from "./components/ Header.jsx";

import MainApp from "./MainApp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OurServices from "./pages/OurServices.jsx";
import ContactUs from "./pages/ContactUs.jsx";
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainApp />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<OurServices />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/appointment" element={<MainApp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
