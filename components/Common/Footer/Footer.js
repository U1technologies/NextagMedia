import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import linkedinIcon from '../../../public/assets/Images/home-page/linkedin.svg';
import instaIcon from '../../../public/assets/Images/home-page/instagram.svg';
import facebookIcon from '../../../public/assets/Images/home-page/facebook.svg';
import locationIcon from '../../../public/assets/Images/home-page/location-icon.svg';
import phoneIcon from '../../../public/assets/Images/home-page/mobile-icon.svg';
import emailIcon from '../../../public/assets/Images/home-page/email-icon.svg';
import Styles from './Footer.module.css';
import MainLogo from '../MainLogo';
import MobileFooter from './MobileFooter';

const Footer = () => {
  return (
    <>
      <footer className={`bg-base-200 text-base-content relative ${Styles.footer}`}>
        <div className='m-auto pb-4 pt-6 w-[85%]'>
          <div className='flex justify-between items-center pb-8 max-sm:flex max-sm:flex-col'>
            <div className="flex items-center">
              <MainLogo width={220} height={15} /> 
            </div>
            <div className="flex items-center gap-4 ml-auto max-sm:mx-auto max-sm:mt-8">
              {/* Social Icons */}
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <Image src={facebookIcon} width={45} height={45} alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/nextagmedia/" target="_blank" rel="noreferrer">
                <Image src={instaIcon} width={45} height={45} alt="Instagram" />
              </a>
              <a href="https://www.linkedin.com/company/nextagmedia/?originalSubdomain=in" target="_blank" rel="noreferrer">
                <Image src={linkedinIcon} width={50} height={50} alt="LinkedIn" />
              </a>
            </div>
          </div>

          {/* Footer Main Sections */}
          <div className='md:flex justify-between max-md:hidden'>
            {/* Quick Links */}
            <div className='w-[20%] text-base'>
              <h6 className={`cursor-default block ${Styles.spanHeading}`}>
                <p className='font-bold'>Quick Links</p>
              </h6>
              <Link className="cursor-pointer block my-3 w-[80%] text-lg" href="/home">Home</Link>
              <Link className="cursor-pointer block my-3 w-[80%] text-lg" href="/about-us">About Us</Link>
              <Link className="cursor-pointer block my-3 w-[80%] text-lg" href="/contact">Contact</Link>
              <Link className="cursor-pointer block my-3 w-[80%] text-lg" href="/privacy-policy">Privacy Policy</Link>
              <Link className="cursor-pointer block my-3 w-[80%] text-lg" href="/terms-and-conditions">Terms & Conditions</Link>
            </div>

            {/* Services */}
            <div className='w-[25%] text-base'>
              <h6 className={`cursor-default block ${Styles.spanHeading}`}>
                <p className='font-bold'>Marketing Services</p>
              </h6>
              <Link className="cursor-pointer block my-3 w-[80%] text-lg" href="/service/performance-marketing">Performance Marketing</Link>
              <Link className="cursor-pointer block my-3 w-[80%] text-lg" href="/service/social-media-management">Social Media Management</Link>
              <Link className="cursor-pointer block my-3 w-[80%] text-lg" href="/service/lead-generation">Lead Generation</Link>
            </div>

            {/* Other Services */}
            <div className='w-[25%] text-base'>
              <h6 className={`cursor-default block ${Styles.spanHeading}`}>
                <p className='font-bold'>Branding Services</p>
              </h6>
              <Link className="cursor-pointer block my-3 w-[80%] text-lg" href="/service/web-development">Web Development</Link>
              <Link className="cursor-pointer block my-3 w-[80%] text-lg" href="/service/seo">SEO</Link>
              <Link className="cursor-pointer block my-3 w-[80%] text-lg" href="/service/personal-branding">Personal Branding</Link>
              <Link className="cursor-pointer block my-3 w-[80%] text-lg" href="/service/ugc-content">UGC Content</Link>
            </div>

            {/* Contact Us */}
            <div className="w-[25%] text-base">
              <p className={`block font-bold ${Styles.spanHeading}`}>Contact Us</p>
              <div className="my-3 flex items-center">
                <div className="bg-highlight p-2 rounded-full">
                  <Image src={locationIcon} width={20} height={20} alt='Location Icon' />
                </div>
                <p className="ml-3 text-lg">1st floor, B-20, Sector 1, Noida, India</p>
              </div>
              <div className="my-3 flex items-center">
                <div className="bg-highlight p-2 rounded-full">
                  <Image src={phoneIcon} width={20} height={20} alt='Phone Icon' />
                </div>
                <p className="ml-3 text-lg">+91 82929 43921</p>
              </div>
              <div className="my-3 flex items-center">
                <div className="bg-highlight p-2 rounded-full">
                  <Image src={emailIcon} width={20} height={20} alt='Email Icon' />
                </div>
                <p className="ml-3 text-lg">info@nextagmedia.com</p>
              </div>
            </div>
          </div>

          {/* Mobile Footer Section */}
          <div className='md:hidden'>
            <MobileFooter />
          </div>

          {/* Footer Border Line */}
          <div className="w-full border-t border-[#D9DBE9] mt-6"></div>

          {/* Footer Copyright */}
          <div className='pt-2 flex justify-between'>
            <div className='md:flex w-fit m-auto'>
              &copy; <span className='mx-1'>{new Date().getFullYear()}</span> Nextagmedia by U1 Technologies . All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;
