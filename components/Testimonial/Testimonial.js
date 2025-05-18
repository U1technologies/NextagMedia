import React from 'react';
import Card from './Card/Card';
import Styles from './index.module.css';

const Testimonial = () => {
  const H2_OUR_CLIENT = "What Our";
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
name: "Nancy",
designation: "BD Manager, Linkbux",
description: "With the help of performance marketing, our sales have increased significantly in a short time. The team has done incredible work, and we're really impressed with the results they've delivered.",
website: "linkbux.com"

    },
    {
      profileImage: "/assets/Images/home-page/ratul.jpeg",
      name: "Ratul Das",
      designation: "Head of Marketing, littlebox",
      description: "Thanks to the targeted ads and promotions run by the team, we saw a significant increase in orders within just a few months. Their efforts have truly made a difference.",
      website: "littleboxindia.com"      
    }
  ];

  return (
    <div className='bg-secondary'>
      <div className={`mx-[5%] md:mx-[7.5%] pt-16 pb-8`}>
        {/* <p className='font-semibold text-2xl text-text_color_secondary text-center'>{H2_OUR_CLIENT}</p> */}
        <div className="flex justify-center items-center font-semibold">
      <h3 className="mr-2 text-text_color_primary">
        {H2_OUR_CLIENT}
      </h3>
      <h3 className="text-gradient animate-gradient">
        Clients Say
      </h3>
    </div>
      
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
