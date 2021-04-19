import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import WorkCard from '../components/WorkCard';
import Arrow from '../icons/Arrow';
import ArrowBlack from '../icons/ArrowBlack';

export default function Home({ props }) {
  return (
    <>
      <Head>
        <title>David</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <section
          style={{
            background: "url('/images/line-home.svg') 55vw center no-repeat",
            backgroundSize: 'contain',
          }}
        >
          <div className="flex justify-center text-center w-1/2 m-auto m-0 mt-48">
            <div className="flex flex-col">
              <h3 className="text-center text-sm text-gray-500">
                FREELANCE WEB DEVELOPER
              </h3>
              <h1 className="text-center text-6xl font-semibold mb-12">
                I create <span className="text-indigo-600">effective</span>{' '}
                solutions for brands.
              </h1>
              <div className="flex justify-center">
                <Link href="/work">
                  <button className="flex items-center bg-black text-white h-16 py-7 px-12 rounded-full">
                    My work <Arrow />{' '}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section
          className="bg-gray-900 text-white mt-48"
          style={{ paddingBottom: '120px' }}
        >
          <div className="flex justify-center">
            <div className="-mt-20 mb-32 flex relative ">
              <span className="absolute flex bottom-0 right-0 bg-gray-900 py-8 px-20 cursor-pointer">
                David <Arrow />
              </span>
              <img className="" src="/images/copy.jpg" alt="" />
            </div>
          </div>
          <div className="flex flex-wrap justify-evenly  pr-12 pr-12">
            <div className="flex-1 max-w-md">
              <h1 className="text-5xl font-bold mb-1">
                How can I help <br /> you?{' '}
              </h1>
              <p className="font-thin text-base text-justify leading-8 mb-8">
                As a freelance digital designer, I am here to make you stand out
                in the digital world. The combination of my passion for design
                and your vision will ensure a great end result.
              </p>

              <Link href="#" className="">
                <span className="flex text-lg cursor-pointer opacity-50 hover:opacity-100 transition ease-out duration-500">
                  Services <Arrow />
                </span>
              </Link>
            </div>
            {/*  */}
            {/* <div
              className="flex text-sm justify-evenly"
              style={{ paddingTop: '6rem' }}
            >
              <div className="flex-col mr-4">
                <h3 className="mb-2 text-indigo-600 uppercase">Frontend</h3>
                <div className="flex flex-col">
                  <span className="mb-1">HTML 5</span>
                  <span className="mb-1">CSS 3</span>
                  <span className="mb-1">JavaScript</span>
                  <span className="mb-1">React JS</span>
                  <span className="mb-1">Next JS</span>
                  <span className="mb-1">Gatsby JS</span>
                </div>
              </div>
              <div className=" flex-col mr-4">
                <h3 className="mb-2 text-indigo-600 uppercase">Backend</h3>
                <div className="flex flex-col">
                  <span className="mb-1">Node JS</span>
                  <span className="mb-1">Express JS</span>
                  <span className="mb-1">MongoDB</span>
                  <span className="mb-1">Firebase</span>
                </div>
              </div>
              <div className=" flex-col">
                <h3 className="mb-2 text-indigo-600 uppercase">Tools</h3>
                <div className="flex flex-col">
                  <span className="mb-1">Git</span>
                  <span className="mb-1">Github</span>
                  <span className="mb-1">VSCode</span>
                  <span className="mb-1"></span>
                </div>
              </div>
            </div> */}
            {/*  */}
          </div>
        </section>

        {/* section 2*/}

        <section style={{ paddingTop: '120px', paddingBottom: '140px' }}>
          <div className="flex flex-wrap justify-center  item-center">
            <h2 className=" text-4xl font-bold" style={{ marginRight: '40px' }}>
              Recent Work
            </h2>
            <Link href="/work">
              <button className="flex items-center bg-white text-black text-lg h-16 py-7 px-12 ml-11 border border-gray-300 rounded-full">
                All work <ArrowBlack />{' '}
              </button>
            </Link>
          </div>

          <div
            className="flex flex-wrap justify-evenly px-24"
            style={{ paddingTop: '60px' }}
          >
            <Link href="/work/hmis">
              <div className="flex cursor-pointer mb-6">
                <WorkCard
                  image="../images/health.jpeg"
                  job={
                    <h1 className="text-xl font-normal">
                      Health Information System
                    </h1>
                  }
                  width="300px"
                />
              </div>
            </Link>
            <Link href="/work/expense_tracker">
            
            <div className="flex cursor-pointer">
              <WorkCard
                image="../images/tracker.jpeg"
                border="border-2"
                job={<h1 className="text-xl font-normal">Expense Tracker</h1>}
                width="300px"
              />
            </div>
            </Link>
          </div>
        </section>

        <section className="flex justify-center border-t-2 border-gray-400 pt-32">
          <div
            className="text-center m-auto"
            style={{ marginBottom: '120px' }}
          >
            <h3 className="text-sm font-normal text-gray-600 tracking-wider mb-8	 ">
              DO YOU LIKE MY WORK?
            </h3>
            <h2 className="text-5xl font-bold tracking-wider mb-8">
              Let's <span className="text-indigo-600">work</span> together!
            </h2>
            <div className="flex justify-center">
              <Link href="/contact">
                <button className="flex items-center bg-white border-black text-black text-lg h-16 py-7 px-12 ml-11 border border-gray-300 rounded-full">
                  Get in touch <ArrowBlack />{' '}
                </button>
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
