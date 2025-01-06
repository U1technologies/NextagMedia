import React from "react";
import Image from "next/image";

const ServiceProcess = ({ processImage, mobileProcessImage }) => {
  return (
    <div>
      <section>
        <div className="text-center mb-4">
          <h2 className="text-3xl font-bold text-gray-800">How It Works</h2>
          <p className="text-gray-600 mt-4">Follow these simple steps to get started.</p>
        </div>

        <div className="flex justify-center items-center">
          {/* Full-width image for large screens */}
          <Image
            src={processImage}
            alt="Service process illustration"
            width={1920}
            height={1080}
            className="object-cover w-[90%] h-auto max-md:hidden"
          />

          {/* Mobile image for screens below max-md */}
          <Image
            src={mobileProcessImage}
            alt="Mobile service process illustration"
            width={1920}
            height={1080}
            className="object-cover w-[90%] h-auto md:hidden"
          />
        </div>
      </section>
    </div>
  );
};

export default ServiceProcess;
