import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Styles from "./card.module.css";

const Card = ({ description }) => {
  return (
    <div className="flex flex-col w-[22rem] 2xl:w-[26rem] p-8 bg-primary rounded-lg shadow-md border border-gray-300">
      
      {/* Testimonial Description */}
      <p className={`text-text_color_secondary text-base mb-12 leading-relaxed ${Styles.story}`}>
        <h3 className="text-highlight">“</h3> 
        <p className='text-xl'>{description.description}</p>
        <h3 className="text-highlight">”</h3>
      </p>

      {/* Full-width Line with Right-Aligned Profile Image */}
      <div className="relative flex items-center mb-8">
        <div className="w-full border-t border-gray-300"></div>
        <div className="absolute -top-9 right-10 bg-white p-1 rounded-full border-2 border-gray-200">
          <Image
            src={description.profileImage}
            alt={`${description.name} Profile`}
            width={65}
            height={65}
            className="rounded-full"
          />
        </div>
      </div>

      {/* Name, Designation, and Website - Left-aligned */}
      <div className="text-left">
        <p className="text-text_color_primary font-bold">{description.name}</p>
        <p className="text-text_color_secondary text-lg">{description.designation}</p>
        
        {/* Website Link */}
        {description.website && (
          <p className="text-text_color_secondary hover:underline text-lg">
            <Link href={`https://${description.website}`} target="_blank">
              {description.website}
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
