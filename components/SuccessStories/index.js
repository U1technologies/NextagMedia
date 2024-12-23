import React from 'react';
import Image from 'next/image';
import { useState } from 'react';

const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState('all');

  const tabClass = (tab) =>
    activeTab === tab
      ? 'bg-highlight text-text_color_primary hover:bg-primary-50'
      : 'bg-primary-600 text-text_color_primary';

  return (
    <div className='bg-primary py-10'>
    <section id="portfolio" className="bg-secondary w-[90%] rounded-lg">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mx-auto mb-6">
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold font-heading text-gray-900">
            Client Success Stories
          </h2>
          <p className="mt-4 text:lg lg:text-xl text-gray-600">
            Real results from our proven digital marketing strategies
          </p>
        </div>

        {/* Portfolio Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {['all', 'seo', 'ppc', 'social'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${tabClass(tab)}`}
            >
              {tab === 'all'
                ? 'All Projects'
                : tab.toUpperCase().replace('_', ' ')}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Case Study 1 */}
          <div className="group w-full bg-primary h-fit rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="h-[200px] w-full bg-primary p-6 aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  +245%
                </div>
                <div className="text-gray-600">Organic Traffic Increase</div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-primary border border-highlight font-semibold text-sm text-primary-600 rounded-full">
                  SEO
                </span>
                <span className="px-3 py-1 bg-primary border border-highlight font-semibold text-sm text-primary-600 rounded-full">
                  E-commerce
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                TechGear Online Store
              </h3>
              <p className="text-gray-600 mb-4">
                Increased organic traffic by 245% and doubled conversion rates
                through strategic SEO optimization.
              </p>
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="group w-full bg-primary h-fit rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="h-[200px] w-full bg-primary p-6 aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  +245%
                </div>
                <div className="text-gray-600">Organic Traffic Increase</div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-primary border border-highlight font-semibold text-sm text-primary-600 rounded-full">
                  SEO
                </span>
                <span className="px-3 py-1 bg-primary border border-highlight font-semibold text-sm text-primary-600 rounded-full">
                  E-commerce
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                TechGear Online Store
              </h3>
              <p className="text-gray-600 mb-4">
                Increased organic traffic by 245% and doubled conversion rates
                through strategic SEO optimization.
              </p>
              {/* <a
                href="#contact"
                className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700"
              >
                View Case Study
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a> */}
            </div>
          </div>

          {/* Case Study 3 */}
          <div className="group w-full bg-primary h-fit rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="h-[200px] w-full bg-primary p-6 aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  +245%
                </div>
                <div className="text-gray-600">Organic Traffic Increase</div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-primary border border-highlight font-semibold text-sm text-primary-600 rounded-full">
                  SEO
                </span>
                <span className="px-3 py-1 bg-primary border border-highlight font-semibold text-sm text-primary-600 rounded-full">
                  E-commerce
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                TechGear Online Store
              </h3>
              <p className="text-gray-600 mb-4">
                Increased organic traffic by 245% and doubled conversion rates
                through strategic SEO optimization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default PortfolioSection;

