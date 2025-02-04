import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import About from "./pages/aboutmain";
import Services from "./pages/servicesmain";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
