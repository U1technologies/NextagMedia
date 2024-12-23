import React from "react";
import Image from 'next/image';

const ValuesSection = () => {
  return (
    <div className="bg-secondary">
    <section className="">
      <div className="mx-auto py-4">
      <p className="text-2xl font-semibold mt-2 text-center">Empowering Your Success</p>
        <h2 className="text-3xl font-semibold text-center text-text_color_secondary mb-12">Our Mission, Vision and Goal</h2>
        <div className="flex flex-col md:flex-row justify-center gap-12 md:max-lg:gap-6">
          {/* Mission Card */}
          <div className="w-full max-md:w-[85%] lg:w-[320px] 2xl:w-[360px] bg-primary p-8 rounded-2xl shadow-md text-center max-md:mx-auto">
            <Image src="/assets/images/home-page/mission.png" width={100} height={100} alt="Mission Icon" className="mx-auto mb-4" />
            <h4 className=" font-bold mb-2">Our Mission</h4>
            <p className="text-lg lg:text-xl text-text_color_secondary">To empower businesses with innovative digital solutions that drive growth, maximize efficiency, and foster long-term success.</p>
          </div>

          {/* Vision Card */}
          <div className="w-full max-md:w-[85%] lg:w-[320px] 2xl:w-[360px] bg-primary p-8 rounded-2xl shadow-md text-center mx-auto">
            <Image src="/assets/images/home-page/vision.png" width={100} height={100} alt="Vision Icon" className="mx-auto mb-4" />
            <h4 className="font-bold mb-2">Our Vision</h4>
            <p className="text-lg lg:text-xl text-text_color_secondary">To be the leading digital partner for businesses, delivering results that exceed expectations and transform industries.</p>
          </div>

          {/* Goal Card */}
          <div className="w-full max-md:w-[85%] lg:w-[320px] 2xl:w-[360px] bg-primary p-8 rounded-2xl shadow-md text-center mx-auto">
            <Image src="/assets/images/home-page/goal.png" width={100} height={100} alt="Goal Icon" className="mx-auto mb-4" />
            <h4 className="font-bold mb-2">Our Goal</h4>
            <p className="text-lg lg:text-xl text-text_color_secondary">To continuously innovate and expand our solutions, creating value for our clients, employees, and communities around the world.</p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default ValuesSection;
