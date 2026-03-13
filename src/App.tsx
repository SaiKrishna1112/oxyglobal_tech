import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import PresentationsSection from "./Pages/Presentation";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/corporatepresentations" element={<PresentationsSection />} />
      </Routes>
    </Router>
  );
}

export default App;