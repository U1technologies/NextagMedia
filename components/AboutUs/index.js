import React from "react";
import Image from 'next/image';

const AboutUsSection = () => {
  // Function to handle the scroll to the ValuesSection
  const scrollToValuesSection = () => {
    const valuesSection = document.getElementById("values-section"); // Target the section with the id
    if (valuesSection) {
      valuesSection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to that section
    }
  };

  return (
    <section className="w-[90%]">
      <div className="relative flex justify-center items-center">
        <div className="flex flex-col md:flex-row h-full items-center">

          {/* Left Section */}
          <div className="flex flex-col justify-center items-start w-full lg:w-[50%] space-y-4 max-md:mb-8">
            <span className="text-color_purple font-semibold rounded-full w-fit py-2">Who we are?</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-left w-[90%]">
              Your Vision, Our Expertise: Tailored Design by a Committed Team
            </h1>
            <p className="text-lg lg:text-xl font-normal text-left text-text_color_secondary w-[90%]">
              At NextagMedia, our focus is on driving your success through exceptional digital design. We collaborate closely with you to bring your ideas to life, align with your vision, and create striking graphic and web designs that make your brand stand out.
            </p>
            {/* Know More button with onClick handler */}
            <span 
              className="text-primary bg-color_purple rounded-full w-fit px-6 py-3 cursor-pointer"
              onClick={scrollToValuesSection}
              // style={{
              //   backgroundImage: 'linear-gradient(135deg, #FFCA28 5%, #FFB300 60%, #FFA000 100%)',
              //   cursor: 'pointer',
              // }}
            >
              Know more
            </span>
          </div>

          {/* Right Section */}
          <div className="flex justify-center items-center w-full lg:w-[50%]">
  <video
    src="/assets/Images/home-page/Change1.mp4" // make sure the path is correct
    className="rounded-lg"
    height={800}
    width={800}
    controls // optional: adds play/pause UI
    autoPlay // optional: auto-plays the video
    loop // optional: loops the video
    muted // optional: mutes the video on autoplay
    playsInline // for iOS devices
  />
</div>

          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;

// import React from "react";

// const AboutUsSection = () => {
//   const scrollToValuesSection = () => {
//     const valuesSection = document.getElementById("values-section");
//     if (valuesSection) {
//       valuesSection.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <section className="relative w-full h-[80vh] overflow-hidden">
//       {/* Fullscreen video background */}
//       <video
//         src="/assets/Images/home-page/Change1.mp4"
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         autoPlay
//         loop
//         muted
//         playsInline
//       />

//       {/* Text content at top-left */}
//       {/* <div className="absolute top-10 left-10 z-10 max-w-2xl text-white space-y-6 px-4">
//         <span className="text-highlight font-semibold rounded-full w-fit py-2 text-lg bg-yellow-500 px-4">
//           WHO WE ARE?
//         </span>
//         <h1 className="text-4xl lg:text-5xl font-bold">
//           Your Vision, Our Expertise: Tailored Design by a Committed Team
//         </h1>
//         <p className="text-lg lg:text-xl font-light text-white/90">
//           At NextagMedia, our focus is on driving your success through exceptional digital design. We collaborate closely with you to bring your ideas to life, align with your vision, and create striking graphic and web designs that make your brand stand out.
//         </p>
//         <span
//           className="text-white bg-highlight rounded-full w-fit px-6 py-3 cursor-pointer font-semibold"
//           onClick={scrollToValuesSection}
//           style={{
//             backgroundImage: 'linear-gradient(135deg, #FFCA28 5%, #FFB300 60%, #FFA000 100%)',
//           }}
//         >
//           KNOW MORE
//         </span>
//       </div> */}
//     </section>
//   );
// };

// export default AboutUsSection;

