import React from 'react';
import ArrowBD from '../icons/ArrowBD';
import Link from 'next/link';

const Card = ({ title }) => {
  const work = [
    {
      _id: '1',
      title: 'Tech Savvy',
      img:
        'https://www.dennissnellenberg.nl/media/pages/work/cinemato/3916505769-1603289548/case-cinemato.png',
      href: '',
    },
    {
      _id: '2',
      title: 'Tech Savvy',
      img: '',
      href: '',
    },
  ];
  return (
    <>
      {work.map((w, i) => {
        return (
          <>
            <div
              className="flex flex-col justify-between bg-gray-200 p-16 cursor-pointer transform hover:-translate-y-4 transition ease-out duration-700 mt-8 "
              style={{
                marginRight: '40px',
                width: '550px',
                height: '400px',
              }}
            >
              <h3 className="uppercase text-sm text-gray-700 font-medium tracking-wider">
                Case study
              </h3>

              <div className="flex justify-between">
                <div className="font-bold text-3xl">{w.title}</div>
                {/* <img src={w.img} className="w-56" alt="img" /> */}
              </div>
              <div className="flex flex-wrap justify-between opacity-50 hover:opacity-100">
                <div className="transform hover:-rotate-45  transition ease-out duration-700 ">
                  <ArrowBD />
                </div>
                <Link href={w.href}>
                  <div className="cursor-pointer">View Work</div>
                </Link>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Card;
