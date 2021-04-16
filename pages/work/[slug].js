import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

export default function Projectpage({ page }) {
  return (
    <>
      <Head>
        <title>{page.name}</title>
      </Head>
      <Layout>
        <div className="container mx-auto w-3/4 mb-10">
          <div className="bg-black w-24 p-3 mb-6 text-white hover:text-black hover:bg-white hover:border-gray-600 border">
            <Link href="/work"> ← Back</Link>
          </div>
          <div className="flex flex-row justify-between pl-12 mb-12">
            <div className="flex">
              <h1 className="text-3xl font-bold tracking-wider">{page.name}</h1>
            </div>
            <div className="flex">
              <a
                className="flex items-center pr-3"
                href={page.github}
                target="_blank"
              >
                <img
                  className="pr-1"
                  style={{ width: '24px' }}
                  src="../../images/github.svg"
                  alt=""
                />
                <span>Github</span>
              </a>
              <a
                className="flex items-center pr-3"
                href={page.link}
                target="_blank"
              >
                <img
                  className="pr-1"
                  style={{ width: '24px' }}
                  src="../../images/eye.svg"
                  alt=""
                />

                <span>Live Preview</span>
              </a>
            </div>
          </div>
          <div className="flex">
            {/* img */}
            <div className="flex flex-col border-gray-600">
              <h3 className="font-semibold text-xl">ScreenShot</h3>
              <img
                style={{ width: '700px' }}
                src={page.backgroundImage}
                alt={page.name}
              />
            </div>
            <div className="flex flex-col p-24">
              <div>
                <h1 className="font-semibold text-2xl tracking-wide pb-6">
                  Stack / Tools
                </h1>
              </div>

              <div>
                <h3 className="uppercase font-light text-xl tracking-wide">
                  {page.stack}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

// export async function getStaticPaths() {
//   const pages = (await import(`../../data/project.json`)).default;

//   const id = pages.map((page) => page.slug);

//   const paths = id.map((slug) => ({ params: { slug } }));

//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params: { slug } }) {
//   const pages = (await import(`../../data/project.json`)).default;

//   const page = pages.find((x) => x.slug === slug);

//   return {
//     props: {
//       page,
//     },
//   };
// }

export async function getStaticPaths() {
  const pages = (await import(`../../data/project.json`)).default;

  const id = pages.map((page) => page.slug);

  const paths = id.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const pages = (await import(`../../data/project.json`)).default;

  const page = pages.find((x) => x.slug === slug);

  return {
    props: {
      page,
    },
  };
}

// export default Projectpage;
