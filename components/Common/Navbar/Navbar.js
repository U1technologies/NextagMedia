import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Styles from './Navbar.module.css';
import MainLogo from '../MainLogo';
import Link from 'next/link';
import Button from '../../ContactUsButton';
import MobileMenu from './MobileMenu';
import { FaChevronDown } from 'react-icons/fa';

// Dummy data for navbar contents
const NAVBAR_CONTENT = [
  { value: 'Home', pathName: '/' },
  { value: 'About', pathName: '/about' },
  {
    value: 'Services',
    subMenu: [
      { value: 'Performance Marketing', pathName: '/service/performance-marketing' },
      { value: 'SEO Services', pathName: '/service/seo' },
      { value: 'Social Media Marketing', pathName: '/service/social-media-marketing' },
      { value: 'Content Marketing', pathName: '/service/content-marketing' },
    ],
  },
];

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false); // State for toggling dropdown
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
            {NAVBAR_CONTENT.map(({ value, pathName, subMenu }, index) => (
              <div
              key={index}
              className={`relative ml-9 cursor-pointer`}
              onMouseEnter={() => subMenu && setServicesMenuOpen(true)}
              onMouseLeave={() => subMenu && setServicesMenuOpen(false)}
            >
              {pathName ? (
                <Link href={pathName}>
                  <p className="text-text_color_primary hover:text-[#5acbf5]">{value}</p>
                </Link>
              ) : (
                <p className="flex items-center text-text_color_primary hover:text-[#5acbf5]">
                  {value}
                  {subMenu && <FaChevronDown className="ml-2 text-base" />}
                </p>
              )}
              {subMenu && servicesMenuOpen && (
                <div
                  className={`absolute top-full left-0 mt-2 bg-white shadow-lg ${Styles.dropdownMenu}`}
                >
                  {subMenu.map(({ value, pathName }, subIndex) => (
                    <Link
                      href={pathName}
                      key={subIndex}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {value}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            ))}
          </div>
        </div>
        <div className="max-md:hidden">
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
