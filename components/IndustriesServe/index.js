import Image from "next/image";
import React from "react";

const industries = [
  { title: "E-commerce", icon: "/assets/Images/home-page/ecommerce.svg" },
  { title: "Retail", icon: "/assets/Images/home-page/retail.svg" },
  { title: "Healthcare", icon: "/assets/Images/home-page/health.svg" },
  { title: "Finance", icon: "/assets/Images/home-page/finance.svg" },
  { title: "Technology", icon: "/assets/Images/home-page/web.svg" },
  { title: "Food", icon: "/assets/Images/home-page/food.svg" },
  { title: "Travel", icon: "/assets/Images/home-page/travel.svg" },
  { title: "Real Estate", icon: "/assets/Images/home-page/real-estate.svg" },
  { title: "Education", icon: "/assets/Images/home-page/education.svg" },
  { title: "Fashion", icon: "/assets/Images/home-page/fashion.svg" },
  { title: "Entertainment", icon: "/assets/Images/home-page/entertainment.svg" },
  { title: "Electronics", icon: "/assets/Images/home-page/electronics.svg" },
];

const IndustriesWeServe = () => {
  return (
    <div className="bg-primary">
    <section className="py-12 w-[85%]">
      <div className="flex flex-col xl:flex-row items-center justify-between mx-auto">
        {/* Left Subsection */}
        <div className="w-full xl:w-[480px] 2xl:w-[600px]">
          <h2 className="text-3xl font-bold text-text_color_primary mb-4 max-xl:text-center">
            Industries We Serve
          </h2>
          <p className="text-lg lg:text-xl text-text_color_secondary leading-relaxed max-xl:mb-12">
            Our expertise spans various industries, offering tailored digital
            marketing and web solutions to drive growth and success. From
            retail to healthcare, we enable businesses to achieve their
            objectives with cutting-edge technology and strategies.
          </p>
        </div>

        {/* Right Subsection */}
        <div
          className="flex gap-3 sm:max-md:gap-2 max-sm:hidden"
          style={{
            alignItems: "flex-start", // Align all columns to the top initially
          }}
        >
          {/* First Column: 2 Items */}
          <div className="flex flex-col gap-3 self-center">
            {industries.slice(0, 2).map((industry, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-primary border border-[#ebedfe] shadow-md rounded-lg hover:shadow-xl transition duration-300 w-[120px] h-[120px]"
              >
                <div className="w-16 h-16 bg-blue-100 flex items-center justify-center rounded-full mb-4">
                  <Image
                    src={industry.icon}
                    alt={industry.title}
                    width={10}
                    height={10}
                    className="w-10 h-10"
                  />
                </div>
                <h4 className="text-sm font-medium text-text_color_secondary">
                  {industry.title}
                </h4>
              </div>
            ))}
          </div>

          {/* Second Column: 3 Items */}
          <div className="flex flex-col gap-3">
            {industries.slice(2, 5).map((industry, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-primary border border-[#ebedfe] shadow-md rounded-lg hover:shadow-xl transition duration-300 w-[120px] h-[120px]"
              >
                <div className="w-16 h-16 bg-blue-100 flex items-center justify-center rounded-full mb-4">
                  <Image
                    src={industry.icon}
                    alt={industry.title}
                    height={10}
                    width={10}
                    className="w-10 h-10"
                  />
                </div>
                <h4 className="text-sm font-medium text-text_color_secondary">
                  {industry.title}
                </h4>
              </div>
            ))}
          </div>

          {/* Third Column: 2 Items */}
          <div className="flex flex-col gap-3 self-center">
            {industries.slice(5, 7).map((industry, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-primary border border-[#ebedfe] shadow-md rounded-lg hover:shadow-xl transition duration-300 w-[120px] h-[120px]"
              >
                <div className="w-16 h-16 bg-blue-100 flex items-center justify-center rounded-full mb-4">
                  <Image
                    src={industry.icon}
                    alt={industry.title}
                    height={10}
                    width={10}
                    className="w-10 h-10"
                  />
                </div>
                <h4 className="text-sm font-medium text-text_color_secondary">
                  {industry.title}
                </h4>
              </div>
            ))}
          </div>

          {/* Fourth Column: 3 Items */}
          <div className="flex flex-col gap-3">
            {industries.slice(7, 10).map((industry, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-primary border border-[#ebedfe] shadow-md rounded-lg hover:shadow-xl transition duration-300 w-[120px] h-[120px]"
              >
                <div className="w-16 h-16 bg-blue-100 flex items-center justify-center rounded-full mb-4">
                  <Image
                    src={industry.icon}
                    alt={industry.title}
                    height={10}
                    width={10}
                    className="w-10 h-10"
                  />
                </div>
                <h4 className="text-sm font-medium text-text_color_secondary">
                  {industry.title}
                </h4>
              </div>
            ))}
          </div>

          {/* Fifth Column: Remaining Items */}
          <div className="flex flex-col gap-3 self-center">
            {industries.slice(10, 12).map((industry, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-primary border border-[#ebedfe] shadow-md rounded-lg hover:shadow-xl transition duration-300 w-[120px] h-[120px]"
              >
                <div className="w-16 h-16 bg-blue-100 flex items-center justify-center rounded-full mb-4">
                  <Image
                    src={industry.icon}
                    alt={industry.title}
                    height={10}
                    width={10}
                    className="w-10 h-10"
                  />
                </div>
                <h4 className="text-sm font-medium text-text_color_secondary">
                  {industry.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden max-sm:flex flex-wrap gap-3 justify-center">
  {industries.map((industry, index) => (
    <div
      key={index}
      className="flex flex-col items-center p-4 bg-primary border border-[#ebedfe] shadow-md rounded-lg hover:shadow-xl transition duration-300 w-[140px] h-[140px]"
    >
      <div className="w-16 h-16 bg-blue-100 flex items-center justify-center rounded-full mb-4">
        <Image
          src={industry.icon}
          alt={industry.title}
          height={10}
          width={10}
          className="w-10 h-10"
        />
      </div>
      <h4 className="text-sm font-medium text-text_color_secondary">
        {industry.title}
      </h4>
    </div>
  ))}
</div>


      </div>
    </section>
    </div>
  );
};

export default IndustriesWeServe;
