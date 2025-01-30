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
import { useCallback, useState, useEffect } from "react";
import Particles from "react-tsparticles";
import Styles from './Hero.module.css'
import { FaUser, FaEnvelope, FaPhone, FaList, FaComment } from "react-icons/fa"; // Import icons

const Hero = () => {
    const particlesInit = useCallback(async (engine) => {
      await loadFull(engine);
    }, []);

    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
    
    const [formSubmitted, setFormSubmitted] = useState(false);
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
    
    const handleSubmit = async (e) => {
      e.preventDefault();
    
      const { name, email, phone, service, message } = formData;
    
      if (!name || !email || !phone || !service) {
        alert("Please fill out all required fields.");
        return;
      }
    
      setFormSubmitted(true);
    
      try {
        // Add your API call logic here later
        console.log("Form data to be submitted:", formData);
    
        // Simulate a successful submission
        alert("Form submitted successfully!");
      } catch (error) {
        alert("There was an error submitting the form.");
      } finally {
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
        setTimeout(() => {
          setFormSubmitted(false);
        }, 3000);
      }
    };
  
    const particlesOptions = {
      background: {
        color: {
          value: "transparent",
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
          onClick: {
            enable: true,
            mode: "push",
          },
        },
        modes: {
          connect: {
            distance: 100,
            radius: 150,
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
          value: 0.9,
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
  
    // Rotating paragraphs logic
    const paragraphs = [
      "Your partner in digital transformation",
      "Your story, our strategy, everyone's attention.",
      "Marketing that matters, results that last.",
    ];
  
    const [currentParagraph, setCurrentParagraph] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentParagraph((prev) => (prev + 1) % paragraphs.length);
      }, 2000); // Change every 2 seconds
  
      return () => clearInterval(interval); // Cleanup interval on unmount
    }, [paragraphs.length]);
  
    return (
        <section className="relative w-full  overflow-hidden">
          {/* Overlay Div with Particles */}
          <div
            id="particles-js"
            className="absolute top-0 left-0 w-full h-full z-0"
            style={{ zIndex: -1 }}
          >
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
  {/* Responsive container for two sections */}
  <div className="flex flex-col lg:grid lg:grid-cols-2 w-full h-full">
    
    {/* Left Half - Content */}
    <div className="flex flex-col justify-center items-center lg:items-start space-y-4 pl-0 lg:pl-12 xl:pl-24 text-center lg:text-left">
      <h1 className="font-bold w-full max-sm:text-[3rem]">
        {currentParagraph === 0 ? (
          <>
            Your partner in digital <span className={Styles.gradientText1}>transformation.</span>
          </>
        ) : currentParagraph === 1 ? (
          <>
            Your story, our <span className={Styles.gradientText2}>strategy</span>, everyone's attention.
          </>
        ) : (
          <>
            Marketing that matters, <span className={Styles.gradientText3}>results</span> that last.
          </>
        )}
      </h1>

      {/* Stats */}
      <div className="flex justify-center lg:justify-start items-center gap-4 pt-5">
        <div className="flex -space-x-2">
          <div className="w-14 h-14 rounded-full bg-primary border-2 border-[#c656a0] flex items-center justify-center">
            <span className="text-sm font-semibold">4.9★</span>
          </div>
          <div className="w-14 h-14 rounded-full bg-primary border-2 border-[#5acbf5] flex items-center justify-center">
            <span className="text-sm font-semibold">500+</span>
          </div>
        </div>
        <div>
          <p className="font-semibold text-base text-text_color_primary">Trusted by 500+ Businesses</p>
          <p className="text-base text-text_color_secondary">4.9/5 Average Rating</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-center lg:justify-start gap-6 pt-5">
        <Link href="/contact">
          <button
            className="text-lg lg:text-xl py-3 px-6 rounded-lg w-[140px]"
            style={{ backgroundImage: 'linear-gradient(135deg, #FFCA28 30%, #FFB300 60%, #FFA000 100%)' }}
          >
            Contact Us
          </button>
        </Link>
        <Link href="/service/performance-marketing">
          <button
            className="bg-gradient-to-r from-[#c656a0] to-[#d98ab5] w-[140px] text-lg lg:text-xl py-3 px-6 rounded-lg"
          >
            Services
          </button>
        </Link>
      </div>
    </div>

    {/* Right Half - Form */}
    <div className="flex justify-center items-center p-8">
      <form
        className="w-full max-w-[500px] bg-primary rounded-lg p-6 space-y-4 backdrop-blur-sm"
        style={{
          border: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: `
            inset 0 0 4px rgba(255, 255, 255, 0.2), 
            0 2px 8px rgba(0, 0, 0, 0.1) 
          `,
        }}
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-center text-text_color_primary">
          Tell Us How We Can Help!
        </h2>

        {/* Name Field */}
        <div className="relative">
          <FaUser className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-highlight bg-transparent text-text_color_secondary peer"
            placeholder="Name *"
            required
          />
        </div>

        {/* Email Field */}
        <div className="relative">
          <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-highlight bg-transparent text-text_color_secondary peer"
            placeholder="Email *"
            required
          />
        </div>

        {/* Phone Field */}
        <div className="relative">
          <FaPhone className="absolute left-3 top-3 text-gray-400" />
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-highlight bg-transparent text-text_color_secondary peer"
            placeholder="Phone No. *"
            required
          />
        </div>

        {/* Service Field */}
        <div className="relative">
          <FaList className="absolute left-3 top-3 text-gray-400" />
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-highlight bg-transparent text-gray-400 appearance-none peer"
            required
          >
            <option value="" disabled hidden>Select a Service *</option>
            <option value="seo">Lead Generation</option>
            <option value="ppc">Paid Marketing</option>
            <option value="social-media">Social Media Management</option>
            <option value="web-development">Web Development</option>
            <option value="personal-branding">UGC Content</option>
            <option value="seo">SEO</option>
          </select>
        </div>

        {/* Message Field */}
        <div className="relative">
          <FaComment className="absolute left-3 top-3 text-gray-400" />
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-highlight bg-transparent text-text_color_secondary peer"
            placeholder="Write your query (Optional)"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="primary-button py-2 px-6 rounded-lg hover:bg-highlight hover:text-white"
          >
            Submit
          </button>
        </div>

        {/* Success Message */}
        {formSubmitted && (
          <p className="text-center text-lg text-text_color_secondary font-semibold">
            Thank you for reaching out! We will get back to you shortly.
          </p>
        )}
      </form>
    </div>
  </div>
</div>

        </section>
      );
      
  };
export default Hero;




