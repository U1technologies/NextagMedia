import React from "react";
import Image from 'next/image';
import Link from "next/link";
import linkedinIcon from '@/public/assets/Images/home-page/linkedin-icon.svg'
import instaIcon from '@/public/assets/Images/home-page/instagram-icon.svg'
import facebookIcon from '@/public/assets/Images/home-page/facebook-icon.svg'

const AboutUsSection = () => {
  return (
    <section>
      <div className="relative flex justify-center items-center">
        <div className="flex flex-col md:flex-row w-[100%] h-full items-center">

          {/* Left Section */}
          <div className="flex flex-col justify-center items-start w-full lg:w-[50%] space-y-4 max-md:mb-8">
            <span className="text-highlight font-semibold rounded-full w-fit py-2">WHO WE ARE?</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-left w-[90%]">
              Your Vision, Our Expertise: Tailored Design by a Committed Team
            </h1>
            <p className="text-lg lg:text-xl font-normal text-left text-text_color_secondary w-[90%]">
              At NextagMedia, our focus is on driving your success through exceptional digital design. We collaborate closely with you to bring your ideas to life, align with your vision, and create striking graphic and web designs that make your brand stand out.
            </p>
            <span className="text-text_color_primary bg-highlight rounded-full w-fit px-6 py-3">KNOW MORE</span>
          </div>

          {/* Right Section */}
          <div className="flex justify-center items-center w-full lg:w-[50%]">
            <Image
              src="/assets/images/home-page/team-nextag.jpeg"
              alt="Hero Image"
              height={50}
              width={50}
              className="w-[100%] max-w-[600px] h-auto object-cover rounded-lg "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
