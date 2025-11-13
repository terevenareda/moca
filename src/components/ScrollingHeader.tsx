'use client'

import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const ScrollingHeader = () => {
  const items = [
    { text: 'GREAT TEAMS.', icon: '/assets/path.png', color: 'text-purple-600' },
    { text: 'GREATER', icon: '/assets/path2.png', color: 'text-purple-600' },
    { text: 'MEMBER EXPERIENCES', icon: '/assets/path3.png', color: 'text-purple-600' },
  ];

  return (
    <div className="overflow-hidden bg-white py-6 mb-8">
      <div className="flex gap-8 whitespace-nowrap animate-scroll">
        {[...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 text-2xl md:text-4xl font-bold flex-shrink-0">
            <span className={item.color}>{item.text}</span>
            <span className="text-3xl">{item.icon}</span>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 10s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default ScrollingHeader;
