import React, { useState } from 'react';

const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState('social');

  const tabClass = (tab) =>
    activeTab === tab
      ? 'bg-highlight text-text_color_primary hover:bg-primary-50'
      : 'bg-primary-600 text-text_color_primary';

  return (
    <div className="bg-primary py-10">
      <section id="portfolio" className="bg-secondary w-[90%] rounded-lg">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mx-auto mb-6">
            <h2 className="mt-3 text-4xl lg:text-5xl font-bold font-heading text-gray-900">
              Client Success Stories
            </h2>
            <p className="mt-4 text-lg lg:text-xl text-gray-600">
              Real results from our proven digital marketing strategies
            </p>
          </div>

          {/* Portfolio Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['social', 'ugc', 'ppc'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${tabClass(tab)}`}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeTab === 'social' && (
              <>
                {/* Case Study 1 */}
                <div className="glass-card group w-full h-fit overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
  <div className="h-[150px] w-full bg-[#ba8fdb]/30 p-6 aspect-video flex items-center justify-center object-cover transition-all duration-500 group-hover:scale-110">
    <div className="text-center">
      <div className="text-4xl font-bold text-primary-600 mb-2">
        +125%
      </div>
      <div className="text-gray-600">Organic Traffic Increase</div>
    </div>
  </div>
  <div className="px-6 py-5">
    <div className="flex items-center gap-2 mb-3">
      <span className="px-3 py-1 bg-primary border-2 border-color_purple font-semibold text-sm text-primary-600 rounded-full">
      Brand Awareness
      </span>
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">
      Villasita Resort in Haridwar
    </h3>
    <p className="text-gray-600 mb-4">
      Achieved a 125% increase in organic traffic by enhancing social media visibility, creating engaging content, and running targeted campaigns that drove user interaction and boosted brand presence.
    </p>
  </div>
</div>
                {/* Case Study 2 */}
                <div className="glass-card group w-full h-fit overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
  <div className="h-[150px] w-full bg-[#7ed7f7]/30 p-6 aspect-video flex items-center justify-center object-cover transition-all duration-500 group-hover:scale-110">
    <div className="text-center">
      <div className="text-4xl font-bold text-primary-600 mb-2">
        +140%
      </div>
      <div className="text-gray-600">Organic Traffic Increase</div>
    </div>
  </div>
  <div className="px-6 py-5">
    <div className="flex items-center gap-2 mb-3">
      <span className="px-3 py-1 bg-primary border border-color_blue font-semibold text-sm text-primary-600 rounded-full">
        Community Engagement
      </span>
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">
      Shri Bhagwan Gopidham Dharamshala
    </h3>
    <p className="text-gray-600 mb-4">
      Boosted organic traffic by 140% through culturally rich social media storytelling, devotional content, and community-focused campaigns that strengthened online presence and visitor engagement.
    </p>
  </div>
</div>
                {/* Case Study 3 */}
                <div className="glass-card group w-full h-fit overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
  <div className="h-[150px] w-full bg-[#e050b0]/30 p-6 aspect-video flex items-center justify-center object-cover transition-all duration-500 group-hover:scale-110">
    <div className="text-center">
      <div className="text-4xl font-bold text-primary-600 mb-2">
        +180%
      </div>
      <div className="text-gray-600">Organic Traffic Increase</div>
    </div>
  </div>
  <div className="px-6 py-5">
    <div className="flex items-center gap-2 mb-3">
      <span className="px-3 py-1 bg-primary border border-color_magenta font-semibold text-sm text-primary-600 rounded-full">
        Weddings & Hospitality
      </span>
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">
      Makhan Vihar, Ambikapur
    </h3>
    <p className="text-gray-600 mb-4">
      Generated a 180% rise in organic traffic through vibrant social media promotions showcasing elegant banquet spaces, premium rooms, and unforgettable wedding experiences.
    </p>
  </div>
</div>

              </>
            )}

            {(activeTab === 'ugc' || activeTab === 'ppc') && (
              <div className="col-span-full flex flex-col items-center justify-center py-20 bg-primary rounded-2xl shadow-inner">
                <h3 className="text-3xl font-bold text-gray-700 mb-4">
                  Coming Soon
                </h3>
                <p className="text-gray-500">
                  Our next success stories are coming soon. Stay tuned!
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioSection;
