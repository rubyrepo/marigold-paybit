import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-26 px-4 lg:mx-20 my-5 mx-10 lg:py-36 lg:my-10 lg:border border-gray-300 rounded-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/assets/newsletter.svg"
            alt="Illustration"
            className="w-6/12 h-auto object-cover rounded-lg"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Stay Updated with Our Newsletter
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Subscribe to get the latest updates, news, and exclusive offers.
          </p>
          <div className="flex justify-center md:justify-start">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-64 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <button className="px-4 py-2 bg-black text-white rounded-r-lg hover:bg-gray-600 focus:outline-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
