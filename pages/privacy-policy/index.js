import Image from "next/image";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <section>
      <div>
        <div className="relative flex justify-center items-center">
          <div className="flex w-[100%] h-full items-center max-md:flex-col">
            <div className="flex flex-col justify-center items-start w-full lg:w-[50%] space-y-8">
              <h1 className="text-4xl lg:text-5xl font-bold text-left">
                Privacy Policy
              </h1>
              <p className="text-lg lg:text-xl font-normal text-left text-text_color_secondary w-[90%]">
                We value your privacy and are committed to protecting your
                personal information. Any data you provide is used to improve
                your experience and is kept secure. We do not share your
                information with third parties without your consent.
              </p>
              <div className="flex justify-start">
                <button className="bg-highlight text-base py-3 px-6 rounded-full">
                  READ MORE
                </button>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex justify-center items-center w-full lg:w-[50%]">
              <Image
                src="/assets/Images/home-page/Privacy.svg"
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
            U1 TECHNOLOGIES PRIVATE LIMITED headquartered in JPC, IST FLOOR,
            51,B-71, Unnamed Road, Sector 2, Noida, Gautam Buddha Nagar,
            Uttar Pradesh, 201301 processes Your personal data as part of the
            provision and operation of{" "}
            <a
              href="https://nextagmedia.com/"
              className="text-blue-500 underline"
            >
              https://nextagmedia.com/
            </a>{" "}
            and its associated subdomains. By using the Platform and/or
            accessing the Services hereunder you agree with this Privacy Policy
            (as it might be amended, revised or restated, from time to time)
            including the collection, processing and transfer of Your personal
            data, as provided herein. Please note that in order to use our
            Services, you must be 18 years of age or older.
          </p>
          <p className="text-lg lg:text-xl text-start py-4 text-text_color_secondary">
            Please check it, from time to time, as it may suffer amendments,
            revisions or restatements. If You do not agree with it, please stop
            using the Platform and the Services and stop providing any personal
            data to us.
          </p>
          <p className="text-lg lg:text-xl text-start py-4 text-text_color_secondary">
            As owner and operator of the Platform, U1 TECHNOLOGIES PRIVATE
            LIMITED is committed to compliance with all relevant EU and EU
            Member State laws in respect of personal data, and the protection of
            the “rights and freedoms” of individuals whose information U1
            TECHNOLOGIES PRIVATE LIMITED collects and processes in accordance
            with the General Data Protection Regulation (EU) 2016/679 (“GDPR”).
            GDPR strengthens the protection of the individual’s right to personal
            data protection, reflecting the nature of data protection as a
            fundamental right for the European Union and it will come into effect
            on 25 of May 2018. All processing of Your personal data shall be in
            accordance with the data protection principles set out in Article 5
            of the GDPR and both the Platform and U1 TECHNOLOGIES internal
            policies are designed to ensure compliance with such principles.
          </p>
          <p className="text-lg lg:text-xl text-start py-4 text-text_color_secondary">
            During and for the provision of our services through the Platform
            (“Services”), we collect and process personal data. According to
            GDPR, personal data is deemed any information relating to an
            identified or identifiable individual, natural person (“Data
            Subject”), meaning if a person can be detected, directly or
            indirectly, by reference to an identifier. This is the case if the
            assignment to one or more characteristics that are the expression of
            a physical, physiological, psychological, genetic, economic,
            cultural, or social identity is possible, for example: a person’s
            name; an email address or other online contact information, such as
            an instant messaging user identifier or a screen name that reveals an
            individual’s email address; a telephone number; identification
            numbers, such as a social insurance number, a personal number or an
            ID number; location data; online identifiers (this may involve IP
            addresses or cookies – You may find our Cookie Policy), or coded
            data that is derived from personal data. Additionally, to the extent
            any other information is associated or combined with such data, it
            may also be deemed personal data.
          </p>
          <p className=" text-lg lg:text-xl text-start py-4 text-text_color_secondary">
            U1 TECHNOLOGIES PRIVATE LIMITED is a data controller under GDPR. We
            are the controller of personal data provided by You through the
            Platform, unless otherwise indicated when such data is collected or
            otherwise stated herein. By this Privacy Policy, we inform You on
            if/what personal data we collect and process and how we deal with
            the personal data we collect from our Advertisers, Affiliates, simple
            visitors of our Platform, and e-commerce clients (i.e., buyers on
            our Advertisers’ websites) (collectively, You). If You have any
            general questions, complaints, or requests regarding or in relation
            to our Privacy Policy or practices, including specific requests such
            as rectifying, accessing, erasing, or withdrawing Your consent for
            processing personal data, please contact us at{" "}
            <a
              href="mailto:info@nextagmedia.com"
              className="text-blue-500 underline"
            >
              info@nextagmedia.com
            </a>
            . Access Right is part of Your Access Rights detailed under section
            6.1 below.
          </p>
          <p className="text-lg lg:text-xl text-start py-4 text-text_color_secondary">
            The way we collect and process your personal data depends on the
            nature of your interaction with the Platform. Below is an overview of
            how we handle your data:
          </p>

          <ul className="list-disc pl-6 text-text_color_secondary">
            <li>
              <strong>Personal Data from Advertisers:</strong>
              <ul className="list-decimal pl-6">
                <li>
                  <strong>Data Collected:</strong> Email, website domain, IP
                  address, username, password, company details, VAT number, and
                  payment information.
                </li>
                <li>
                  <strong>Purpose of Processing:</strong> To register your
                  Advertiser account, provide services, communicate regarding
                  financial issues, and send marketing information (subject to
                  consent).
                </li>
                <li>
                  <strong>Legal Basis:</strong> Performance of contract,
                  legitimate interest, and consent for marketing purposes.
                </li>
              </ul>
            </li>

            <li>
              <strong>Personal Data from Affiliates:</strong>
              <ul className="list-decimal pl-6">
                <li>
                  <strong>Data Collected:</strong> Email, IP address, username,
                  password, full name, phone number, payment details.
                </li>
                <li>
                  <strong>Purpose of Processing:</strong> To register your
                  Affiliate account, process payments, provide support, and send
                  marketing materials (with consent).
                </li>
                <li>
                  <strong>Legal Basis:</strong> Performance of contract,
                  legitimate interest, and consent for marketing or healthcare
                  benefits.
                </li>
              </ul>
            </li>

            <li>
              <strong>General Platform Usage Data:</strong>
              <ul className="list-decimal pl-6">
                <li>
                  <strong>Data Collected:</strong> Device information (OS,
                  browser), network connection, IP address, usage behavior.
                </li>
                <li>
                  <strong>Purpose of Processing:</strong> To enhance user
                  experience, improve the Platform, and provide personalized
                  marketing.
                </li>
                <li>
                  <strong>Legal Basis:</strong> Legitimate interest and consent
                  for marketing.
                </li>
              </ul>
            </li>

            <li>
              <strong>User Account Information:</strong>
              <ul className="list-decimal pl-6">
                <li>
                  <strong>Data Collected:</strong> User profile details such as
                  name, email address, contact number, account preferences.
                </li>
                <li>
                  <strong>Purpose of Processing:</strong> To provide personalized
                  services, account management, and communication related to the
                  Platform.
                </li>
                <li>
                  <strong>Legal Basis:</strong> Contractual necessity and
                  legitimate interest.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;


                           
                    