import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import WorkCard from '../../components/WorkCard';

const work = ({ projects }) => {
  return (
    <>
      <Head>
        <title>David | Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="container mx-auto sm:w-3/4 w-full  mb-10">
          <div className="pl-12 mb-12">
            <h1 className="text-4xl font-bold tracking-wider">Works</h1>
          </div>
          <div className="flex flex-wrap pb-4 justify-center ">
            {projects.map((project, index) => {
              return (
                <Link href={`/work/${project.slug}`}>
                  <div className="mr-6 mb-4 cursor-pointer">
                    <WorkCard
                      image={project.thumbnail}
                      job={project.name}
                      width="300px"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const projects = (await import(`../../data/project.json`)).default;

  return {
    props: {
      projects,
    },
  };
}

export default work;
