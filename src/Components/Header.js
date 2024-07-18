import React, { useState } from 'react';

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
          <p>home</p>
          </button>

        <button className={` px-2  lg:text-lg ${highlightedHeaderTab === "workexperience" ? "text-green-400 underline" : "text-white"}`}
          onClick={() => setHighlightedHeaderTab("workexperience")}>
          <p>workexperience</p>
          </button>

        <button className={` px-2  lg:text-lg ${highlightedHeaderTab === "projects" ? "text-green-400 underline" : "text-white"}`}
          onClick={() => setHighlightedHeaderTab("projects")}>
          <p>projects</p>
          </button>

        <button className={`px-2  lg:text-lg ${highlightedHeaderTab === "education" ? "text-green-400 underline" : "text-white"}`}
          onClick={() => setHighlightedHeaderTab("education")}>
          <p>education</p>
          </button>

        <button className={`px-2  lg:text-lg ${highlightedHeaderTab === "contact" ? "text-green-400 underline" : "text-white"}`}
          onClick={() => setHighlightedHeaderTab("contact")}>
          <p>contact</p>
          </button>

        <button className={`px-2  lg:text-lg ${highlightedHeaderTab === "hireme" ? "text-green-400 underline" : "text-white"}`}
          onClick={() => setHighlightedHeaderTab("hireme")}>
          <p>Hire-Me</p>
        </button>
      </div>

    </header>
  );
}

export default Header;
