import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutCompany = () => {
  return (
    <div className="bg-secondary py-4">
      <section>
        <div className="relative flex flex-col md:flex-row md:gap-12 justify-center items-center">
          {/* Image Section */}
          <div className="flex justify-center items-center w-full lg:w-[50%] order-first md:order-none">
                      {/* <div className="flex justify-center items-center w-full lg:w-[50%]"> */}
  <video
    src="/assets/Images/home-page/Change1.mp4" // make sure the path is correct
    className="rounded-lg"
    height={800}
    width={800}
    controls // optional: adds play/pause UI
    autoPlay // optional: auto-plays the video
    loop // optional: loops the video
    muted // optional: mutes the video on autoplay
    playsInline // for iOS devices
  />
</div>
          {/* </div> */}

          {/* Content Section */}
          <div className="flex flex-col justify-center items-start w-full lg:w-[50%] text-center md:text-left space-y-3">
          <h1 className="text-4xl lg:text-5xl font-bold">
  Unleashing potential, delivering{" "}
  <span className="text-gradient">excellence</span>.
</h1>
            <p className="text-lg lg:text-xl font-normal text-text_color_secondary max-md:mx-auto">
            Meet the team responsible for today&apos;s quickest growing business.
            </p>
            <div className="flex justify-center md:justify-start pb-4 max-md:mx-auto">
              <Link href="/about">
                <button className="text-primary bg-color_purple rounded-full w-fit px-6 py-2">
                  More About Us
                </button>
              </Link>
            </div>

            {/* Horizontal Line */}
            <hr className="w-full border-t border-gray-300 my-6" />

            {/* Owner Section */}
            <div className="flex flex-row items-center space-y-0 space-x-4 pt-4 max-md:mx-auto">
              {/* Owner Image */}
              <Image
                src="/assets/Images/home-page/anupam.jpeg"
                alt="Owner Image"
                width={80}
                height={80}
                className="object-cover"
              />
              {/* Owner Info */}
              <div>
                <h4>Anupam Gupta</h4>
                <span className="text-text_color_secondary">CEO & Founder</span><br />
                <span className="text-text_color_secondary">Nextagmedia</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutCompany;
