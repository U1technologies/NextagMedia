import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Styles from './index.module.css';
import {
  Code,
  BarChart,
  PaintBucket,
  Globe,
  TrendingUp,
  Share2,
  CheckCircle,
  Users,
  User,
} from 'lucide-react';

const OurServices = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollBy({ left: -300, behavior: 'smooth' });
    } else {
      current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const services = [
    {
      title: 'Performance Marketing',
      description:
        'Reach your ideal audience with Nextagmedia’s customized paid marketing strategies. We ensure your ads connect with the right people at the right time, turning clicks into actionable leads and delivering a measurable return on investment.',
      icon: BarChart,
      link: '/service/performance-marketing',
    },
    {
      title: 'Social Media Management',
      description:
        "Boost your brand's visibility with impactful social media strategies. Nextagmedia helps you create engaging content, spark meaningful interactions, and strengthen your online presence across key platforms.",
      icon: Share2,
      link: '/service/social-media-management',
    },
    {
      title: 'Web Development',
      description:
        'Create a robust online presence with our expert web development services. We deliver user-friendly, responsive websites that reflect your brand, enhance visibility, and support sustainable growth.',
      icon: Code,
      link: '/service/web-development',
    },
    {
      title: 'SEO',
      description:
        'Improve your website’s visibility with Nextagmedia’s SEO solutions. Our optimized strategies help increase search rankings, drive quality traffic, and establish credibility in competitive markets.',
      icon: Globe,
      link: '/service/seo',
    },
    {
      title: 'Lead Generation',
      description:
        'Drive targeted leads with our efficient lead generation strategies. We help you attract potential customers, build meaningful connections, and boost conversions to grow your business effectively.',
      icon: Users,
      link: '/service/lead-generation',
    },
    {
      title: 'Personal Branding',
      description:
        'Build a strong, authentic personal brand that sets you apart in the digital landscape. Nextagmedia helps you showcase your expertise, amplify your voice, and create a compelling online presence to inspire trust and attract opportunities.',
      icon: User,
      link: '/service/personal-branding',
    },
    {
      title: 'UGC Content',
      description:
        'Leverage the power of user-generated content to build authenticity and engagement. Nextagmedia helps you curate, manage, and optimize UGC to strengthen your brand’s reputation and foster a loyal community.',
      icon: CheckCircle,
      link: '/service/ugc-content',
    },
  ];

  return (
    <div className="bg-secondary pb-12">
      <section className="mx-auto flex flex-col items-center md:flex-row">
        <div className="w-full text-left md:hidden mb-10">
          <span className="w-fit rounded-full bg-color_magenta px-6 py-3 text-primary">SERVICES</span>
          <h2 className="mt-6 text-4xl font-bold">
            Your Dedicated Partner in Achieving Exceptional Digital Growth
          </h2>
        </div>

        <div className="mb-8 flex justify-center md:mb-0 md:w-1/2 md:justify-start">
          <Image
            src="/assets/Images/home-page/services-market.jpg"
            width={550}
            height={550}
            alt="Service"
            className="  rounded-lg"
          />
        </div>

        <div className="w-full md:w-1/2 text-left">
          <span className="w-fit rounded-full bg-color_magenta px-6 py-3 text-primary max-md:hidden">SERVICES</span>
          <h2 className="mt-6 text-4xl font-bold max-md:hidden">
            Your Dedicated Partner in Achieving{' '}
            <span className="text-gradient">Exceptional Digital</span> Growth
          </h2>

          <div className="mt-6 flex flex-col space-y-3">
            {[
              'Higher Conversion Rates',
              'Local Market Dominance',
              'Increase Website Traffic',
              '24/7 Promotion',
            ].map((text, idx) => (
              <div className="flex items-center space-x-4" key={idx}>
                <Image
                  src="/assets/Images/home-page/icon-tick.svg"
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

      <div className="mx-auto max-w-[85%] pt-8 max-md:pt-0 relative">
        <div ref={scrollRef} className={`flex space-x-8 overflow-x-scroll ${Styles.customScroll}`}>
          {services.map(({ title, description, icon: Icon, link }, idx) => (
            <div
              key={idx}
              className="group flex min-w-[400px] h-[300px] mb-1 flex-col bg-primary shadow-lg max-sm:min-w-full rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center 
                  bg-gradient-to-r from-[#ba8fdb] to-[#7ed7f7] 
                  group-hover:from-[#e050b0] group-hover:to-[#ba8fdb] 
                  transition-all duration-300">
                <Icon className="w-8 h-10 text-white" />
              </div>
              <h3 className="mt-5 w-full text-left text-2xl font-semibold text-text_color_primary">
                {title}
              </h3>
              <p className="mt-2 text-lg lg:text-xl line-clamp-4 w-full text-left text-text_color_secondary">
                {description}
              </p>
              <div className="flex flex-row w-full justify-start mt-4">
                <Link href={link}>
                  <button className="text-lg text-color_magenta hover:text-color_blue flex items-center gap-3">
                    <span>Read More</span>
                    <Image
                      src="/assets/Images/home-page/right-arrow.svg"
                      alt="Arrow Icon"
                      width={16}
                      height={16}
                    />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-center space-x-2">
        <button className="z-10" onClick={() => scroll('left')}>
          <Image
            src="/assets/Images/home-page/leftArrow.svg"
            alt="Left Arrow"
            width={36}
            height={36}
          />
        </button>
        <button className="z-10" onClick={() => scroll('right')}>
          <Image
            src="/assets/Images/home-page/rightArrow.svg"
            alt="Right Arrow"
            width={36}
            height={36}
          />
        </button>
      </div>

      <div className="mt-12 text-center">
        <Link href={'/service/performance-marketing'} className="inline-block primary-button">
          Explore All
        </Link>
      </div>
    </div>
  );
};

export default OurServices;
