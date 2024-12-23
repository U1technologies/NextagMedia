import React, { useState } from 'react';

const FaqComponent = ({ faqSection }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg-secondary">
      <section className=" w-[70%] mx-auto">
        {/* Title & Description */}
        <div className="text-center mb-8">
          <p className="text-3xl font-bold text-text_color_primary">{faqSection?.title}</p>
          <p className="text-text_color_secondary mt-4 text-lg lg:text-xl">
            {faqSection?.description}
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqSection?.faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 overflow-hidden"
            >
              {/* Question */}
              <div
                className="p-4 bg-primary cursor-pointer flex justify-between items-center"
                onClick={() => toggleQuestion(index)}
              >
                <p className="text-lg lg:text-xl font-semibold text-text_color_primary">{faq.question}</p>
                <span className="text-2xl text-text_color_secondary">
                  {openIndex === index ? '−' : '+'}
                </span>
              </div>

              {/* Answer */}
              {openIndex === index && (
                <div className="p-4 bg-primary text-text_color_secondary text-lg lg:text-xl">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FaqComponent;
