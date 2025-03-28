import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import leftArrow from "../../../public/assets/Images/home-page/arrow-up.svg";
import locationIcon from "../../../public/assets/Images/home-page/location-icon.svg";
import phoneIcon from "../../../public/assets/Images/home-page/mobile-icon.svg";
import emailIcon from "../../../public/assets/Images/home-page/email-icon.svg";
import Styles from "./Footer.module.css";

const MobileFooter = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="text-text_color_primary flex flex-col items-start w-full mt-6">
      {/* Quick Links */}
      <div className="w-full mb-3">
        <div className="flex items-center justify-between w-full">
          <p className="font-bold text-lg">Quick Links</p>
          <button onClick={() => toggleSection("quickLinks")} className={Styles.RightSlideButton}>
            <Image src={leftArrow} width={20} height={18} className={`m-auto p-1 ${openSection === "quickLinks" ? "" : "rotate-180"}`} alt="Arrow Icon" />
          </button>
        </div>
        {openSection === "quickLinks" && (
          <div className="flex flex-col mt-2">
            <Link href="/home" className="block my-1 text-base text-text_color_secondary">Home</Link>
            <Link href="/about-us" className="block my-1 text-base text-text_color_secondary">About Us</Link>
            <Link href="/contact" className="block my-1 text-base text-text_color_secondary">Contact</Link>
          </div>
        )}
      </div>

      {/* Services */}
      <div className="w-full mb-3">
        <div className="flex items-center justify-between w-full">
          <p className="font-bold text-lg">Services</p>
          <button onClick={() => toggleSection("services")} className={Styles.RightSlideButton}>
            <Image src={leftArrow} width={20} height={18} className={`m-auto p-1 ${openSection === "services" ? "" : "rotate-180"}`} alt="Arrow Icon" />
          </button>
        </div>
        {openSection === "services" && (
          <div className="flex flex-col mt-2">
            <Link href="/service/performance-marketing" className="block my-1 text-base text-text_color_secondary">Performance Marketing</Link>
            <Link href="/service/social-media-management" className="block my-1 text-base text-text_color_secondary">Social Media Management</Link>
            <Link href="/service/lead-generation" className="block my-1 text-base text-text_color_secondary">Lead Generation</Link>
            <Link href="/service/web-development" className="block my-1 text-base text-text_color_secondary">Web Development</Link>
            <Link href="/service/seo" className="block my-1 text-base text-text_color_secondary">SEO</Link>
            <Link href="/service/personal-branding" className="block my-1 text-base text-text_color_secondary">Personal Branding</Link>
            <Link href="/service/ugc-content" className="block my-1 text-base text-text_color_secondary">UGC Content</Link>
          </div>
        )}
      </div>

      {/* Contact Us */}
      <div className="w-full mb-3">
        <div className="flex items-center justify-between w-full">
          <p className="font-bold text-lg">Contact Us</p>
          <button onClick={() => toggleSection("contactUs")} className={Styles.RightSlideButton}>
            <Image src={leftArrow} width={20} height={18} className={`m-auto p-1 ${openSection === "contactUs" ? "" : "rotate-180"}`} alt="Arrow Icon" />
          </button>
        </div>
        {openSection === "contactUs" && (
          <div className="flex flex-col mt-2">
            <div className="flex items-center my-1">
              <Image src={locationIcon} width={21} height={21} alt="Location Icon" />
              <p className="ml-3 text-base text-text_color_secondary">1st floor, B-20, Sector 1, Noida, India</p>
            </div>
            <div className="flex items-center my-1">
              <Image src={phoneIcon} width={20} height={20} alt="Phone Icon" />
              <p className="ml-3 text-base text-text_color_secondary">+91 82929 43921, +91 82279 92672</p>
            </div>
            <div className="flex items-center my-1">
              <Image src={emailIcon} width={18} height={18} alt="Email Icon" />
              <p className="ml-3 text-base text-text_color_secondary">info@nextagmedia.com</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileFooter;
