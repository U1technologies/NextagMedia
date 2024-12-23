import React from 'react';
import SectionHeading from '../SectionHeading';
import Card from './Card/Card';
import Styles from './index.module.css';

const Testimonial = () => {
  const H2_OUR_CLIENT = "Customer Stories";
  const details = [
    {
      profileImage: "/assets/images/home-page/anupam.jpeg",
      name: "Sarah Johnson",
      designation: "CEO, TechStart Inc.",
      description: "Their digital marketing expertise has been instrumental in our growth. We've seen a 200% increase in qualified leads since partnering with them.",
    },
    {
      profileImage: "/assets/images/home-page/anupam.jpeg",
      name: "Michael Chen",
      designation: "Marketing Director, GrowthMax",
      description: "The ROI we've seen from their PPC campaigns has been remarkable. They truly understand our market and deliver results consistently.",
    },
    {
      profileImage: "/assets/images/home-page/anupam.jpeg",
      name: "Emily Rodriguez",
      designation: "Founder, Digital Edge",
      description: "Their SEO strategies have helped us achieve top rankings for our key terms. Our organic traffic has increased by 150% in just 6 months.",
    }
  ];

  return (
    <div className='bg-secondary'>
      <div className={`mx-[5%] md:mx-[7.5%] py-16`}>
        {/* <SectionHeading top={H3_TESTIMONIALS} main={H2_OUR_CLIENT} /> */}
        <p className='font-semibold text-2xl text-text_color_secondary text-center'>{H2_OUR_CLIENT}</p>
        <div className={`flex overflow-x-auto pt-16 pb-4 gap-12 ${Styles.customScroll}`}>
          {details.map((item, index) => (
            <div key={index} className="flex-shrink-0">
              <Card description={item} />
            </div>
          ))}
        </div> 
      </div>
    </div>
  );
};

export default Testimonial;
