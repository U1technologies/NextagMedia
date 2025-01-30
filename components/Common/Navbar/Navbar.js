import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Styles from './Navbar.module.css';
import MainLogo from '../MainLogo';
import Link from 'next/link';
import Button from '../../ContactUsButton';
import MobileMenu from './MobileMenu';
import { FaChevronDown } from 'react-icons/fa';

const NAVBAR_CONTENT = [
  { value: 'Home', pathName: '/' },
  { value: 'About', pathName: '/about' },
  {
    value: 'Services',
    subMenu: [
      { value: 'Performance Marketing', pathName: '/service/performance-marketing' },
      { value: 'Social Media Management', pathName: '/service/social-media-management' },
      { value: 'Web Development', pathName: '/service/web-development' },
      { value: 'SEO', pathName: '/service/seo' },
      { value: 'Lead Generation', pathName: '/service/lead-generation' },
      { value: 'Personal Branding', pathName: '/service/personal-branding' },
      { value: 'UGC Content', pathName: '/service/ugc-content' },
    ],
  },
];

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [closeDropdownTimeout, setCloseDropdownTimeout] = useState(null);
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

  const handleMouseEnter = () => {
    if (closeDropdownTimeout) {
      clearTimeout(closeDropdownTimeout); // Prevent closing when entering the dropdown
    }
    setServicesMenuOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setServicesMenuOpen(false);
    }, 200); // Small delay to prevent flickering
    setCloseDropdownTimeout(timeout);
  };

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
                className="relative ml-9 cursor-pointer"
                onMouseEnter={subMenu ? handleMouseEnter : null}
                onMouseLeave={subMenu ? handleMouseLeave : null}
              >
                {pathName ? (
                  <Link href={pathName}>
                    <p className="text-text_color_primary hover:text-[#5acbf5]">{value}</p>
                  </Link>
                ) : (
                  <div className="flex items-center">
                    <p className="text-text_color_primary hover:text-[#5acbf5]">{value}</p>
                    {subMenu && <FaChevronDown className="ml-2 text-base" />}
                  </div>
                )}
                {subMenu && servicesMenuOpen && (
                  <div
                    className={`absolute top-full left-0 mt-2 bg-white shadow-lg ${Styles.dropdownMenu}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {subMenu.map(({ value, pathName }, subIndex) => (
                      <Link
                        href={pathName}
                        key={subIndex}
                        className="block px-4 py-2 hover:bg-[#5acbf5] hover:text-white hover:border hover:rounded-full transition-all"
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
