import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import About from "./pages/aboutmain";
import Services from "./pages/servicesmain";
import Career from "./pages/carreermain";
import BlogMain from "./pages/blogmain";
import ContactMain from "./pages/contactmain";
import JobApplicationForm from "./pages/jobform";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/blog" element={<BlogMain />} />
          <Route path="/contact" element={<ContactMain />} />
          <Route path="/apply" element={<JobApplicationForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
