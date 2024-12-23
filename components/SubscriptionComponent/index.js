import { PAID_MARKETING_PAGE } from '@/text';
import React from 'react';

const SubscriptionComponent = () => {
  const { subscriptions} = PAID_MARKETING_PAGE
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">SEO Marketing Pricing Plans</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {subscriptions.map((plan, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-lg shadow-lg bg-white ${
                plan.highlight ? 'border-4 border-purple-500' : 'border border-gray-200'
              }`}
            >
              {plan.highlight && (
                <span className="absolute top-0 right-0 bg-purple-500 text-white text-sm px-3 py-1 rounded-bl-lg">
                  {plan.highlight}
                </span>
              )}
              <h3 className="text-xl font-semibold">{plan.type}</h3>
              <p className="mt-2 text-gray-600">{plan.description}</p>
              <ul className="mt-4 space-y-2 text-left">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <span className="text-purple-500">✔</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 text-2xl font-bold">
                {plan.price}
                <span className="text-lg font-normal">{plan.period}</span>
              </div>
              <button className="mt-6 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionComponent;
