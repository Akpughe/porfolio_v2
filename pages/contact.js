import React from 'react';
import Arrow from '../icons/Arrow';
import Nav from '../components/Nav';
import Head from 'next/head';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';

const contact = () => {
  return (
    <>
      <Head>
        <title>David</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <section
        className="h-screen mb-10"
        style={{ background: 'url("../images/line-about.svg")' }}
      >
        <div className="flex flex-row h-screen flex-wrap justify-center">
          <Fade top>
            <div
              className="flex flex-col flex-1 bg-white p-16 text-black"
              style={{ background: 'url("../images/line-about.svg")' }}
            >
              <div className="flex flex-col justify-center items-center my-32 mb-4">
                <div>
                  <h2 className="text-sm uppercase text-gray-500 font-semibold tracking-widest">
                    contact
                  </h2>
                  <h2 className="text-5xl font-bold leading-loose tracking-widest">
                    Get in touch <span className="text-indigo-600">:</span>
                  </h2>
                  <h2 className="text-sm uppercase leading-loose text-indigo-600 tracking-widest mb-2">
                    contact details
                  </h2>
                  <h2 className="text-base mb-2">davidakpughe2@gmail.com</h2>
                  <h2 className="text-base mb-2">+234 905 593 6918</h2>
                  <h2 className="text-base mt-5 mb-2 leading-loose text-gray-600">
                    © {new Date().getFullYear()} David Akpughe
                  </h2>
                </div>
              </div>
            </div>
          </Fade>
          {/* --- */}
          <div className="flex flex-col flex-1 bg-gray-900 p-16 text-white">
            <Fade clear>
              <div className="flex flex-col justify-center items-center my-32 mb-4">
                <div>
                  <div className="mb-6">
                    <img
                      src="../images/bear.gif"
                      style={{ width: '430px' }}
                      alt=""
                    />
                  </div>
                  <h2 className="text-3xl font-bold leading-loose tracking-widest text-center">
                    Say hi.{' '}
                    <span className="text-indigo-600">Like this bear.</span>
                  </h2>
                  <div className="flex justify-center mt-4">
                    <Link href="#">
                      <button className="flex items-center border-gray-600 text-white text-lg h-16 py-7 px-12 ml-11 border border-gray-300 rounded-full">
                        davidakpughe2@gmail.com <Arrow />{' '}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
};

export default contact;
