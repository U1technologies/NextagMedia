import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Styles from './Navbar.module.css';
import MainLogo from '../MainLogo';
import Link from 'next/link';
import Button from '../../ContactUsButton';
import MobileMenu from './MobileMenu';

// Dummy data for navbar contents
const NAVBAR_CONTENT = [
  { value: 'Home', pathName: '/' },
  { value: 'About', pathName: '/about' },
  { value: 'Services', pathName: '/service/performance-marketing' },
  // { value: 'Blog', pathName: '/blog' },
];

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (document.getElementById('navbar')) {
        if (prevScrollPos > currentScrollPos) {
          document.getElementById('navbar').style.top = '0';
        } else {
          document.getElementById('navbar').style.top = '-100px';
        }
        setPrevScrollPos(currentScrollPos);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const pathsWithoutNavbar = [];
  if (pathsWithoutNavbar.includes(router.pathname)) {
    return null;
  }
  return (
    <div className={Styles.navbar} id="navbar">
    <div className={Styles.innerDiv}>
      <MainLogo />
      <div className={`${Styles.contentDiv} hidden md:flex justify-center items-center`}>
        <div className="flex justify-evenly items-center">
          {NAVBAR_CONTENT.map(({ value, pathName }, index) => (
            <Link href={pathName} className="cursor-pointer ml-9" key={index}>
              <p>{value}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className='max-md:hidden'>
      <Button />
      </div>
      <div className="md:hidden">
        <MobileMenu />
      </div>
    </div>
  </div>
  
  );
};

export default Navbar;
