import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logoImage from '@/public/assets/Images/home-page/NEXTAG.svg';

const MainLogo = ({ width = 220, height = 50 }) => {
  return (
    <Link href="/">
      <Image src={logoImage} alt="NextagMedia Company" width={width} height={height} />
    </Link>
  );
};

export default MainLogo;
