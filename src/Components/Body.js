import React from 'react';
import image from "../illustrator.png";

const Body = () => {
  return (
    <div className='bg-black h-screen lg:max-w-screen '>
      <div className='lg:mx-24 lg:h-full lg:flex lg:flex-row '>
        <div className='lg:h-full lg:w-1/2 lg:flex lg:flex-col justify-center  lg:-mt-16 mt-16 m-5'>
          <h1 className='text-white lg:text-3xl lg:py-2 py-1 lg:flex lg:font-bold font-bold '>Hello, I am</h1>
          <h1 className='text-green-500 lg:text-5xl lg:font-bold lg:py-2 py-1 text-3xl font-bold lg:underline'>Shreyash Pawar</h1>
          <h1 className='text-white lg:text-2xl lg:font-semibold lg:py-2 text-xl py-1'>React-JS Developer</h1>
          <h1 className='text-white lg:text-xl lg:py-2 py-1'>
            I am an introverted software engineer living and working in Pune. I am interested in designing & developing frontend projects using React.js/Tailwind-css and designing tools such as Figma/AdobeXD.
            Alongside my professional life, I am a trader and investor. My hobbies include playing chess, gaining knowledge about geopolitics, and doing stock analysis.
          </h1>
        </div>
        <div className='hidden lg:w-1/2 md:w-1/2 sm:w-1/2 sm:block'>
          <img src={image} className='h-full' alt="Profile" />
        </div>
      </div>
    </div>
  );
}

export default Body;
