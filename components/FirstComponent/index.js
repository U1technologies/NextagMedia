import React from 'react';
import Image from 'next/image';

const FirstComponent = ({ data }) => {
    const { title, description, image } = data;
  return (
    <div>
      <section>
        <div className="m-auto flex h-auto flex-col items-center justify-between md:h-[400px] md:flex-row">
          <div className="w-full text-start">
            <h2 className='max-md:text-center'>{title}</h2>
            <p className="mt-4 hidden md:block w-[90%] text-text_color_secondary">{description}</p>
          </div>
          <div className="flex w-full items-center justify-center ">
            <div className="relative h-[350px] w-full md:max-w-[700px] max-md:w-[400px] max-md:my-12 lg:max-w-[900px] max-md:h-[280px] flex items-center justify-center">
              <Image
                src={image}
                alt="Description"
                width={640}
                height={380}
                className="rounded-xl object-cover"
              />
            </div>
          </div>
          <p className="mt-5 text-center md:hidden">{description}</p>
        </div>
      </section>
    </div>
  );
}

export default FirstComponent;
