import Body from './Components/Body';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WorkExperience from './Components/WorkExperience';
import Projects from './Components/Projects';
import Education from './Components/Education';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="bg-black">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hire-me" element={<WorkExperience />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
