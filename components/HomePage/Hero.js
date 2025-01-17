import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="w-[90%] mx-auto">
            <div className="relative flex flex-col md:flex-row justify-center items-center">
                <div className="flex flex-col justify-center items-start w-full lg:w-[50%] space-y-4">
                    <p className="bg-secondary border border-gray-150 px-[12px] py-[6px] text-text_color_primary rounded-lg">
                        NextagMedia - Digital Marketing Agency
                    </p>
                    <h1 className="text-4xl lg:text-5xl font-bold text-left">
                        Empowering Your Business with Advanced Marketing and IT Solutions.
                    </h1>
                    <p className="text-lg lg:text-xl font-normal text-left text-text_color_secondary">
                        Transform your vision into success with innovative marketing strategies and cutting-edge IT solutions tailored to elevate your business.
                    </p>
                    <div className="flex justify-start">
                        <Link href="/contact">
                            <button className="primary-button py-3 px-6 rounded-lg hover:bg-highlight hover:text-white mr-6">
                                Contact Us
                            </button>
                            <Link href="/service/performance-marketing">
                            <button className="primary-button-outline py-3 px-6 rounded-lg hover:bg-highlight hover:text-text_color_primary"
                                                        //  style={{
                                                        //     backgroundImage: 'linear-gradient(135deg, #FFCA28 5%, #FFB300 60%, #FFA000 100%)',
                                                        //     color: '#333333',
                                                        //     border: 'none',
                                                        //     padding: '10px 20px',
                                                        //     borderRadius: '5px',
                                                        //     cursor: 'pointer',
                                                        //   }}
                                                          >
                                Explore Services
                            </button>
                        </Link>
                        </Link>
                    </div>
 
     <div class="pt-8 flex items-center gap-8">
            <div class="flex -space-x-2">
              <div class="w-14 h-14 rounded-full bg-primary border-2 border-highlight flex items-center justify-center">
                <span class="text-sm font-semibold">4.9★</span>
              </div>
              <div class="w-14 h-14 rounded-full bg-primary border-2 border-highlight flex items-center justify-center">
                <span class="text-sm font-semibold">500+</span>
              </div>
            </div>
            <div>
              <p class="font-semibold text-base text-text_color_primary">Trusted by 500+ Businesses</p>
              <p className="text-base text-text_color_secondary">4.9/5 Average Rating</p>
            </div>
          </div>
                </div>

                <div className="flex justify-center items-center w-full lg:w-[50%] order-last md:order-none mt-6 md:mt-0">
                    <Image 
                        src="/assets/Images/home-page/xyz.svg" 
                        alt="Hero Image"
                        width={50}
                        height={50}
                        className="w-[100%] max-w-[510px] h-auto object-cover"
                    />
                </div>
            </div>
         </section>
    );
};

export default Hero;

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { loadFull } from "tsparticles";
// import { useCallback } from "react";
// import Particles from "react-particles"; 

// const Hero = () => {
//     const particlesInit = useCallback(async (engine) => {
//         // Initialize tsparticles instance
//         await loadFull(engine);
//     }, []);

//     const particlesOptions = {
//         background: {
//             color: "#f5f5f5", // Background color
//         },
//         fpsLimit: 60,
//         interactivity: {
//             events: {
//                 onHover: {
//                     enable: true,
//                     mode: "connect", // Connect dots on hover
//                 },
//                 resize: true,
//             },
//             modes: {
//                 connect: {
//                     radius: 100,
//                 },
//             },
//         },
//         particles: {
//             color: {
//                 value: ["#FF5722", "#FFC107", "#4CAF50", "#2196F3"], // Multicolor particles
//             },
//             links: {
//                 color: "#888",
//                 distance: 150,
//                 enable: true,
//                 opacity: 0.5,
//                 width: 1,
//             },
//             collisions: {
//                 enable: true,
//             },
//             move: {
//                 directions: "none",
//                 enable: true,
//                 outModes: {
//                     default: "bounce",
//                 },
//                 random: false,
//                 speed: 2,
//                 straight: false,
//             },
//             number: {
//                 density: {
//                     enable: true,
//                     area: 800,
//                 },
//                 value: 80, // Number of particles
//             },
//             opacity: {
//                 value: 0.5,
//             },
//             shape: {
//                 type: "circle", // Shape of particles
//             },
//             size: {
//                 value: { min: 1, max: 5 },
//             },
//         },
//         detectRetina: true,
//     };

//     return (
//         <section className="w-[90%] mx-auto relative">
//             {/* Particles Background */}
//             <div className="absolute inset-0">
//                 <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />
//             </div>

//             {/* Hero Content */}
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
//                         </Link>
//                         <Link href="/service/performance-marketing">
//                             <button className="primary-button-outline py-3 px-6 rounded-lg hover:bg-highlight hover:text-text_color_primary">
//                                 Explore Services
//                             </button>
//                         </Link>
//                     </div>

//                     <div className="pt-8 flex items-center gap-8">
//                         <div className="flex -space-x-2">
//                             <div className="w-14 h-14 rounded-full bg-primary border-2 border-highlight flex items-center justify-center">
//                                 <span className="text-sm font-semibold">4.9★</span>
//                             </div>
//                             <div className="w-14 h-14 rounded-full bg-primary border-2 border-highlight flex items-center justify-center">
//                                 <span className="text-sm font-semibold">500+</span>
//                             </div>
//                         </div>
//                         <div>
//                             <p className="font-semibold text-base text-text_color_primary">
//                                 Trusted by 500+ Businesses
//                             </p>
//                             <p className="text-base text-text_color_secondary">
//                                 4.9/5 Average Rating
//                             </p>
//                         </div>
//                     </div>
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
//         </section>
//     );
// };

// export default Hero;

