import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [highlightedHeaderTab, setHighlightedHeaderTab] = useState("home");
  return (
    <header className='bg-black lg:py-2 lg:mr-64 flex flex-row justify-between lg:px-4 sticky top-0 '>
      <div>
        <h1 className='lg:text-green-400 lg:text-2xl'>Portfolio</h1>
      </div>
      <div>

        <button className={`px-2  lg:text-lg ${highlightedHeaderTab === "home" ? "text-green-400 underline" : "text-white"}`}
          onClick={() => setHighlightedHeaderTab("home")}>
          <h1 to="/education">Home</h1>
          </button>

        <button className={` px-2  lg:text-lg ${highlightedHeaderTab === "workexperience" ? "text-green-400 underline" : "text-white"}`}
          onClick={() => setHighlightedHeaderTab("workexperience")}>
          <h1 to="/education">Work Experience</h1>
          </button>

        <button className={` px-2  lg:text-lg ${highlightedHeaderTab === "projects" ? "text-green-400 underline" : "text-white"}`}
          onClick={() => setHighlightedHeaderTab("projects")}>
          <h1 to="/education">Projects</h1>
          </button>

        <button className={`px-2  lg:text-lg ${highlightedHeaderTab === "education" ? "text-green-400 underline" : "text-white"}`}
          onClick={() => setHighlightedHeaderTab("education")}>
          <h1 to="/education">Education</h1>
        </button>

        <button className={`px-2  lg:text-lg ${highlightedHeaderTab === "contact" ? "text-green-400 underline" : "text-white"}`}
          onClick={() => setHighlightedHeaderTab("contact")}>
          <h1 to="/education">Contact Me</h1>
          </button>

        <button className={`px-2  lg:text-lg ${highlightedHeaderTab === "hireme" ? "text-green-400 underline" : "text-white"}`}
          onClick={() => setHighlightedHeaderTab("hireme")}>
          <h1 to="/education">Hire Me</h1>
          </button>
      </div>

    </header>
  );
}

export default Header;
