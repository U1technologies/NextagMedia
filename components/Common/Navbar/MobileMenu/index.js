import React, { useState } from 'react';
import Image from 'next/image';
import Drawer from '@mui/material/Drawer';
import burgerMenu from '@/public/assets/Images/home-page/burgerMenu.svg'
import crossIcon from '@/public/assets/Images/home-page/close.svg';
import Styles from './index.module.css';
import { useRouter } from 'next/router';
import Button from '@/components/ContactUsButton';

// Dummy data for navbar contents
const NAVBAR_CONTENT = [
  { value: 'Home', pathName: '/' },
  { value: 'About', pathName: '/about' },
  { value: 'Services', pathName: '/service/performance-marketing' },
  // { value: 'Blog', pathName: '/blog' },
];

const MobileMenu = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter();

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const handleRedirect = (pathName) => {
    router.push(pathName);
    setTimeout(() => {
      setIsDrawerOpen(false);
    }, 300);
  };

  return (
    <div className={Styles.burgerDiv}>
      <button
        aria-controls="mobile-menu"
        aria-haspopup="true"
        onClick={handleDrawerOpen}
        className="flex"
      >
        <Image
          src={burgerMenu}
          width={25}
          height={25}
          alt="Navigation Menu Icon"
          className="mt-1"
        />
      </button>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={handleDrawerClose}
        classes={{ paper: Styles.menu }}
      >
        <div className="relative p-4">
          <Image
            src={crossIcon}
            width={25}
            height={25}
            alt="Close Menu Icon"
            className="absolute right-4 top-4 cursor-pointer"
            onClick={handleDrawerClose}
          />
        </div>
        <div className="mt-12 px-4">
          {NAVBAR_CONTENT.map(({ value, pathName }, index) => (
            <div key={index} className="py-2">
              <p
                className="cursor-pointer text-lg font-medium"
                onClick={() => handleRedirect(pathName)}
              >
                {value}
              </p>
            </div>
          ))}
        </div>
        <div className="px-4 mt-6">
          <Button />
        </div>
      </Drawer>
    </div>
  );
};
export default MobileMenu;
