import React from 'react';
import Image from 'next/image';

const Features = ({ features, sectionHeading, sectionSubtitle }) => {
  return (
    <div className="bg-secondary">
      <section className="py-12 w-[70%] mx-auto">
        <div className="text-center mb-12">
          <p className="text-3xl font-bold text-text_color_primary">{sectionHeading}</p>
          <p className="text-text_color_secondary mt-4 text-lg lg:text-xl">
            {sectionSubtitle}
          </p>
        </div>
        <div className={`grid gap-8 ${features.length % 2 === 0 ? 'grid-cols-2' : 'grid-cols-3'}`}>
          {features.map((feature, index) => {
            // For odd-numbered features, make the last card span two columns
            const isLastFeature = index === features.length - 1 && features.length % 2 !== 0;
            return (
              <div
                key={index}
                className={`flex flex-col items-center text-center p-4 bg-primary border border-[#ebedfe] rounded-lg shadow-md ${
                  isLastFeature ? 'col-span-2' : ''
                }`}
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  height={80}
                  width={80}
                  className="mb-4 object-contain"
                />
                <p className="font-semibold text-xl text-text_color_primary">{feature.title}</p>
                <p className="text-text_color_secondary text-lg lg:text-xl mt-2">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Features;
