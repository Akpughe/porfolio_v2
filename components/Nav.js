import React, { useState } from 'react';
import NavBrand from './NavBrand';
import NavIcon from './NavIcon';
import OpenNav from './OpenNav';

const Nav = () => {
  const [show, setShow] = useState(false);

  const handleShow = (event) => {
    setShow(!show);
  };
  return (
    <>
      {show && <OpenNav show={show} />}
      <nav className="flex justify-between p-5 sm:w-screen w-full bg-white text-black">
        <div className="z-50">
          <NavBrand />
        </div>
        <div className="flex justify-center">
          <div className="w-2 h-2 rounded-lg bg-green-600 mr-3 mt-1"></div>
          <div className="text-sm">Available for new projects</div>
        </div>
        <div className="z-50" onClick={handleShow}>
          <NavIcon />
        </div>
      </nav>
    </>
  );
};

export default Nav;
