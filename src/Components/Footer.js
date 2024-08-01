// import Link from 'next/link';
// import { CgGitFork } from "react-icons/cg";
// import { IoStar } from "react-icons/io5";
import githubIcon from '../Assests/github.png';
import linkedInIcon from '../Assests/linkedin.png';

function Footer() {
  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white px-14">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            © Developer Portfolio by <a target="_blank" href="https://www.linkedin.com/in/shreyash-pawar-361087192/" className="text-[#16f2b3]">Shreyash Pawar</a>
          </p>
          <div className="flex items-center lg:w-48 justify-between">
            <a 
              target="_blank"
              href="https://github.com/shreyash2628"
              className="flex items-center  gap-2 lg:w-8 lg:h-8 hover:text-[#16f2b3]"
            >
              <img src={githubIcon} className='w-full h-full'/>
              <span>Github</span>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/shreyash-pawar-361087192/"
              className="flex items-center gap-2 lg:w-8 lg:h-8  hover:text-[#16f2b3]"
            >
              <img src={linkedInIcon} className='w-full h-full'/>
              <span>Linkedin</span>
            </a>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Footer;