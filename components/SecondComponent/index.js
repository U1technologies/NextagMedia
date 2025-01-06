import React from 'react';
import Image from 'next/image';

const Features = ({ features, sectionHeading, sectionSubtitle }) => {
  return (
    <div className="bg-secondary">
      <section className="py-12 w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] mx-auto">
        <div className="text-center mb-12">
          <p className="text-2xl sm:text-3xl font-bold text-text_color_primary">{sectionHeading}</p>
          <p className="text-text_color_secondary mt-4 text-base sm:text-lg lg:text-xl">
            {sectionSubtitle}
          </p>
        </div>
        <div
          className={`grid gap-6 sm:gap-8 ${
            features.length % 2 === 0 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {features.map((feature, index) => {
            // For odd-numbered features, make the last card span two columns only on large screens
            const isLastFeature = index === features.length - 1 && features.length % 2 !== 0;
            return (
              <div
                key={index}
                className={`flex flex-col items-center text-center p-4 sm:p-6 bg-primary border border-[#ebedfe] rounded-lg shadow-md ${
                  isLastFeature ? 'lg:col-span-2' : ''
                }`}
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  height={80}
                  width={80}
                  className="mb-4 object-contain"
                />
                <p className="font-semibold text-lg sm:text-xl text-text_color_primary">
                  {feature.title}
                </p>
                <p className="text-text_color_secondary text-sm sm:text-lg lg:text-xl mt-2">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Features;
