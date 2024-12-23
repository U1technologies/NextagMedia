import React from "react";
import Image from "next/image";
// Import your quotation mark SVGs
import upIcon from "@/public/assets/Images/home-page/up.svg";
import downIcon from "@/public/assets/Images/home-page/down.svg";

// Import social media icons (you can replace these with your actual social media icons)
import linkedinIcon from "@/public/assets/Images/home-page/linkedin.svg";
// import twitterIcon from "@/public/assets/Images/homepage/twitter.svg";
import skypeIcon from "@/public/assets/Images/home-page/skype.svg";
import twitterIcon from "@/public/assets/Images/home-page/twitter.svg"

const AboutCEO = () => {
  return (
    <div className="bg-secondary py-16">
  <section className="bg-primary shadow-md rounded-md">
    <div className="relative flex justify-center items-center">
      <div className="flex flex-col lg:flex-row lg:w-full w-full h-full items-center lg:space-x-8 px-4 lg:px-8 xl:px-2">
        {/* Left Section: CEO Image */}
        <div className="w-full lg:w-[40%] flex items-center justify-center">
          <Image
            src="/assets/images/home-page/anup.jpeg"
            alt="CEO Image"
            height={50}
            width={50}
            className="w-[480px] lg:w-[380px] h-auto object-cover rounded-lg"
          />
        </div>

        {/* Right Section: CEO's Saying, Name, and Title */}
        <div className="w-[90%] lg:w-[60%] flex flex-col items-start mt-12 lg:mt-0">
          <div className="inline-flex items-start space-x-2">
            {/* Opening Quotation Mark */}
            <Image
              src={upIcon}
              alt="Opening Quote"
              width={40}
              height={40}
              className="self-start mr-4"
            />
            <p className="text-lg lg:text-xl font-normal text-text_color_secondary leading-relaxed">
              As the CEO of NextagMedia, my mission is to inspire innovation, foster creativity, and drive the company toward excellence. We are committed to turning ideas into impactful solutions, building brands that stand out with passion and purpose. Together, we create a future where possibilities are endless.
              <Image
                src={downIcon}
                alt="Closing Quote"
                width={40}
                height={40}
                className="ml-2"
              />
            </p>
          </div>

          {/* CEO Name and Designation */}
          <div className="mt-10">
            <h4 className="font-semibold">Anupam Gupta</h4>
            <p className="text-text_color_secondary text-lg lg:text-xl">
              CEO and Founder, NextagMedia
            </p>
          </div>

          {/* Social Links */}
          <div className="mt-4 flex space-x-2">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={linkedinIcon}
                alt="LinkedIn"
                width={30}
                height={30}
                className="cursor-pointer"
              />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={twitterIcon}
                alt="Twitter"
                width={30}
                height={30}
                className="cursor-pointer"
              />
            </a>
            <a
              href="https://www.skype.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={skypeIcon}
                alt="Skype"
                width={30}
                height={30}
                className="cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

  );
};

export default AboutCEO;
