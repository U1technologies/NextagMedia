import React from 'react';
import Card from './Card/Card';
import Styles from './index.module.css';

const Testimonial = () => {
  const H2_OUR_CLIENT = "Customer Stories";
  const details = [
    {
      profileImage: "/assets/Images/home-page/rohan.jpeg",
      name: "Rohan Chaturvedi",
      designation: "Growth Manager, Wakefit",
      description: "Great work driving sales through affiliate marketing. Your efforts have significantly boosted our growth and increased conversions!",
      website: "wakefit.co"
    },
    {
      profileImage: "/assets/Images/home-page/erina.jpeg",
      name: "Irina",
      designation: "Senior Manager, Advertise ",
      description: "The ROI we've seen from their PPC campaigns has been remarkable. They truly understand our market and deliver results consistently.",
      website: "advertise.net"
    },
    {
      profileImage: "/assets/Images/home-page/emily.png",
      name: "Emily Rodriguez",
      designation: "Founder, Digital Edge",
      description: "Their SEO strategies have helped us achieve top rankings for our key terms. Our organic traffic has increased by 150% in just 6 months.",
      website: "advertise.net"
    }
  ];

  return (
    <div className='bg-secondary'>
      <div className={`mx-[5%] md:mx-[7.5%] pt-16 pb-8`}>
        <p className='font-semibold text-2xl text-text_color_secondary text-center'>{H2_OUR_CLIENT}</p>
        <div className={`flex overflow-x-auto gap-12 ${Styles.customScroll}`}>
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
