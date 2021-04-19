import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className="w-full">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
