import React from 'react';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';

const OpenNav = () => {
  return (
    <div
      className="flex z-40 bg-gray-300 w-screen h-screen fixed justify-center items-center"
      style={{
        backgroundImage: "url('/images/line.svg')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div
        className="flex flex-wrap justify-between"
        style={{ width: '750px' }}
      >
        <Fade top>
          <div className="flex flex-col py-6 justify-between">
            <div className="flex flex-col justify-between">
              <div className="w-20 h-20 bg-black rounded-full"></div>
              <h2 className="uppercase text-sm font-semibold text-indigo-600 mt-10">
                Contact Details
              </h2>
              <Link href="mailto:davidakpughe2@gmail.com">
                <span className="cursor-pointer hover:underline hover:opacity-50 transform transition ease-out duration-700">
                  davidakpughe2@gmail.com
                </span>
              </Link>
              <span className="cursor-pointer hover:underline hover:opacity-50 transform transition ease-out duration-700">
                +234 905 5936 918
              </span>
            </div>

            <div className="text-lg text-black font-thin">
              © {new Date().getFullYear()} David Akpughe
            </div>
          </div>
          <div className="flex flex-col">
            <ul>
              <Link href="/">
                <li className="font-bold text-5xl py-2 cursor-pointer hover:opacity-50 transform transition ease-out duration-700">
                  Home
                </li>
              </Link>
              <Link href="/work">
                <li className="font-bold text-5xl py-2 cursor-pointer hover:opacity-50 transform transition ease-out duration-700">
                  My Work
                </li>
              </Link>
              <Link href="#">
                <li className="font-bold text-5xl py-2 cursor-pointer hover:opacity-50 transform transition ease-out duration-700">
                  Services
                </li>
              </Link>
              <Link href="/about">
                <li className="font-bold text-5xl py-2 cursor-pointer hover:opacity-50 transform transition ease-out duration-700">
                  About me
                </li>
              </Link>
              <Link href="#">
                <li className="font-bold text-5xl py-2 cursor-pointer hover:opacity-50 transform transition ease-out duration-700">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default OpenNav;
