import React from 'react';
import linkedIcon from '../Assests/linkedin.png';
import twitterIcon from '../Assests/twitter.png';
import instagramIcon from '../Assests/instagram.png';
import githubIcon from '../Assests/gtIcon.jpg';
import Typewrite from './Typewrite';
import Projects from './InfoInCodeLikeTerminal';

const Body = () => {
  return (
    <div id='home' className='bg-black h-auto mb-4 lg:min-w-screen  min-w-full md:max-w-screen '>
      <div className='lg:pl-24 px-6 lg:h-full lg:flex lg:flex-row'>
       
        <div className='lg:h-full lg:w-1/2 lg:flex lg:flex-col justify-center mt-16 m-5'>
          <h1 className='text-white lg:text-3xl lg:py-2 py-1 lg:flex lg:font-bold font-bold '>Hello, I am</h1>
          <h1 className='text-green-500 lg:text-5xl lg:font-bold lg:py-2 py-1 text-3xl font-bold lg:underline'>Shreyash Pawar</h1>
          <h1 className='text-white lg:text-2xl lg:font-semibold lg:py-2 text-xl py-1'> <Typewrite/> </h1>
          <h1 className='text-white lg:text-xl lg:py-2 py-1'>
            I am an introverted software engineer living and working in Pune. I am interested in designing & developing frontend projects using React.js/Tailwind-css and designing tools such as Figma/AdobeXD.
            Alongside my professional life, I am a trader and investor. My hobbies include playing chess, gaining knowledge about geopolitics, and doing stock analysis.
          </h1>
          
          <div className='flex  lg:h-10 lg:w-full lg:mt-8 flex-row h-8 mt-4'>
            <img src={linkedIcon} className='lg:w-10 lg:mx-4  mr-3'/>
            <img src={githubIcon} className='lg:w-10 lg:mx-4 mr-3'/>
            <img src={instagramIcon} className='lg:w-10 lg:mx-4 mr-3'/>
            <img src={twitterIcon} className='lg:w-10 lg:mx-4 mr-3'/>


          </div>

        </div>
        <div className='hidden lg:w-2/3 md:w-1/2 sm:w-1/2 sm:block '>
          <Projects/>
        </div>
      </div>
    </div>
  );
}

export default Body;
