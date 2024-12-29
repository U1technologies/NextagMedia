import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="w-[90%] mx-auto">
            <div className="relative flex flex-col md:flex-row justify-center items-center">
                <div className="flex flex-col justify-center items-start w-full lg:w-[50%] space-y-4">
                    <p className="bg-secondary border border-gray-150 px-[12px] py-[6px] text-text_color_primary rounded-lg">
                        NextagMedia - Digital Marketing Agency
                    </p>
                    <h1 className="text-4xl lg:text-5xl font-bold text-left">
                        Empowering Your Business with Advanced Marketing and IT Solutions.
                    </h1>
                    <p className="text-lg lg:text-xl font-normal text-left text-text_color_secondary">
                        Transform your vision into success with innovative marketing strategies and cutting-edge IT solutions tailored to elevate your business.
                    </p>
                    <div className="flex justify-start">
                        <Link href="/contact">
                        <button className="bg-highlight py-2 px-6 rounded-md border-2 border-transparent hover:border-highlight hover:bg-primary hover:text-highlight mr-6">
                        Contact Us
                            </button>
                            <Link href="/service/performance-marketing">
                            <button className="primary-button-outline py-3 px-6 hover:bg-highlight hover:text-text_color_primary">
                                Explore Services
                            </button>
                        </Link>
                        </Link>
                    </div>
 
     <div class="pt-8 flex items-center gap-8">
            <div class="flex -space-x-2">
              <div class="w-14 h-14 rounded-full bg-primary border-2 border-highlight flex items-center justify-center">
                <span class="text-sm font-semibold">4.9★</span>
              </div>
              <div class="w-14 h-14 rounded-full bg-primary border-2 border-highlight flex items-center justify-center">
                <span class="text-sm font-semibold">500+</span>
              </div>
            </div>
            <div>
              <p class="font-semibold text-base text-text_color_primary">Trusted by 500+ Businesses</p>
              <p className="text-base text-text_color_secondary">4.9/5 Average Rating</p>
            </div>
          </div>
                </div>

                <div className="flex justify-center items-center w-full lg:w-[50%] order-last md:order-none mt-6 md:mt-0">
                    <Image 
                        src="/assets/Images/home-page/xyz.svg" 
                        alt="Hero Image"
                        width={50}
                        height={50}
                        className="w-[100%] max-w-[510px] h-auto object-cover"
                    />
                </div>
            </div>
         </section>
    );
};

export default Hero;
