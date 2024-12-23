// import React, { useState } from 'react';
// import Image from 'next/image';

// const Celebrations = () => {
//   const TITLE = 'Our Celebrations';
//   const eventImages = [
//     { image: '/assets/images/home-page/image1.jpg', alt: 'Event 1', caption: 'Lunch Party' },
//     { image: '/assets/images/home-page/image10.jpg', alt: 'Event 2', caption: 'Team Party' },
//     { image: '/assets/images/home-page/image2.jpg', alt: 'Event 3', caption: 'Festival Celebration' },
//     { image: '/assets/images/home-page/image4.jpg', alt: 'Event 4', caption: 'Workshop Event' },
//     { image: '/assets/images/home-page/image5.jpg', alt: 'Event 5', caption: 'Cultural Night' },
//     { image: '/assets/images/home-page/image6.jpg', alt: 'Event 6', caption: 'Celebration Day' },
//     { image: '/assets/images/home-page/image7.jpg', alt: 'Event 6', caption: 'Celebration Day' },
//     { image: '/assets/images/home-page/image8.jpg', alt: 'Event 6', caption: 'Celebration Day' },
//     { image: '/assets/images/home-page/image9.jpg', alt: 'Event 6', caption: 'Christmas Celebration' },
//   ];

//   const [currentPage, setCurrentPage] = useState(0);
//   const imagesPerPage = 6; 
//   const totalPages = Math.ceil(eventImages.length / imagesPerPage);

//   const handlePageClick = (pageIndex) => {
//     setCurrentPage(pageIndex);
//   };

//   const currentImages = eventImages.slice(currentPage * imagesPerPage, (currentPage + 1) * imagesPerPage);

//   return (
//     <div className="bg-secondary">
//       <section className="mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">{TITLE}</h2>
//         <p className="text-center text-gray-600 mb-8">
//           Celebrate moments of joy and togetherness with us through these cherished memories.
//         </p>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {currentImages.map((image, index) => (
//             <div
//               key={index}
//               className="relative overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
//             >
//               <Image
//                 src={image.image}
//                 alt={image.alt || `Celebration Image ${index + 1}`}
//                 width={400}
//                 height={400}
//                 className="object-cover w-[400px] h-[300px]"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
//                 <p className="text-white text-lg font-semibold">
//                   {image.caption || 'View Celebration'}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Page Navigation */}
//         <div className="flex justify-center mt-4">
//           {Array.from({ length: totalPages }, (_, index) => (
//             <button
//               key={index}
//               onClick={() => handlePageClick(index)}
//               className={`mx-1 h-[10px] w-[10px] rounded-full ${index === currentPage
//                 ? 'bg-[#ffc700]'
//                 : 'bg-gray-300'}`}
//               aria-label={`Page ${index + 1}`}
//             ></button>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Celebrations;

import React, { useState } from 'react';
import Image from 'next/image';
import Styles from "./index.module.css";

const Celebrations = () => {
  const TITLE = 'Our Celebrations';
  const eventImages = [
    { image: '/assets/images/home-page/image1.jpg', alt: 'Event 1', caption: 'Lunch Party' },
    { image: '/assets/images/home-page/image10.jpg', alt: 'Event 2', caption: 'Team Party' },
    { image: '/assets/images/home-page/image2.jpg', alt: 'Event 3', caption: 'Festival Celebration' },
    { image: '/assets/images/home-page/image4.jpg', alt: 'Event 4', caption: 'Workshop Event' },
    { image: '/assets/images/home-page/image5.jpg', alt: 'Event 5', caption: 'Cultural Night' },
    { image: '/assets/images/home-page/image6.jpg', alt: 'Event 6', caption: 'Celebration Day' },
    { image: '/assets/images/home-page/image7.jpg', alt: 'Event 6', caption: 'Celebration Day' },
    { image: '/assets/images/home-page/image8.jpg', alt: 'Event 6', caption: 'Celebration Day' },
    { image: '/assets/images/home-page/image9.jpg', alt: 'Event 6', caption: 'Christmas Celebration' },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const imagesPerPage = 6; 
  const totalPages = Math.ceil(eventImages.length / imagesPerPage);

  const handlePageClick = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const currentImages = eventImages.slice(currentPage * imagesPerPage, (currentPage + 1) * imagesPerPage);

  return (
    <div className="bg-secondary">
      <section className="mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-text_color_primary mb-6">{TITLE}</h2>
        <p className="text-center text-text_color_secondary mb-8">
          Celebrate moments of joy and togetherness with us through these cherished memories.
        </p>
        <div className="relative">
          {/* Scrollable container */}
          <div className={`flex overflow-x-auto gap-8 ${Styles.customScroll}`}>
            {eventImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105 min-w-[350px] max-sm:min-w-[270px]"
              >
                <Image
                  src={image.image}
                  alt={image.alt || `Celebration Image ${index + 1}`}
                  width={400}
                  height={300}
                  className="object-cover w-[350px] h-[280px] max-sm:w-[270px] max-sm:h-[240px]"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                  <p className="text-white text-lg font-semibold">
                    {image.caption || 'View Celebration'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Page Navigation */}
        {/* <div className="flex justify-center mt-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageClick(index)}
              className={`mx-1 h-[10px] w-[10px] rounded-full ${index === currentPage
                ? 'bg-[#ffc700]'
                : 'bg-gray-300'}`}
              aria-label={`Page ${index + 1}`}
            ></button>
          ))}
        </div> */}
      </section>
    </div>
  );
};

export default Celebrations;

