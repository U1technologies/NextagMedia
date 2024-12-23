import { useState } from 'react';
import Image from 'next/image';
import horizontalLine from '@/public/assets/Images/home-page/line.svg'
import activeDot from '@/public/assets/Images/home-page/clicked.svg'
import defaultDot from '@/public/assets/Images/home-page/unclicked.svg'

const milestonesData = {
  2019: {
    title: 'Foundation Laid',
    description:
      'Expanded our services to multiple regions, achieving significant milestones in product growth.',
  },
  2020: {
    title: 'Growth Spurt',
    description:
      'Witnessed a 200% growth in client acquisition and launched innovative solutions.',
  },
  2021: {
    title: 'Digital Transformation',
    description:
      'Revamped internal operations and launched a fully automated platform.',
  },
  2022: {
    title: 'Global Reach',
    description:
      'Reached clients worldwide, making our services accessible globally.',
  },
  2023: {
    title: 'Innovation Hub',
    description:
      'Established a dedicated innovation team to focus on cutting-edge technologies.',
  },
  2024: {
    title: 'Future Focus',
    description:
      'Launched initiatives focused on sustainability and emerging markets.',
  },
};

export default function TimelineSection() {
  const [activeYear, setActiveYear] = useState(2023); // Default active year

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-2xl font-semibold mt-2 text-center">
            Milestones
          </span>
          <h2 className="text-3xl font-semibold text-center text-text_color_secondary mb-24 max-md:mb-16">
            How it all started
          </h2>
        </div>

        {/* Timeline Image */}
        <div className="relative w-full flex justify-center items-center mb-12">
          {/* Horizontal line */}
          <Image
            src={horizontalLine}
            alt="Timeline line"
            width={1200} // Adjust as per your design
            height={10} // Adjust as per your design
            className="absolute mt-[13px]"
          />

          {/* Dots */}
          {Object.keys(milestonesData).map((year, index) => (
  <div
    key={year}
    className="absolute text-center"
    style={{
      top: '50%', // Center vertically
      left: `${10 + index * 15}%`, // Adjust based on your design
      transform: 'translate(-50%, -50%)',
    }}
  >
    {/* Year Label */}
    <span className="block font-semibold text-text_color_secondary">
      {year}
    </span>

    {/* Dot Button */}
    <button
      onClick={() => setActiveYear(Number(year))}
      className="focus:outline-none"
      aria-label={`Milestone ${year}`}
    >
      <Image
        src={
          activeYear === Number(year)
            ? activeDot
            : defaultDot 
        }
        alt={`Dot for year ${year}`}
        width={24} 
        height={24}
      />
    </button>
  </div>
     ))}
       </div>
       {/* Selected Year Info */}
        <div className="flex flex-col items-center justify-center gap-4 w-[400px] max-sm:w-[300px] p-8 bg-secondary mx-auto shadow-md">
          <h3 className="text-2xl font-bold text-gray-900">
            {milestonesData[activeYear].title}
          </h3>
          <p className="text-gray-600 text-center max-w-xl">
            {milestonesData[activeYear].description}
          </p>
        </div>
      </div>
    </section>
  );
}
