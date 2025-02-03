import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import About from "./pages/aboutmain";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
