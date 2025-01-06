import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Styles from './index.module.css'

const OurServices = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="bg-secondary pb-12">
      <section className="mx-auto flex max-w-7xl flex-col items-center px-4 md:flex-row">
        <div className="w-full text-left md:hidden mb-10">
          <span className="w-fit rounded-full bg-highlight px-6 py-3 text-text_color_primary"
             style={{
              backgroundImage: 'linear-gradient(135deg, #FFCA28 5%, #FFB300 60%, #FFA000 100%)',
              cursor: 'pointer',
            }}>
            SERVICES
          </span>
          <h2 className="mt-6 text-4xl font-bold">
            Your Dedicated Partner in Achieving Exceptional Digital Growth
          </h2>
        </div>
        {/* Left Section: Image */}
        <div className="mb-8 flex w-full justify-center md:mb-0 md:w-1/2 md:justify-start">
          <Image
            src="/assets/Images/home-page/main-service.svg"
            width={400}
            height={400}
            alt="Service"
            className="w-full max-w-md rounded-lg"
          />
        </div>
        {/* Right Section: Content */}
        <div className="w-full md:w-1/2 md:pl-8 text-left">
          <span className="w-fit rounded-full bg-highlight px-6 py-3 text-text_color_primary max-md:hidden"
          style={{
            backgroundImage: 'linear-gradient(135deg, #FFCA28 5%, #FFB300 60%, #FFA000 100%)',
            cursor: 'pointer',
          }}>
            SERVICES
          </span>
          <h2 className="mt-6 text-4xl font-bold max-md:hidden">
            Your Dedicated Partner in Achieving Exceptional Digital Growth
          </h2>
          <div className="mt-6 flex flex-col space-y-3">
            {[
              'Higher Conversion Rates',
              'Local Market Dominance',
              'Increase Website Traffic',
              '24/7 Promotion',
            ].map((text, idx) => (
              <div className="flex items-center space-x-2" key={idx}>
                <Image
                  src="/assets/Images/home-page/tickk-2.svg"
                  alt="Tick Icon"
                  width={20}
                  height={20}
                />
                <span className="text-lg text-text_color_secondary">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Cards Section */}
      <div className="mx-auto max-w-[85%] 2xl:w-[80%] pt-8 max-md:pt-0 relative">
        {/* <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
          onClick={() => scroll('left')}
        >
          <Image
            src="/assets/Images/home-page/arrow-1.svg"
            alt="Left Arrow"
            width={50}
            height={50}
          />
        </button> */}
        <div
          ref={scrollRef}
          className={`flex space-x-8 overflow-x-scroll  ${Styles.customScroll}`}
        >
          {[
            {
              title: 'Performance Marketing',
              description:
                'Reach your ideal audience with Nextagmedia’s customized paid marketing strategies. We ensure your ads connect with the right people at the right time, turning clicks into actionable leads and delivering a measurable return on investment.',
              imgSrc: '/assets/Images/home-page/paid-marketing.svg',
              link: '/service/performance-marketing',
            },
            {
              title: 'Social Media Management',
              description:
                "Boost your brand's visibility with impactful social media strategies. Nextagmedia helps you create engaging content, spark meaningful interactions, and strengthen your online presence across key platforms.",
              imgSrc: '/assets/Images/home-page/social-media.svg',
              link: '/service/social-media-management',
            },
            {
              title: 'Web Development',
              description:
                'Create a robust online presence with our expert web development services. We deliver user-friendly, responsive websites that reflect your brand, enhance visibility, and support sustainable growth.',
              imgSrc: '/assets/Images/home-page/website-dev.svg',
              link: '/service/web-development',
            },
            {
              title: 'SEO',
              description:
                'Improve your website’s visibility with Nextagmedia’s SEO solutions. Our optimized strategies help increase search rankings, drive quality traffic, and establish credibility in competitive markets.',
              imgSrc: '/assets/Images/home-page/SEO-hp.svg',
              link: '/service/seo',
            },
            {
              title: 'Lead Generation',
              description:
                'Drive targeted leads with our efficient lead generation strategies. We help you attract potential customers, build meaningful connections, and boost conversions to grow your business effectively.',
              imgSrc: '/assets/Images/home-page/leads-gen.svg',
              link: '/service/lead-generation',
            },
            {
              title: 'Personal Branding',
              description:
                'Build a strong, authentic personal brand that sets you apart in the digital landscape. Nextagmedia helps you showcase your expertise, amplify your voice, and create a compelling online presence to inspire trust and attract opportunities.',
              imgSrc: '/assets/Images/home-page/personal-branding.svg',
              link: '/service/personal-branding',
            },
          ].map(({ title, description, imgSrc, link }, idx) => (
            <div
              key={idx}
              className="flex min-w-[380px] h-[420px] mb-1 flex-col items-center rounded-tl-[52px] rounded-br-[52px] border border-gray-200 bg-primary p-6 shadow-md max-sm:min-w-full"
            >
              <div className="flex h-2/5 w-full justify-center">
                <Image
                  src={imgSrc}
                  alt={title}
                  width={400}
                  height={400}
                  className="h-full object-cover"
                />
              </div>
              <h3 className="mt-8 w-full text-left text-2xl font-semibold text-text_color_primary">
                {title}
              </h3>
              <p className="mt-2 text-lg lg:text-xl line-clamp-4 w-full text-left text-text_color_secondary">
                {description}
              </p>
              <div className="mt-auto flex w-full justify-center">
                <Link href={link}>
                  <button className="flex w-fit items-center rounded-full border border-highlight bg-primary px-2 py-1 text-lg text-text_color_primary">
                    <p className="mx-auto">View More</p>
                    <Image
                      src="/assets/Images/home-page/right-arrow.svg"
                      alt="Arrow Icon"
                      width={16}
                      height={16}
                      className="mr-2"
                    />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
          onClick={() => scroll('right')}
        >
          <Image
            src="/assets/Images/home-page/arrow-2.svg"
            alt="Right Arrow"
            width={50}
            height={50}
          />
        </button> */}
      </div>
      <div className="mt-12 text-center">
        <Link
          href={'/service/performance-marketing'}
          className="inline-block rounded-md bg-highlight px-6 py-3 text-text_color_primary"
          style={{
            backgroundImage: 'linear-gradient(135deg, #FFCA28 5%, #FFB300 60%, #FFA000 100%)',
            cursor: 'pointer',
          }}
        >
          EXPLORE ALL
        </Link>
      </div>
    </div>
  );
};

export default OurServices;
