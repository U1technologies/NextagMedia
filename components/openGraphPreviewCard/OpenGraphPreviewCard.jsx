import React from 'react';
import Image from 'next/image';

const OpenGraphPreviewCard = ({ title, description, image, websiteUrl }) => {

  return (
    <div className="max-w-fit h-32 rounded overflow-hidden flex shadow-md border border-gray-200">
      {image && (
        <div className="relative w-[160px] h-32">
          <Image
            src={image}
            alt="Open Graph"
            layout="fill"
            objectFit="cover"
            className="rounded-l"
          />
        </div>
      )}
      <div className="px-3 w-[360px] pt-3 bg-gray-50">
        <div className='h-[75%]'>
          <p className="font-bold mb-1 text-black">{title}</p>
          <p className="w-full text-xs mb-2 h-15 text-black">{description}</p>
        </div>
        <p className="text-xs">{websiteUrl}</p>
      </div>
    </div>
  );
};

export default OpenGraphPreviewCard;
