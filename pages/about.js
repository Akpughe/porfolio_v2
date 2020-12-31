import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

const about = () => {
  return (
    <>
      <Head>
        <title>David</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section
          className="h-full mb-10"
          style={{ background: 'url("../images/line-about.svg")' }}
        >
          <div className="container mx-auto w-3/5 pt-24 mb-10">
            <h3 className="uppercase tracking-wider text-sm text-gray-500">
              i'm david
            </h3>
            <h1 className="text-5xl tracking-wider font-bold">About me:</h1>
          </div>
          <div className="flex flex-row flex-wrap justify-center">
            <div className="flex" style={{ width: '500px' }}>
              <img className="" src="/images/copy.jpg" alt="" />
            </div>
            <div
              className="flex flex-col bg-gray-900 p-16 text-white"
              style={{ width: '500px' }}
            >
              <div className="flex justify-between mb-4">
                <div>
                  <h2 className="text-5xl font-bold">4</h2>
                  <span className="uppercase text-sm">years of experience</span>
                </div>
                <div>
                  <h2 className="text-5xl font-bold">19</h2>
                  <span className="uppercase text-sm">years old</span>
                </div>
              </div>
              <h2 className="tracking-wide leading-8 text-gray-500 mt-4 mb-4">
                I'm a software engineering based in Nigeria, specialzing in
                building exceptional and high quality website and applications.
              </h2>

              <div className="flex">
                <div className="cursor-pointer hover:opacity-50 mr-4">
                  <img src="../images/ico-ig-light.svg" alt="" />
                </div>
                <div className="cursor-pointer hover:opacity-50 mr-4">
                  <img src="../images/ico-li-light.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default about;
