import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Recipes from "./components/Recipes";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Feedback from "./pages/Feedback";

function App() {
  
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Recipes />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/feedback' element={<Feedback />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
