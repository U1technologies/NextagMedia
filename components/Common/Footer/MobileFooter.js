import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import locationIcon from "../../../public/assets/Images/home-page/location-icon.svg";
import phoneIcon from "../../../public/assets/Images/home-page/mobile-icon.svg";
import emailIcon from "../../../public/assets/Images/home-page/email-icon.svg";

const MobileFooter = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="bg-base-200 text-base-content text-text_color_primary flex flex-col items-center">
      {/* Quick Links */}
      <div className="w-full text-center mb-3">
        <h6
          className="font-bold text-lg mb-2 cursor-pointer"
          onClick={() => toggleSection("quickLinks")}
        >
          Quick Links
        </h6>
        {openSection === "quickLinks" && (
          <div className="flex flex-col items-center">
            <Link href="/home" className="block my-1 text-base">
              Home
            </Link>
            <Link href="/about-us" className="block my-1 text-base">
              About Us
            </Link>
            <Link href="/contact" className="block my-1 text-base">
              Contact
            </Link>
            <Link href="/privacy-policy" className="block my-1 text-base">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="block my-1 text-base">
              Terms & Conditions
            </Link>
          </div>
        )}
      </div>

      {/* Marketing Services */}
      <div className="w-full text-center mb-3">
        <h6
          className="font-bold text-lg mb-2 cursor-pointer"
          onClick={() => toggleSection("marketingServices")}
        >
          Marketing Services
        </h6>
        {openSection === "marketingServices" && (
          <div className="flex flex-col items-center">
            <Link href="/service/performance-marketing" className="block my-1 text-base">
              Performance Marketing
            </Link>
            <Link href="/service/social-media-management" className="block my-1 text-base">
              Social Media Management
            </Link>
            <Link href="/service/lead-generation" className="block my-1 text-base">
              Lead Generation
            </Link>
          </div>
        )}
      </div>

      {/* Branding Services */}
      <div className="w-full text-center mb-3">
        <h6
          className="font-bold text-lg mb-2 cursor-pointer"
          onClick={() => toggleSection("brandingServices")}
        >
          Branding Services
        </h6>
        {openSection === "brandingServices" && (
          <div className="flex flex-col items-center">
            <Link href="/service/web-development" className="block my-1 text-base">
              Web Development
            </Link>
            <Link href="/service/seo" className="block my-1 text-base">
              SEO
            </Link>
            <Link href="/service/personal-branding" className="block my-1 text-base">
              Personal Branding
            </Link>
            <Link href="/service/ugc-content" className="block my-1 text-base">
              UGC Content
            </Link>
          </div>
        )}
      </div>

      {/* Contact Us */}
      <div className="w-full text-center mb-3">
        <h6
          className="font-bold text-lg mb-2 cursor-pointer"
          onClick={() => toggleSection("contactUs")}
        >
          Contact Us
        </h6>
        {openSection === "contactUs" && (
          <div className="flex flex-col items-center ">
            <div className="flex items-center my-1">
              <div className="">
                <Image
                  src={locationIcon}
                  width={21}
                  height={21}
                  alt="Location Icon"
                />
              </div>
              <p className="ml-3 text-base text-center my-1">
                1st floor, B-20, Sector 1, Noida, India
              </p>
            </div>
            <div className="flex items-center">
              <div className="">
                <Image
                  src={phoneIcon}
                  width={20}
                  height={20}
                  alt="Phone Icon"
                />
              </div>
              <p className="ml-3 text-base text-center my-2">+91 82929 43921</p>
            </div>
            <div className="flex items-center">
              <div className="">
                <Image
                  src={emailIcon}
                  width={18}
                  height={18}
                  alt="Email Icon"
                />
              </div>
              <p className="ml-3 text-base text-center my-1">
                info@nextagmedia.com
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileFooter;
