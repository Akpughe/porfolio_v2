import React from 'react';
import Link from 'next/link';

const NavBrand = () => {
  return (
    <div>
      <Link href="/">
        <h2 className="text-2xl font-bold cursor-pointer">David</h2>
      </Link>
    </div>
  );
};

export default NavBrand;
