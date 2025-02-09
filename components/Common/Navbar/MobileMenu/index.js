import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import burgerMenu from '@/public/assets/Images/home-page/burgerMenu.svg';
import crossIcon from '@/public/assets/Images/home-page/close.svg';
import Styles from './index.module.css';
import Button from '@/components/ContactUsButton';

const NAVBAR_CONTENT = [
  { value: 'Home', pathName: '/' },
  { value: 'About', pathName: '/about' },
  { 
    value: 'Services', 
    hasArrow: true,
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

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleRedirect = (pathName) => {
    router.push(pathName);
    setIsMenuOpen(false);
  };

  const handleContactClick = () => {
    router.push('/contact');
    setIsMenuOpen(false);
  };

  return (
    <div className={Styles.burgerDiv}>
      {/* Toggle Burger Menu / Close Icon */}
      <button onClick={toggleMenu} className="flex">
        <Image
          src={isMenuOpen ? crossIcon : burgerMenu}
          width={25}
          height={25}
          alt="Menu Icon"
        />
      </button>
      {isMenuOpen && (
        <div className={`${Styles.menu} ${Styles.menuOpen}`}>
          {/* Menu Items */}
          <div className={Styles.menuItems}>
            {NAVBAR_CONTENT.map(({ value, pathName, hasArrow, subMenu }, index) => (
              <div key={index} className={Styles.menuItem}>
                {/* Main Item */}
                <div className={Styles.mainItem} onClick={() => subMenu ? setServicesOpen(!servicesOpen) : handleRedirect(pathName)}>
                  <p>{value}</p>
                  {hasArrow && <span className={`${Styles.arrow} ${servicesOpen ? Styles.rotateArrow : ''}`}>›</span>}
                </div>
                {subMenu && servicesOpen && (
                  <div className={Styles.subMenu}>
                    {subMenu.map(({ value, pathName }, subIndex) => (
                      <p key={subIndex} onClick={() => handleRedirect(pathName)} className={Styles.subMenuItem}>
                        {value}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className={Styles.ctaButtons}>
            <Button onClick={handleContactClick} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
