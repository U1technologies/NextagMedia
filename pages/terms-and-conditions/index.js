import Image from "next/image";
import Link from "next/link";
import React from "react";

const TermsAndConditions = () => {
  return (
    <section>
      <div>
        <div className="relative flex justify-center items-center">
          <div className="flex w-[100%] h-full items-center max-md:flex-col">
            <div className="flex flex-col justify-center items-start w-full lg:w-[50%] space-y-8">
              <h1 className="text-4xl lg:text-5xl font-bold text-left">
                Terms and Conditions
              </h1>
              <p className="text-lg lg:text-xl font-normal text-left text-text_color_secondary w-[90%]">
                These Terms and Conditions govern your use of the services provided by U1 TECHNOLOGIES PRIVATE LIMITED. By accessing or using our platform, you agree to comply with and be bound by these terms.
              </p>
              <div className="flex justify-start">
                <button className="bg-highlight text-base py-3 px-6 rounded-full hover:bg-highlight hover:text-white">
                  READ MORE
                </button>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex justify-center items-center w-full lg:w-[50%]">
              <Image 
                src="/assets/Images/home-page/terms.svg" 
                alt="Hero Image"
                height={50}
                width={50}
                className="w-[100%] max-w-[510px] h-auto object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col text-start py-12">
          <h3 className="text-text_color_primary">Introduction</h3>
          <p className="text-lg lg:text-xl text-start py-4 text-text_color_secondary">
            U1 TECHNOLOGIES PRIVATE LIMITED, located at JPC, IST FLOOR, 51, B-71, Unnamed Road, Sector 2, Noida, Gautam Buddha Nagar, Uttar Pradesh, 201301, provides marketing and performance services via our platform. These terms govern the use of our website, services, and all interactions with U1 TECHNOLOGIES.
          </p>
          <p className="text-lg lg:text-xl text-start py-4 text-text_color_secondary">
            By using our platform, you agree to these terms. Please read them carefully before accessing our services. If you do not agree with these terms, you must stop using our platform.
          </p>

          <h3 className="mt-4 text-text_color_primary">Use of Services</h3>
          <p className="text-lg lg:text-xl text-start py-4 text-text_color_secondary">
            U1 TECHNOLOGIES provides a variety of services, including performance marketing, CPA, CPL, CPS, and more. By accessing and using our platform, you agree to use our services in accordance with these Terms and Conditions and applicable laws.
          </p>

          <h3 className="mt-4 text-text_color_primary">Account Registration</h3>
          <p className="text-lg lg:text-xl text-start py-4 text-text_color_secondary">
            To use certain features of the platform, you must create an account. You agree to provide accurate information during registration and maintain the security of your account. You are responsible for all activity under your account.
          </p>

          <h3 className="mt-4 text-text_color_primary">Prohibited Uses</h3>
          <p className="text-lg lg:text-xl text-start py-4 text-text_color_secondary">
            You are prohibited from using our platform for illegal or harmful activities, including but not limited to fraud, spamming, or violating any laws. Any violation may result in the suspension or termination of your account.
          </p>

          <h3 className="mt-4 text-text_color_primary">Intellectual Property</h3>
          <p className="text-lg lg:text-xl text-start py-4 text-text_color_secondary">
            All content on the platform, including but not limited to text, graphics, images, logos, and software, is owned by U1 TECHNOLOGIES and is protected by intellectual property laws. You may not use or distribute any content without proper authorization.
          </p>

          <h3 className="mt-4 text-text_color_primary">Limitation of Liability</h3>
          <p className="text-lg lg:text-xl text-start py-4 text-text_color_secondary">
            U1 TECHNOLOGIES shall not be liable for any indirect, incidental, or consequential damages arising from your use of the platform or services. Our liability is limited to the extent permitted by law.
          </p>

          <h3 className="mt-4 text-text_color_primary">Data Privacy</h3>
          <p className="text-lg lg:text-xl text-start py-4 text-text_color_secondary">
             Your use of our platform may involve the collection and processing of personal data. Please refer to our{' '}
               <Link href="/privacy-policy">
                  <a className="text-blue-500 underline">Privacy Policy</a>
                     </Link>{' '}
                               for details on how we handle your data.
                                  </p>
          <h3 className="mt-4 text-text_color_primary">Amendments</h3>
          <p className="text-lg lg:text-xl text-start py-4 text-text_color_secondary">
            We reserve the right to modify or update these terms at any time. Any changes will be posted on this page, and it is your responsibility to review them periodically. Continued use of our platform after such changes indicates your acceptance of the new terms.
          </p>

          <h3 className="mt-4 text-text_color_primary">Governing Law</h3>
          <p className="text-lg lg:text-xl text-start py-4 text-text_color_secondary">
            These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or related to these terms shall be resolved in the courts of Noida, Uttar Pradesh.
          </p>

          <h3 className="mt-4 text-text_color_primary">Contact Information</h3>
          <p className="text-lg lg:text-xl text-start py-4 text-text_color_secondary">
            If you have any questions or concerns regarding these Terms and Conditions, please contact us at <a href="mailto:info@nextagmedia.com" className="text-blue-500 underline">info@nextagmedia.com</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
