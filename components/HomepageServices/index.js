import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const OurServices = () => {
  return (
    <div className="bg-secondary pb-12">
      <section className="mx-auto flex max-w-7xl flex-col items-center px-4 md:flex-row">

      <div className="w-full text-left md:hidden mb-10">
          <span className="w-fit rounded-full bg-highlight px-6 py-3 text-text_color_primary">
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
          <span className="w-fit rounded-full bg-highlight px-6 py-3 text-text_color_primary max-md:hidden">
            SERVICES
          </span>
          <h2 className="mt-6 text-4xl font-bold max-md:hidden">
            Your Dedicated Partner in Achieving Exceptional Digital Growth
          </h2>

          {/* Bullet Points */}
          <div className="mt-6 flex flex-col space-y-3">
            <div className="flex items-center space-x-2">
              <span className="">🗹</span>
              <span className="text-lg text-text_color_secondary">
                Higher Conversion Rates
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="">🗹</span>
              <span className="text-lg text-text_color_secondary">
                Local Market Dominance
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="">🗹</span>
              <span className="text-lg text-text_color_secondary">
                Increase Website Traffic
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="">🗹</span>
              <span className="text-lg text-text_color_secondary">
                24/7 Promotion
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Cards Section */}
      <div className="mx-auto max-w-7xl px-4 max-lg:max-w-[90%] max-md:max-w-[80%] max-sm:max-w-[90%]">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
          ].map(({ title, description, imgSrc, link}, idx) => (
            <div
              key={idx}
              className="flex h-[440px] flex-col items-center rounded-tl-[52px] rounded-br-[52px] border border-gray-200 bg-primary p-6 shadow-lg max-sm:h-[380px]"
            >
              {/* Image */}
              <div className="flex h-2/5 w-full justify-center">
                <Image
                  src={imgSrc}
                  alt={title}
                  width={400}
                  height={400}
                  className="h-full object-cover"
                />
              </div>
              {/* Title */}
              <h3 className="mt-10 w-full text-left text-2xl font-semibold text-text_color_primary">
                {title}
              </h3>
              {/* Description */}
              <p className="text-lg lg:text-xl mt-2 line-clamp-4 w-full text-left text-text_color_secondary">
                {description}
              </p>
              {/* Button */}
              <div className="mt-auto flex w-full justify-center">
                <Link href={link}>
                  <button className="flex w-fit items-center rounded-full border border-highlight bg-primary px-2 py-1 text-lg text-text_color_primary">
                    <p className=' mx-auto'>View More</p>
                  <Image
                    src="/assets/Images/home-page/right-arrow.svg"
                    alt="Arrow Icon"
                    width={16}
                    height={16}
                    className="mr-2"
                  />
                  {/* View More */}
                </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 text-center">
        <Link
          href={'/service/performance-marketing'}
          className="inline-block rounded-md bg-highlight px-8 py-3 text-text_color_primary"
        >
          EXPLORE ALL
        </Link>
      </div>
    </div>
  )
}

export default OurServices
