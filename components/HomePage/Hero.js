// import React from "react";
// import Link from "next/link";
// import Image from "next/image";

// const Hero = () => {
//     return (
//         <section className="w-[90%] mx-auto">
//             <div className="relative flex flex-col md:flex-row justify-center items-center">
//                 <div className="flex flex-col justify-center items-start w-full lg:w-[50%] space-y-4">
//                     <p className="bg-secondary border border-gray-150 px-[12px] py-[6px] text-text_color_primary rounded-lg">
//                         NextagMedia - Digital Marketing Agency
//                     </p>
//                     <h1 className="text-4xl lg:text-5xl font-bold text-left">
//                         Empowering Your Business with Advanced Marketing and IT Solutions.
//                     </h1>
//                     <p className="text-lg lg:text-xl font-normal text-left text-text_color_secondary">
//                         Transform your vision into success with innovative marketing strategies and cutting-edge IT solutions tailored to elevate your business.
//                     </p>
//                     <div className="flex justify-start">
//                         <Link href="/contact">
//                             <button className="primary-button py-3 px-6 rounded-lg hover:bg-highlight hover:text-white mr-6">
//                                 Contact Us
//                             </button>
//                             <Link href="/service/performance-marketing">
//                             <button className="primary-button-outline py-3 px-6 rounded-lg hover:bg-highlight hover:text-text_color_primary"
//                                                         //  style={{
//                                                         //     backgroundImage: 'linear-gradient(135deg, #FFCA28 5%, #FFB300 60%, #FFA000 100%)',
//                                                         //     color: '#333333',
//                                                         //     border: 'none',
//                                                         //     padding: '10px 20px',
//                                                         //     borderRadius: '5px',
//                                                         //     cursor: 'pointer',
//                                                         //   }}
//                                                           >
//                                 Explore Services
//                             </button>
//                         </Link>
//                         </Link>
//                     </div>
 
//      <div class="pt-8 flex items-center gap-8">
//             <div class="flex -space-x-2">
//               <div class="w-14 h-14 rounded-full bg-primary border-2 border-highlight flex items-center justify-center">
//                 <span class="text-sm font-semibold">4.9★</span>
//               </div>
//               <div class="w-14 h-14 rounded-full bg-primary border-2 border-highlight flex items-center justify-center">
//                 <span class="text-sm font-semibold">500+</span>
//               </div>
//             </div>
//             <div>
//               <p class="font-semibold text-base text-text_color_primary">Trusted by 500+ Businesses</p>
//               <p className="text-base text-text_color_secondary">4.9/5 Average Rating</p>
//             </div>
//           </div>
//                 </div>

//                 <div className="flex justify-center items-center w-full lg:w-[50%] order-last md:order-none mt-6 md:mt-0">
//                     <Image 
//                         src="/assets/Images/home-page/xyz.svg" 
//                         alt="Hero Image"
//                         width={50}
//                         height={50}
//                         className="w-[100%] max-w-[510px] h-auto object-cover"
//                     />
//                 </div>
//             </div>
//          </section>
//     );
// };

// export default Hero;

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import Particles from "react-tsparticles";

const Hero = () => {
    const particlesInit = useCallback(async (engine) => {
      await loadFull(engine);
    }, []);
  
    const particlesOptions = {
      background: {
        color: {
          value: "transparent", // Transparent background to blend with the section
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "connect", 
          },
          resize: true,
          modes: {
            connect: {
              distance: 100, 
              radius: 150,   
            },
          },
          onClick: {
            enable: true,
            mode: "push",
          },
        },
      },
      particles: {
        color: {
          value: ["#c656a0", "#ffc700", "#5acbf5", "#5acbf5", "#333333", "#6e6e6e"],
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 2, max: 7 },
        },
      },
      detectRetina: true,
    };
  return (
    <section className="relative w-full h-screen overflow-hidden">
    {/* Overlay Div with Particles */}
    <div
      id="particles-js"
      className="absolute top-0 left-0 w-full h-full z-0"
      style={{ zIndex: -1 }}
    >
      {/* Particles Component */}
      <Particles
        init={particlesInit}
        options={particlesOptions}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: "0",
          left: "0",
        }}
      />
    </div>
  
    {/* Hero Content */}
    <div className="relative flex justify-center items-center z-10 w-full h-full">
      <div className="text-center space-y-4 -mt-20">
        <h1 className="font-bold mx-auto w-[1000px]">
          Empowering Your Business with Advanced Marketing and IT Solutions.
        </h1>
        <p className="text-lg lg:text-xl font-normal text-text_color_secondary mx-auto w-[800px]">
          Transform your vision into success with innovative marketing strategies and cutting-edge IT solutions tailored to elevate your business.
        </p>
        <div className="flex justify-center gap-6">
          <Link href="/contact">
            <button className="bg-gradient-to-r from-[#5acbf5] to-[#9de7f8] text-lg lg:text-xl py-3 px-6 rounded-lg hover:bg-highlight hover:text-white">
              Contact Us
            </button>
          </Link>
          <Link href="/service/performance-marketing">
            <button className="bg-gradient-to-r from-[#c656a0] to-[#d98ab5]
 text-lg lg:text-xl py-3 px-6 rounded-lg hover:bg-highlight hover:text-text_color_primary">
              Explore Services
            </button>
          </Link>
        </div>
      </div>
    </div>
  
    {/* The div you want to position at the bottom right */}
    <div className="absolute bottom-12 right-0 pb-8 pr-8 flex justify-end items-center gap-8 z-10">
      <div className="flex -space-x-2">
        <div className="w-14 h-14 rounded-full bg-primary border-2 border-highlight flex items-center justify-center">
          <span className="text-sm font-semibold">4.9★</span>
        </div>
        <div className="w-14 h-14 rounded-full bg-primary border-2 border-highlight flex items-center justify-center">
          <span className="text-sm font-semibold">500+</span>
        </div>
      </div>
      <div>
        <p className="font-semibold text-base text-text_color_primary">Trusted by 500+ Businesses</p>
        <p className="text-base text-text_color_secondary">4.9/5 Average Rating</p>
      </div>
    </div>
  </section>
  
)
  };
  
  
  

export default Hero;




