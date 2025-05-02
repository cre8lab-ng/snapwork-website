import React from 'react';

const ScrollingText: React.FC = () => {
  return (
    <div className="overflow-x-hidden whitespace-nowrap py-4 px-6 bg-gray-100">
      <div className="inline-flex space-x-8 animate-marquee">
        <div className="flex items-center text-lg font-extrabold text-blue-700 bg-blue-100 p-4 rounded-lg">
          <span role="img" aria-label="rocket" className="mr-2">🚀</span>
          Same day booking
        </div>
        <div className="flex items-center text-lg font-extrabold text-blue-700 bg-blue-100 p-4 rounded-lg">
          <span role="img" aria-label="globe" className="mr-2">🌏</span>
          Trusted service providers
        </div>
        <div className="flex items-center text-lg font-extrabold text-blue-700 bg-blue-100 p-4 rounded-lg">
          <span role="img" aria-label="location" className="mr-2">📍</span>
          Book Anytime, Anywhere
        </div>
        <div className="flex items-center text-lg font-extrabold text-blue-700 bg-blue-100 p-4 rounded-lg">
          <span role="img" aria-label="lightning" className="mr-2">⚡</span>
          Fast and easy
        </div>
      </div>
    </div>
  );
}

export default ScrollingText;
