import Body from './Components/Home';
import Header from './Components/Header';
import WorkExperience from './Components/WorkExperience';
import Projects from './Components/InfoInCodeLikeTerminal';
import Education from './Components/Education';
import ComponentEndTemplate from './Components/ComponentEndTemplate';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="bg-black flex flex-col min-w-full">
      <Header />
      <div className=''>
        <Body />

        <ComponentEndTemplate title={'Work Experience'} />
        <WorkExperience />

        <ComponentEndTemplate title={'My Skills'} />
        <Skills/>

        <ComponentEndTemplate title={'Education'} />
        <Education />
      </div>

      {/* <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hire-me" element={<WorkExperience />} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
