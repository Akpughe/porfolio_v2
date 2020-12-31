import React from 'react';
import FooterBrand from './FooterBrand'

const Footer = () => {
  return (
    <>
      <div
        className="flex flex-wrap justify-center justify-around items-center w-3/4 h-40 m-auto absolute left-0 right-0"
        style={{
          background: "url('/images/bg-footer.jpg') center center no-repeat", backgroundSize:"cover"
        }}
      >
        <div>
        </div>
        <div className="text-lg text-white font-thin">
            © {new Date().getFullYear()} David Akpughe
        </div>
        <div>
            <FooterBrand/>
        </div>

      </div>
    </>
  );
};

export default Footer;
