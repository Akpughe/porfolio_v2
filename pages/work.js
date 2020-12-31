import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import ItemsCarousel from 'react-items-carousel';

const work = () => {
  const stuff = [
    {
      name: 'To-do List',
      link: 'https://react-todo-hooks.now.sh/',
      github: 'https://github.com/Akpughe/react-todo-hooks',
      stack: 'react js',
    },
    {
      name: 'E-commerce',
      link: 'https://snip-cart-ecommerce.now.sh/',
      github: 'https://github.com/Akpughe/Snipcart-nxtjs',
      stack: 'react, snipcart',
    },
    {
      name: 'Twitter clone',
      link: '',
      github: 'https://github.com/Akpughe/Twitter_clone',
      stack: 'react, firebase',
    },
    {
      name: 'Expense Tracker',
      link: 'https://fathomless-plateau-51253.herokuapp.com/',
      github: 'https://github.com/Akpughe/expense-tracker',
      stack: 'react, nodejs, expressjs, mongodb',
    },
    {
      name: 'Gallery App',
      link: '',
      github: 'https://github.com/Akpughe/react-tailwind-pixabay-gallery',
      stack: 'react, pixabay api, tailwind',
    },
  ];

  const [activeItemIndex, setActiveItemIndex] = useState(0);

  return (
    <>
      <Head>
        <title>David</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="container mx-auto w-3/4 mb-10">
          <div className="pl-12 mb-12">
            <h1 className="text-4xl font-bold tracking-wider">Works</h1>
          </div>
          <div className="mb-8">
            <ItemsCarousel
              infiniteLoop={true}
              gutter={500}
              activePosition={'center'}
              chevronWidth={10}
              chevronHeight={10}
              disableSwipe={false}
              alwaysShowChevrons={false}
              numberOfCards={3}
              slidesToScroll={1}
              outsideChevron={false}
              showSlither={false}
              firstAndLastGutter={false}
              activeItemIndex={activeItemIndex}
              requestToChangeActive={setActiveItemIndex}
              rightChevron={
                <button className="p-6 rounded-full bg-white" shape="circle">
                  →
                </button>
              }
              leftChevron={
                <button className="p-6 rounded-full bg-white" shape="circle">
                  ←
                </button>
              }
            >
              {stuff.map((item, index) => {
                return (
                  <div
                    className="flex flex-col justify-between rounded-md bg-gray-200 text-black p-10"
                    style={{ width: '500px', height: '400px' }}
                    key={index}
                  >
                    <div className="flex justify-between">
                      <h1 className="text-2xl font-bold tracking-wide">
                        {item.name}
                      </h1>
                      <div>
                        <h1 className="text-green-600">{item.stack}</h1>
                      </div>
                    </div>
                    <div className="flex justify-around">
                      <Link href={item.link}>
                        <h3 className="cursor-pointer">View Work</h3>
                      </Link>
                      <Link href={item.link}>
                        <h3 className="cursor-pointer text-blue-600">Github</h3>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </ItemsCarousel>
          </div>
          <Link href="https://github.com/Akpughe">
            <h1 className="cursor-pointer text-blue-600 underline">Show more</h1>
          </Link>
        </div>
      </Layout>
    </>
  );
};

export default work;
