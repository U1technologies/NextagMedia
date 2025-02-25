import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import CountUp from 'react-countup';

const Achievements = () => {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setIsInView(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-primary py-3">
      <section ref={sectionRef}>
        <div className="flex flex-col items-center max-w-[1500px] m-auto text-text_color_secondary max-md:[90%] max-md:mx-auto">
          <p className="text-2xl font-semibold mt-2">Our Achievements</p>
          <div className="flex flex-wrap justify-center gap-10 max-md:gap-4 mt-10 w-full max-md:w-[85%] text-center">

            {/* Projects Executed */}
            <div className="flex items-center gap-4 max-md:w-[60%]">
              <Image
                src="/assets/Images/home-page/projects.png"
                alt="Projects Executed Icon"
                width={60}
                height={60}
                className="object-contain"
              />
              <div className="text-left">
                <span className="text-5xl font-bold">
                  {isInView && <CountUp end={430} duration={2.5} />}
                </span>
                <p className="text-lg font-medium mt-2">Projects Executed</p>
              </div>
            </div>

            <div className="hidden md:block w-[1px] bg-gray-400 h-20 mx-4" />
            <div className="block md:hidden w-full h-[1px] bg-gray-400 my-4" />

            {/* Team Size */}
            <div className="flex items-center gap-4 max-md:w-[60%]">
              <Image
                src="/assets/Images/home-page/team-icon.png"
                alt="Team Size Icon"
                width={60}
                height={60}
                className="object-contain"
              />
              <div className="text-left">
                <span className="text-5xl font-bold">
                  {isInView && <CountUp end={31} duration={2.5} />}
                </span>
                <p className="text-lg font-medium mt-2">Team Size</p>
              </div>
            </div>

            <div className="hidden md:block w-[1px] bg-gray-400 h-20 mx-4" />
            <div className="block md:hidden w-full h-[1px] bg-gray-400 my-4" />

            {/* Active Clients */}
            <div className="flex items-center gap-4 max-md:w-[60%]">
              <Image
                src="/assets/Images/home-page/Client.png"
                alt="Active Clients Icon"
                width={60}
                height={60}
                className="object-contain"
              />
              <div className="text-left">
                <span className="text-5xl font-bold">
                  {isInView && <CountUp end={150} duration={2.5} />}
                </span>
                <p className="text-lg font-medium mt-2">Active Clients</p>
              </div>
            </div>

            <div className="hidden md:block w-[1px] bg-gray-400 h-20 mx-4" />
            <div className="block md:hidden w-full h-[1px] bg-gray-400 my-4" />

            {/* Ongoing Contracts */}
            <div className="flex items-center gap-4 max-md:w-[60%]">
              <Image
                src="/assets/Images/home-page/contract.png"
                alt="Ongoing Contracts Icon"
                width={60}
                height={60}
                className="object-contain"
              />
              <div className="text-left">
                <span className="text-5xl font-bold">
                  {isInView && <CountUp end={67} duration={2.5} />}
                </span>
                <p className="text-lg font-medium mt-2">Ongoing Contracts</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Achievements;
